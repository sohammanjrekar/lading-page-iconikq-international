"use client";
import { useEffect, useState } from "react";
import { supabase } from './../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useSessionStore } from '../../store/sessionStore';

const BlogPage = () => {
  const router = useRouter();
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/Admin/Login');
    }
  }, [isAuthenticated, router]);

  const [blogPosts, setBlogPosts] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newTopic, setNewTopic] = useState('');
  const [newPassage1, setNewPassage1] = useState('');
  const [newPassage2, setNewPassage2] = useState('');
  const [newPassage3, setNewPassage3] = useState('');
  const [newImage1, setNewImage1] = useState('');
  const [newImage2, setNewImage2] = useState('');
  const [newImage3, setNewImage3] = useState('');
  const [editId, setEditId] = useState(null);
  const [cloudinaryLoaded, setCloudinaryLoaded] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    script.onload = () => setCloudinaryLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openWidget = (setImageCallback) => {
    if (!window.cloudinary) {
      console.error("Cloudinary widget not loaded");
      return;
    }
  
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "mybazaar",
        uploadPreset: "cgpgirkm",
        folder: "iconikq",
      },
      (error, result) => {
        if (result.event === "success" && result.info.resource_type === "image") {
          const imageUrl = `https://res.cloudinary.com/mybazaar/image/upload/v1730371595/${result.info.public_id}.${result.info.format}`;
          setImageCallback(imageUrl);
        }
      }
    );
    widget.open();
  };
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      const { data, error } = await supabase.from('blog_posts').select('*');
      if (error) console.error('Error fetching blog posts:', error);
      else setBlogPosts(data);
    };
    fetchBlogPosts();
  }, []);

  const showMessage = (type, message) => {
    if (type === 'success') setSuccessMessage(message);
    if (type === 'error') setErrorMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 5000);
  };

  const handleAddOrUpdateBlogPost = async () => {
    // Construct base URL for Cloudinary
    const cloudinaryBaseUrl = `https://res.cloudinary.com/mybazaar/image/upload/v1730354580/iconikq/`;
  
    const image1Url = newImage1 ? `${cloudinaryBaseUrl}${newImage1.split('/').pop()}` : null;
    const image2Url = newImage2 ? `${cloudinaryBaseUrl}${newImage2.split('/').pop()}` : null;
    const image3Url = newImage3 ? `${cloudinaryBaseUrl}${newImage3.split('/').pop()}` : null;
  
    if (editId) {
      // Update existing post
      const { data, error } = await supabase
        .from('blog_posts')
        .update({
          title: newTitle,
          passage1: newPassage1,
          passage2: newPassage2,
          passage3: newPassage3,
          image1: image1Url,
          image2: image2Url,
          image3: image3Url,
          topic: newTopic
        })
        .eq('id', editId);
  
      if (error) {
        console.error('Error updating blog post:', error);
        showMessage('error', 'Failed to update blog post.');
      } else {
        setBlogPosts(blogPosts.map(post => (post.id === editId ? data[0] : post)));
        showMessage('success', 'Blog post updated successfully!');
        clearFields();
      }
    } else {
      // Add new post
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([{
          title: newTitle,
          passage1: newPassage1,
          passage2: newPassage2,
          passage3: newPassage3,
          image1: image1Url,
          image2: image2Url,
          image3: image3Url,
          topic: newTopic
        }]);
  
      if (error) {
        console.error('Error adding blog post:', error);
        showMessage('error', 'Failed to add blog post.');
      } else {
        showMessage('success', 'Blog post added successfully!');
        setBlogPosts([...blogPosts, ...(Array.isArray(data) ? data : [data])]);
        clearFields();
      }
    }
  };
  

  const handleDeleteBlogPost = async (id) => {
    const { error } = await supabase.from('blog_posts').delete().eq('id', id);
    if (error) {
      console.error('Error deleting blog post:', error);
      showMessage('error', 'Failed to delete blog post.');
    } else {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
      showMessage('success', 'Blog post deleted successfully!');
    }
  };
  const setEditPost = (post) => {
    setEditId(post.id);
    setNewTitle(post.title);
    setNewTopic(post.topic);
    setNewPassage1(post.passage1);
    setNewPassage2(post.passage2);
    setNewPassage3(post.passage3);
    setNewImage1(post.image1);
    setNewImage2(post.image2);
    setNewImage3(post.image3);
  };


  const clearFields = () => {
    setNewTitle('');
    setNewTopic('');
    setNewPassage1('');
    setNewPassage2('');
    setNewPassage3('');
    setNewImage1('');
    setNewImage2('');
    setNewImage3('');
    setEditId(null);
  };

  return (
    <>
      <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800  container">New Blog Post</div>

      <div className="editor mx-auto container flex flex-col text-gray-800 border border-gray-300 p-8 w-[90vw] shadow-lg">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          className="topic bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Topic"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
        />
        <textarea
          className="passage1 bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
          placeholder="Passage 1"
          rows={5}
          value={newPassage1}
          onChange={(e) => setNewPassage1(e.target.value)}
        />
        <textarea
          className="passage2 bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
          placeholder="Passage 2"
          rows={5}
          value={newPassage2}
          onChange={(e) => setNewPassage2(e.target.value)}
        />
        <textarea
          className="passage3 bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
          placeholder="Passage 3"
          rows={5}
          value={newPassage3}
          onChange={(e) => setNewPassage3(e.target.value)}
        />

        {/* Image Uploads */}
        {[{ setImage: setNewImage1, image: newImage1 }, { setImage: setNewImage2, image: newImage2 }, { setImage: setNewImage3, image: newImage3 }].map(({ setImage, image }, index) => (
          <div key={index} className="mb-4 flex flex-row">
            <button
              className="upload-btn bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => openWidget(setImage)}
            >
              Upload Image {index + 1}
            </button>

            {image && (
              <img src={image} alt={`Preview ${index + 1}`} className="mx-5  h-40" />
            )}
          </div>
        ))}

        <div className="buttons flex mx-auto my-3">
          <button
            className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            onClick={clearFields}
          >
            Cancel
          </button>
          <button
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={handleAddOrUpdateBlogPost}
          >
            {editId ? "Update Post" : "Save Post"}
          </button>
         
        </div>
         {/* Success or Error Message */}
         {successMessage && (
            <div className="bg-white p-6 md:mx-auto text-center">
              <h3 className="md:text-2xl text-base text-green-400  font-semibold text-center">{successMessage}</h3>
            </div>
          )}
          {errorMessage && (
            <div className="bg-white p-6 md:mx-auto text-center">
              <h3 className="md:text-2xl text-base text-red-600 font-semibold text-center">{errorMessage}</h3>
            </div>
          )}
      </div>

      <div className="post-list mt-8 mb-14 container mx-auto w-[90vw]">
        <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">Blog Posts</h3>
        <div className="container flex flex-row">
        {blogPosts.map(post => (
post && post.title ? ( // Add this check
  <div key={post.id} className="post bg-white p-6 shadow-md mb-4 w-[40vw]">
            <h4 className="text-lg font-semibold">Title: {post.title}</h4>
            <p className="text-sm text-gray-700 my-2">Topic: {post.topic}</p>
            <p className="text-sm text-gray-700 my-2">Passage1:
              {post.passage1.length > 200 ? post.passage1.slice(0, 200) + "..." : post.passage1}
            </p>

            <div className="flex space-x-2 my-3">
              {post.image1 && <img src={post.image1} alt="Image 1" className="rounded-lg h-28 object-cover" />}
              {post.image2 && <img src={post.image2} alt="Image 2" className=" h-28 rounded-lg object-cover" />}
              {post.image3 && <img src={post.image3} alt="Image 3" className=" rounded-lg h-28 object-cover" />}
            </div>
            <button
              className="btn  border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-2"
              onClick={() => setEditPost(post)}
            >
              Edit
            </button>
            <button
              className="btn border border-red-500 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-2"
              onClick={() => handleDeleteBlogPost(post.id)}
            >
              Delete
            </button>
          </div>          ) : null 

        ))}</div>
      </div>
    </>
  );
};

export default BlogPage;
