"use client";
import { useEffect, useState } from 'react';
import { supabase } from './../../utils/supabase/client';
import { useRouter } from 'next/navigation'; // Use this in the App Router
import { useSessionStore } from '../../store/sessionStore';

const CertificatesPage = () => {
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

  const [certificates, setCertificates] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      const { data, error } = await supabase.from('certificates').select('*');
      if (error) console.error('Error fetching certificates:', error);
      else setCertificates(data);
    };
    fetchCertificates();
  }, []);

  const handleAddCertificate = async () => {
    const { data, error } = await supabase
      .from('certificates')
      .insert([{
        title: newTitle,
        description: newDescription,
        image_url: newImageUrl,
      }]);
    if (error) console.error('Error adding certificate:', error);
    else setCertificates([...certificates, ...data]);
    clearFields();
  };

  const handleEditCertificate = async () => {
    const { data, error } = await supabase
      .from('certificates')
      .update({
        title: newTitle,
        description: newDescription,
        image_url: newImageUrl,
      })
      .eq('id', editId);
    if (error) console.error('Error updating certificate:', error);
    else {
      setCertificates(certificates.map(cert => (cert.id === editId ? data[0] : cert)));
      clearFields();
    }
  };

  const handleDeleteCertificate = async (id) => {
    const { error } = await supabase.from('certificates').delete().eq('id', id);
    if (error) console.error('Error deleting certificate:', error);
    else setCertificates(certificates.filter(cert => cert.id !== id));
  };

  const clearFields = () => {
    setNewTitle('');
    setNewDescription('');
    setNewImageUrl('');
    setEditId(null);
  };

  return (
    <>
      <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800">Manage Certificates</div>

      <div className="editor mx-auto container flex flex-col text-gray-800 border border-gray-300 p-8 shadow-lg">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Certificate Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          className="description bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <input
          className="image_url bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Image URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
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
            onClick={editId ? handleEditCertificate : handleAddCertificate}
          >
            {editId ? 'Save' : 'Add Certificate'}
          </button>
        </div>
      </div>

      {/* Display List */}
      <ul className="container mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map(cert => (
          <li key={cert.id} className="mb-6">
            <div className="relative flex flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="p-6">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {cert.title}
                </h4>
                <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  {cert.description}
                </p>
                {cert.image_url && (
                  <img src={cert.image_url} alt={cert.title} className="w-48 h-auto mb-4" />
                )}
                <div className="flex">
                  <button
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={() => {
                      setEditId(cert.id);
                      setNewTitle(cert.title);
                      setNewDescription(cert.description);
                      setNewImageUrl(cert.image_url);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline ml-4"
                    onClick={() => handleDeleteCertificate(cert.id)}
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

export default CertificatesPage;
