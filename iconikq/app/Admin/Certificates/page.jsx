"use client";
import { useEffect, useState } from "react";
import { supabase } from './../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useSessionStore } from '../../store/sessionStore';

const CertificatePage = () => {
  const router = useRouter();
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/Admin/Login');
    }
  }, [isAuthenticated, router]);

  const [certificates, setCertificates] = useState([]);
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

  const fetchCertificates = async () => {
    const { data, error } = await supabase.from('certificates').select('*');
    if (error) {
      console.error('Error fetching certificates:', error);
    } else {
      setCertificates(data);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const showMessage = (type, message) => {
    if (type === 'success') setSuccessMessage(message);
    if (type === 'error') setErrorMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 5000);
  };

  const handleAddOrUpdateCertificate = async () => {
    if (editId) {
      const { data, error } = await supabase
        .from('certificates')
        .update({
          title: newTitle,
          description: newDescription,
          image_url: newImageUrl
        })
        .eq('id', editId);

      if (error) {
        console.error('Error updating certificate:', error);
        showMessage('error', 'Failed to update certificate.');
      } else {
        showMessage('success', 'Certificate updated successfully!');
        clearFields();
        fetchCertificates(); // Fetch all certificates after update
      }
    } else {
      const { data, error } = await supabase
        .from('certificates')
        .insert([{
          title: newTitle,
          description: newDescription,
          image_url: newImageUrl
        }]);

      if (error) {
        console.error('Error adding certificate:', error);
        showMessage('error', 'Failed to add certificate.');
      } else {
        showMessage('success', 'Certificate added successfully!');
        clearFields();
        fetchCertificates(); // Fetch all certificates after adding a new one
      }
    }
  };

  const handleDeleteCertificate = async (id) => {
    const { error } = await supabase.from('certificates').delete().eq('id', id);
    if (error) {
      console.error('Error deleting certificate:', error);
      showMessage('error', 'Failed to delete certificate.');
    } else {
      showMessage('success', 'Certificate deleted successfully!');
      fetchCertificates(); // Fetch all certificates after deletion
    }
  };

  const setEditCertificate = (cert) => {
    setEditId(cert.id);
    setNewTitle(cert.title);
    setNewDescription(cert.description);
    setNewImageUrl(cert.image_url);
  };

  const clearFields = () => {
    setNewTitle('');
    setNewDescription('');
    setNewImageUrl('');
    setEditId(null);
  };

  return (
    <>
      <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800 container">New Certificate</div>

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
            onClick={handleAddOrUpdateCertificate}
          >
            {editId ? "Update Certificate" : "Save Certificate"}
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

      <div className="certificate-list mt-8 mb-14 container mx-auto w-[90vw]">
        <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">Certificates</h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {certificates && certificates.map(cert => (
          cert ? (
            <div key={cert.id} className="certificate bg-white p-6 shadow-md mb-4">
              <h4 className="text-lg font-semibold"><span className="text-myred">Title:</span> {cert.title}</h4>
              <p className="text-md text-gray-700 my-2"><span className="text-myred">Description: </span>{cert.description}</p>

              {cert.image_url && (
                <img src={cert.image_url} alt="Certificate" className="rounded-lg my-5 h-[20vh] object-cover" />
              )}
              <button
                className="btn border  rounded-md shadow-2xl bg-indigo-500 p-1 px-4 font-semibold cursor-pointer text-myblue ml-2"
                onClick={() => setEditCertificate(cert)}
              >
                Edit
              </button>
              <button
                className="btn border  rounded-md shadow-2xl  bg-red-500 p-1 px-4 font-semibold cursor-pointer text-myblue ml-2"
                onClick={() => handleDeleteCertificate(cert.id)}
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

export default CertificatePage;
