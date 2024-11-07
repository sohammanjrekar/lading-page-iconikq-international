"use client";
import { useEffect, useState } from "react";
import { supabase } from './../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useSessionStore } from '../../store/sessionStore';

const GalleryPage = () => {
  const router = useRouter();
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/Admin/Login');
    }
  }, [isAuthenticated, router]);

  const [galleryItems, setGalleryItems] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
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

  const fetchGalleryItems = async () => {
    const { data, error } = await supabase.from('gallery').select('*');
    if (error) console.error('Error fetching gallery items:', error);
    else setGalleryItems(data);
  };

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const showMessage = (type, message) => {
    if (type === 'success') setSuccessMessage(message);
    if (type === 'error') setErrorMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 5000);
  };

  const handleAddOrUpdateGalleryItem = async () => {
    if (editId) {
      const { data, error } = await supabase
        .from('gallery')
        .update({
          title: newTitle,
          description: newDescription,
          image_url: newImageUrl
        })
        .eq('id', editId);
      if (error) {
        console.error('Error updating gallery item:', error);
        showMessage('error', 'Failed to update gallery item.');
      } else {
        showMessage('success', 'Gallery item updated successfully!');
        fetchGalleryItems();
        clearFields();
      }
    } else {
      const { data, error } = await supabase
        .from('gallery')
        .insert([{
          title: newTitle,
          description: newDescription,
          image_url: newImageUrl
        }]);
      if (error) {
        console.error('Error adding gallery item:', error);
        showMessage('error', 'Failed to add gallery item.');
      } else {
        showMessage('success', 'Gallery item added successfully!');
        fetchGalleryItems();
        clearFields();
      }
    }
  };

  const handleDeleteGalleryItem = async (id) => {
    const { error } = await supabase.from('gallery').delete().eq('id', id);
    if (error) {
      console.error('Error deleting gallery item:', error);
      showMessage('error', 'Failed to delete gallery item.');
    } else {
      setGalleryItems(galleryItems.filter(item => item.id !== id));
      showMessage('success', 'Gallery item deleted successfully!');
    }
  };

  const setEditGalleryItem = (item) => {
    setEditId(item.id);
    setNewTitle(item.title);
    setNewDescription(item.description);
    setNewImageUrl(item.image_url);
  };

  const clearFields = () => {
    setNewTitle('');
    setNewDescription('');
    setNewImageUrl('');
    setEditId(null);
  };

  return (
    <>
      <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800 container">New Gallery Item</div>

      <div className="editor mx-auto container flex flex-col text-gray-800 border border-gray-300 p-8 w-[90vw] shadow-lg">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          className="description bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
          placeholder="Description"
          rows={5}
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />

        {/* Image Upload */}
        <div className="mb-4 flex flex-row">
          <button
            className="upload-btn bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => openWidget(setNewImageUrl)}
          >
            Upload Image
          </button>

          {newImageUrl && (
            <img src={newImageUrl} alt="Preview" className="mx-5 h-40" />
          )}
        </div>

        <div className="buttons flex mx-auto my-3">
          <button
            className="btn border rounded-md border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            onClick={clearFields}
          >
            Cancel
          </button>
          <button
            className="btn border rounded-md border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={handleAddOrUpdateGalleryItem}
          >
            {editId ? "Update Gallery Item" : "Save Gallery Item"}
          </button>
        </div>

        {/* Success or Error Message */}
        {successMessage && (
          <div className="bg-white p-6 md:mx-auto text-center">
            <h3 className="md:text-2xl text-base text-green-600 font-semibold text-center">{successMessage}</h3>
          </div>
        )}
        {errorMessage && (
          <div className="bg-white p-6 md:mx-auto text-center">
            <h3 className="md:text-2xl text-base text-red-600 font-semibold text-center">{errorMessage}</h3>
          </div>
        )}
      </div>

      <div className="gallery-list mt-8 mb-14 container mx-auto w-[90vw]">
        <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">Gallery Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map(item => (
            
              item && 
            <div key={item.id} className="gallery-item bg-white p-4 shadow-md">
              <h4 className="text-lg font-semibold">Title: {item.title}</h4>
              <p className="text-sm text-gray-700 my-2">Description: {item.description}</p>

              {item.image_url && (
                <img src={item.image_url} alt="Gallery Item" className="rounded-lg my-5 h-40 object-cover" />
              )}
              <button
                className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-2"
                onClick={() => setEditGalleryItem(item)}
              >
                Edit
              </button>
              <button
                className="btn border border-red-500 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-2"
                onClick={() => handleDeleteGalleryItem(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
