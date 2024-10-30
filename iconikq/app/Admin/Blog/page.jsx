"use client";
import { useEffect, useState } from 'react';
import { supabase } from './../../utils/supabase/client';
import { useRouter } from 'next/navigation'; // Use this in the App Router
import { useSessionStore } from '../../store/sessionStore';

const BlogPage = () => {
  const router = useRouter();
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/Admin/Login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Prevent rendering until authentication is confirmed
  }

  const [blogPosts, setBlogPosts] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newPassages, setNewPassages] = useState('');
  const [newImages, setNewImages] = useState('');
  const [newTopic, setNewTopic] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const { data, error } = await supabase.from('blog_posts').select('*');
      if (error) console.error('Error fetching blog posts:', error);
      else setBlogPosts(data);
    };
    fetchBlogPosts();
  }, []);

  const handleAddBlogPost = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([{
        title: newTitle,
        passages: newPassages,
        images: newImages,
        topic: newTopic
      }]);
    if (error) console.error('Error adding blog post:', error);
    else setBlogPosts([...blogPosts, ...data]);
    clearFields();
  };

  const handleEditBlogPost = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .update({
        title: newTitle,
        passages: newPassages,
        images: newImages,
        topic: newTopic
      })
      .eq('id', editId);
    if (error) console.error('Error updating blog post:', error);
    else {
      setBlogPosts(blogPosts.map(post => (post.id === editId ? data[0] : post)));
      clearFields();
    }
  };

  const handleDeleteBlogPost = async (id) => {
    const { error } = await supabase.from('blog_posts').delete().eq('id', id);
    if (error) console.error('Error deleting blog post:', error);
    else setBlogPosts(blogPosts.filter(post => post.id !== id));
  };

  const clearFields = () => {
    setNewTitle('');
    setNewPassages('');
    setNewImages('');
    setNewTopic('');
    setEditId(null);
  };

  return (
    <>
      <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800">New Blog Post</div>

      <div className="editor mx-auto container flex flex-col text-gray-800 border border-gray-300 p-8 shadow-lg">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          className="passages bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
          placeholder="Passages"
          rows={20}
          value={newPassages}
          onChange={(e) => setNewPassages(e.target.value)}
        />
        <input
          className="images bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Image URLs (comma-separated)"
          value={newImages}
          onChange={(e) => setNewImages(e.target.value)}
        />
        <input
          className="topic bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Topic"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
        />

        <div className="buttons flex">
          <button
            className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            onClick={clearFields}
          >
            Cancel
          </button>
          <button
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={editId ? handleEditBlogPost : handleAddBlogPost}
          >
            {editId ? 'Save' : 'Post'}
          </button>
        </div>
      </div>

      {/* Display List */}
      <ul className="container mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map(post => (
          <li key={post.id} className="mb-6">
            <div className="relative flex flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="p-6">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {post.title}
                </h4>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  {post.passages}
                </p>
                <p className="mb-2 font-sans text-base font-normal leading-relaxed text-gray-500">
                  Topic: {post.topic}
                </p>
                <div className="flex">
                  <button
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={() => {
                      setEditId(post.id);
                      setNewTitle(post.title);
                      setNewPassages(post.passages);
                      setNewImages(post.images);
                      setNewTopic(post.topic);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline ml-4"
                    onClick={() => handleDeleteBlogPost(post.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;
