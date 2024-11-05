"use client";
import { useEffect, useState } from "react";
import { supabase } from './../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useSessionStore } from '../../store/sessionStore';

const AchievementPage = () => {
  const router = useRouter();
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/Admin/Login');
    }
  }, [isAuthenticated, router]);

  const [achievements, setAchievements] = useState([]);
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

  const fetchAchievements = async () => {
    const { data, error } = await supabase.from('achievements').select('*');
    if (error) {
      console.error('Error fetching achievements:', error);
    } else {
      setAchievements(data);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  const showMessage = (type, message) => {
    if (type === 'success') setSuccessMessage(message);
    if (type === 'error') setErrorMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 5000);
  };

  const handleAddOrUpdateAchievement = async () => {
    if (editId) {
      const { data, error } = await supabase
        .from('achievements')
        .update({
          title: newTitle,
          description: newDescription,
          image_url: newImageUrl
        })
        .eq('id', editId);

      if (error) {
        console.error('Error updating achievement:', error);
        showMessage('error', 'Failed to update achievement.');
      } else {
        showMessage('success', 'Achievement updated successfully!');
        clearFields();
        fetchAchievements(); // Fetch all achievements after update
      }
    } else {
      const { data, error } = await supabase
        .from('achievements')
        .insert([{
          title: newTitle,
          description: newDescription,
          image_url: newImageUrl
        }]);

      if (error) {
        console.error('Error adding achievement:', error);
        showMessage('error', 'Failed to add achievement.');
      } else {
        showMessage('success', 'Achievement added successfully!');
        clearFields();
        fetchAchievements(); // Fetch all achievements after adding a new one
      }
    }
  };

  const handleDeleteAchievement = async (id) => {
    const { error } = await supabase.from('achievements').delete().eq('id', id);
    if (error) {
      console.error('Error deleting achievement:', error);
      showMessage('error', 'Failed to delete achievement.');
    } else {
      showMessage('success', 'Achievement deleted successfully!');
      fetchAchievements(); // Fetch all achievements after deletion
    }
  };

  const setEditAchievement = (achiev) => {
    setEditId(achiev.id);
    setNewTitle(achiev.title);
    setNewDescription(achiev.description);
    setNewImageUrl(achiev.image_url);
  };

  const clearFields = () => {
    setNewTitle('');
    setNewDescription('');
    setNewImageUrl('');
    setEditId(null);
  };

  return (
    <>
      <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800 container">New Achievement</div>

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
            className="upload-btn bg-myred text-white py-2 px-4 rounded"
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
            className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            onClick={clearFields}
          >
            Cancel
          </button>
          <button
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={handleAddOrUpdateAchievement}
          >
            {editId ? "Update Achievement" : "Save Achievement"}
          </button>
        
        </div>
          {/* Success or Error Message */}
          {successMessage && (
            <div className="bg-white p-6 md:mx-auto text-center">
              <h3 className="md:text-2xl text-base text-green-500 font-semibold text-center">{successMessage}</h3>
            </div>
          )}
          {errorMessage && (
            <div className="bg-white p-6 md:mx-auto text-center">
              <h3 className="md:text-2xl text-base text-red-600 font-semibold text-center">{errorMessage}</h3>
            </div>
          )}
      </div>

      <div className="achievement-list mt-8 mb-14 container mx-auto w-[90vw]">
        <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">Achievements</h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {achievements && achievements.map(achiev => (
          achiev ? (
            <div key={achiev.id} className="achievement bg-white p-6 shadow-md mb-4">
              <h4 className="text-lg font-semibold"><span className="text-myred">Title:</span> {achiev.title}</h4>
              <p className="text-md text-gray-700 my-2"><span className="text-myred">Description: </span>{achiev.description}</p>

              {achiev.image_url && (
                <img src={achiev.image_url} alt="Achievement" className="rounded-lg my-5 h-[20vh] object-cover" />
              )}
              <button
                className="btn border rounded-md shadow-2xl bg-indigo-500 p-1 px-4 font-semibold cursor-pointer text-myblue ml-2"
                onClick={() => setEditAchievement(achiev)}
              >
                Edit
              </button>
              <button
                className="btn border rounded-md shadow-2xl bg-red-500 p-1 px-4 font-semibold cursor-pointer text-myblue ml-2"
                onClick={() => handleDeleteAchievement(achiev.id)}
              >
                Delete
              </button>
            </div>
          ) : null
        ))}</div>

      </div>
    </>
  );
};

export default AchievementPage;
