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
  const [selectedCategory, setSelectedCategory] = useState('');
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

  const fetchBlogPosts = async () => {
    const { data, error } = await supabase.from('blog_posts').select('*');
    if (error) {
      console.error('Error fetching blog posts:', error);
    } else {
      setBlogPosts(data);
    }
  };

  useEffect(() => {
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
    const cloudinaryBaseUrl = `https://res.cloudinary.com/mybazaar/image/upload/v1730354580/iconikq/`;

    const image1Url = newImage1 ? `${cloudinaryBaseUrl}${newImage1.split('/').pop()}` : null;
    const image2Url = newImage2 ? `${cloudinaryBaseUrl}${newImage2.split('/').pop()}` : null;
    const image3Url = newImage3 ? `${cloudinaryBaseUrl}${newImage3.split('/').pop()}` : null;

    if (editId) {
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
          topic: selectedCategory,
        })
        .eq('id', editId);

      if (error) {
        console.error('Error updating blog post:', error);
        showMessage('error', 'Failed to update blog post.');
      } else {
        showMessage('success', 'Blog post updated successfully!');
        clearFields();
        fetchBlogPosts(); // Fetch blog posts again after update
      }
    } else {
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
          topic: selectedCategory,
        }]);

      if (error) {
        console.error('Error adding blog post:', error);
        showMessage('error', 'Failed to add blog post.');
      } else {
        showMessage('success', 'Blog post added successfully!');
        clearFields();
        fetchBlogPosts(); // Fetch blog posts again after adding
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
    setSelectedCategory(post.topic);
    setNewPassage1(post.passage1);
    setNewPassage2(post.passage2);
    setNewPassage3(post.passage3);
    setNewImage1(post.image1);
    setNewImage2(post.image2);
    setNewImage3(post.image3);
  };

  const clearFields = () => {
    setNewTitle('');
    setSelectedCategory('');
    setNewPassage1('');
    setNewPassage2('');
    setNewPassage3('');
    setNewImage1('');
    setNewImage2('');
    setNewImage3('');
    setEditId(null);
  };

  const slugOptions = [
    { value: '', label: 'Select Category' },
    { value: 'Transportation', label: 'Transportation' },
    { value: 'Freight Forwarding', label: 'Freight Forwarding' },
    { value: 'Inventory Management', label: 'Inventory Management' },
    { value: 'Custom Broker Services', label: 'Custom Broker Services' },
    { value: 'Supply Chain Consulting', label: 'Supply Chain Consulting' },
    { value: 'Legal Consultants', label: 'Legal Consultants' },
  ];

  return (
    <>
      <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800 container">New Blog Post</div>

      <div className="editor mx-auto container flex flex-col text-gray-800 border border-gray-300 p-8 w-[90vw] shadow-lg">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <select
          className="category bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          
          {slugOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
        </select>

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
        {[{ setImage: setNewImage1, imageUrl: newImage1 }, { setImage: setNewImage2, imageUrl: newImage2 }, { setImage: setNewImage3, imageUrl: newImage3 }].map((image, index) => (
          <div key={index} className="flex flex-wrap">
            <button className="bg-myred text-white p-2 mb-4" onClick={() => openWidget(image.setImage)}>
              Upload Image {index + 1}
            </button>
            {image.imageUrl && <img src={image.imageUrl} alt={`Image ${index + 1}`} className="w-auto h-[30vh] mx-5 mb-4" />}
          </div>
        ))}

        <div className="mb-4">
          <button className="bg-blue-500 text-white p-2" onClick={handleAddOrUpdateBlogPost}>
            {editId ? 'Update Blog Post' : 'Add Blog Post'}
          </button>
        </div>

        {successMessage && <div className="text-green-500 text-center text-lg">{successMessage}</div>}
        {errorMessage && <div className="text-lg text-red-500 text-center">{errorMessage}</div>}
      </div>
      <div className="post-list mt-8 mb-14 container mx-auto w-[90vw]">
        <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">Blog Posts</h3>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
        {blogPosts.map(post => (
post && post.title ? ( // Add this check
  <div key={post.id} className="post shadow-lg bg-white p-6  mb-4 ">
            <h4 className="text-lg text-myblue font-semibold"> <span className="text-myred">Title:</span> {post.title}</h4>
            <p className="text-md text-gray-700 my-2"><span className="text-myred">Topic:</span> {post.topic}</p>
            <p className="text-md text-gray-700 my-2"><span className="text-myred">Passage1:</span>
              {post.passage1.length > 200 ? post.passage1.slice(0, 200) + "..." : post.passage1}
            </p>

            <div className="flex flex-wrap flex-row space-x-2 my-3">
              {post.image1 && <img src={post.image1} alt="Image 1" className="rounded-lg h-28 object-cover" />}
              {post.image2 && <img src={post.image2} alt="Image 2" className=" h-28 rounded-lg object-cover" />}
              {post.image3 && <img src={post.image3} alt="Image 3" className=" rounded-lg h-28 object-cover" />}
            </div>
            <button
              className="btn  border bg-indigo-500 p-1 px-4 font-semibold cursor-pointer text-myblue ml-2"
              onClick={() => setEditPost(post)}
            >
              Edit
            </button>
            <button
              className="btn border bg-red-500 p-1 px-4 font-semibold cursor-pointer text-myblue ml-2"
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
