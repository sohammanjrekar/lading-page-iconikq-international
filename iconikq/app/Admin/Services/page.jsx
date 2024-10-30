"use client"
import { useEffect, useState } from 'react';
import { supabase } from './../../utils/supabase/client';
import { useRouter } from 'next/navigation'; // Use this in the App Router
import { useSessionStore } from '../../store/sessionStore';

const Page = () => {

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

  const [services, setServices] = useState([]);
  const [newImage, setNewImage] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newTitleSlug, setNewTitleSlug] = useState('');
  const [newPassage1, setNewPassage1] = useState('');
  const [newPassage2, setNewPassage2] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newLink, setNewLink] = useState('');
  const [newCategorySlug, setNewCategorySlug] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase.from('services').select('*');
      if (error) console.error('Error fetching services:', error);
      else setServices(data);
    };
    fetchServices();
  }, []);

  const handleAddService = async () => {
    const { data, error } = await supabase
      .from('services')
      .insert([{
        image: newImage,
        title: newTitle,
        titleSlug: newTitleSlug,
        passage1: newPassage1,
        passage2: newPassage2,
        description: newDescription,
        link: newLink,
        categorySlug: newCategorySlug
      }]);
    if (error) console.error('Error adding service:', error);
    else setServices([...services, ...data]);
    clearFields();
  };

  const handleEditService = async () => {
    const { data, error } = await supabase
      .from('services')
      .update({
        image: newImage,
        title: newTitle,
        titleSlug: newTitleSlug,
        passage1: newPassage1,
        passage2: newPassage2,
        description: newDescription,
        link: newLink,
        categorySlug: newCategorySlug
      })
      .eq('id', editId);
    if (error) console.error('Error updating service:', error);
    else {
      setServices(services.map(service => (service.id === editId ? data[0] : service)));
      clearFields();
    }
  };

  const handleDeleteService = async (id) => {
    const { error } = await supabase.from('services').delete().eq('id', id);
    if (error) console.error('Error deleting service:', error);
    else setServices(services.filter(service => service.id !== id));
  };

  const clearFields = () => {
    setNewImage('');
    setNewTitle('');
    setNewTitleSlug('');
    setNewPassage1('');
    setNewPassage2('');
    setNewDescription('');
    setNewLink('');
    setNewCategorySlug('');
    setEditId(null);
  };

  return (
    <>
    <div className=" mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800">New Service</div>
  

    <div className="editor mx-auto container flex flex-col text-gray-800 border border-gray-300 p-8 shadow-lg">
      <input
        className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        placeholder="Image URL"
        value={newImage}
        onChange={(e) => setNewImage(e.target.value)}
      />
      <input
        className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        placeholder="Title Slug"
        value={newTitleSlug}
        onChange={(e) => setNewTitleSlug(e.target.value)}
      />
      <textarea
        className="passage1 bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
        placeholder="Passage 1"
        value={newPassage1}
        onChange={(e) => setNewPassage1(e.target.value)}
      />
      <textarea
        className="passage2 bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
        placeholder="Passage 2"
        value={newPassage2}
        onChange={(e) => setNewPassage2(e.target.value)}
      />
      <textarea
        className="description bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
        placeholder="Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <input
        className="link bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        placeholder="Link"
        value={newLink}
        onChange={(e) => setNewLink(e.target.value)}
      />
      <input
        className="categorySlug bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        placeholder="Category Slug"
        value={newCategorySlug}
        onChange={(e) => setNewCategorySlug(e.target.value)}
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
          onClick={editId ? handleEditService : handleAddService}
        >
          {editId ? 'Save' : 'Post'}
        </button>
      </div>

         </div>
    {/* Display List */}
<ul className=" container mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
  {services.map(service => (
    <li key={service.id} className="mb-6">
      <div className="relative flex flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {service.category} {/* Add a category or similar field */}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {service.title}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {service.description}
          </p>
          <div className="flex">
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => {
                setEditId(service.id);
                setNewImage(service.image);
                setNewTitle(service.title);
                setNewTitleSlug(service.titleSlug);
                setNewPassage1(service.passage1);
                setNewPassage2(service.passage2);
                setNewDescription(service.description);
                setNewLink(service.link);
                setNewCategorySlug(service.categorySlug);
              }}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:underline ml-4"
              onClick={() => handleDeleteService(service.id)}
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

export default Page;
