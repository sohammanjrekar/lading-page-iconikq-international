"use client";
import { useEffect, useState } from "react";
import { supabase } from './../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useSessionStore } from '../../store/sessionStore';

const MediaPage = () => {
  const router = useRouter();
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/Admin/Login');
    }
  }, [isAuthenticated, router]);

  const [mediaItems, setMediaItems] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newIframe, setNewIframe] = useState('');
  const [editId, setEditId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const showMessage = (type, message) => {
    if (type === 'success') setSuccessMessage(message);
    if (type === 'error') setErrorMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 5000);
  };

  useEffect(() => {
    const fetchMediaItems = async () => {
      const { data, error } = await supabase.from('media').select('*');
      if (error) console.error('Error fetching media items:', error);
      else setMediaItems(data);
    };
    fetchMediaItems();
  }, []);

  const handleAddOrUpdateMediaItem = async () => {
    if (editId) {
      // Update existing media item
      const { data, error } = await supabase
        .from('media')
        .update({
          title: newTitle,
          description: newDescription,
          youtube_iframe: newIframe
        })
        .eq('id', editId);
      if (error) {
        console.error('Error updating media item:', error);
        showMessage('error', 'Failed to update media item.');
      } else {
        setMediaItems(mediaItems.map(item => (item.id === editId ? data[0] : item)));
        showMessage('success', 'Media item updated successfully!');
        clearFields();
      }
    } else {
      // Add new media item
      const { data, error } = await supabase
        .from('media')
        .insert([{
          title: newTitle,
          description: newDescription,
          youtube_iframe: newIframe
        }]);
      if (error) {
        console.error('Error adding media item:', error);
        showMessage('error', 'Failed to add media item.');
      } else {
        showMessage('success', 'Media item added successfully!');
        setMediaItems([...mediaItems, ...(Array.isArray(data) ? data : [data])]);
        clearFields();
      }
    }
  };

  const handleDeleteMediaItem = async (id) => {
    const { error } = await supabase.from('media').delete().eq('id', id);
    if (error) {
      console.error('Error deleting media item:', error);
      showMessage('error', 'Failed to delete media item.');
    } else {
      setMediaItems(mediaItems.filter(item => item.id !== id));
      showMessage('success', 'Media item deleted successfully!');
    }
  };

  const setEditMediaItem = (item) => {
    setEditId(item.id);
    setNewTitle(item.title);
    setNewDescription(item.description);
    setNewIframe(item.youtube_iframe);
  };

  const clearFields = () => {
    setNewTitle('');
    setNewDescription('');
    setNewIframe('');
    setEditId(null);
  };

  return (
    <>
      <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800 container">New Media Item</div>

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
        <textarea
          className="iframe bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
          placeholder="YouTube Iframe"
          rows={5}
          value={newIframe}
          onChange={(e) => setNewIframe(e.target.value)}
        />

        <div className="buttons flex mx-auto my-3">
          <button
            className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            onClick={clearFields}
          >
            Cancel
          </button>
          <button
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={handleAddOrUpdateMediaItem}
          >
            {editId ? "Update Media Item" : "Save Media Item"}
          </button>
        </div>

        {/* Success or Error Message */}
        {successMessage && (
          <div className="bg-white p-6 md:mx-auto text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">{successMessage}</h3>
          </div>
        )}
        {errorMessage && (
          <div className="bg-white p-6 md:mx-auto text-center">
            <h3 className="md:text-2xl text-base text-red-600 font-semibold text-center">{errorMessage}</h3>
          </div>
        )}
      </div>

      <div className="media-list mt-8 mb-14 container mx-auto w-[90vw]">
        <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">Media Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {mediaItems.map(item => (
            <div key={item.id} className="media-item bg-white p-4 shadow-md">
              <h4 className="text-lg font-semibold">Title: {item.title}</h4>
              <p className="text-sm text-gray-700 my-2">Description: {item.description}</p>

              {item.youtube_iframe && (
                <div className="iframe-container my-5" dangerouslySetInnerHTML={{ __html: item.youtube_iframe }} />
              )}
              <button
                className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-2"
                onClick={() => setEditMediaItem(item)}
              >
                Edit
              </button>
              <button
                className="btn border border-red-500 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-2"
                onClick={() => handleDeleteMediaItem(item.id)}
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

export default MediaPage;
