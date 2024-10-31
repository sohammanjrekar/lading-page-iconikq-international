"use client";
import { useEffect, useState } from "react";
import { supabase } from './../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useSessionStore } from '../../store/sessionStore';

const ServicesPage = () => {
    const router = useRouter();
    const isAuthenticated = useSessionStore((state) => state.isAuthenticated);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/Admin/Login');
        }
    }, [isAuthenticated, router]);

    const [services, setServices] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newImageUrl, setNewImageUrl] = useState(''); // This should reference the correct image property
    const [newPassage1, setNewPassage1] = useState('');
    const [newPassage2, setNewPassage2] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [editId, setEditId] = useState(null);
    const [cloudinaryLoaded, setCloudinaryLoaded] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Load Cloudinary script
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

    // Function to open Cloudinary upload widget
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

    // Fetch services from the database
    useEffect(() => {
        const fetchServices = async () => {
            const { data, error } = await supabase.from('services').select('*');
            if (error) console.error('Error fetching services:', error);
            else setServices(data);
        };
        fetchServices();
    }, []);

    // Show success or error messages
    const showMessage = (type, message) => {
        if (type === 'success') setSuccessMessage(message);
        if (type === 'error') setErrorMessage(message);
        setTimeout(() => {
            setSuccessMessage('');
            setErrorMessage('');
        }, 5000);
    };

    // Handle adding or updating a service
    const handleAddOrUpdateService = async () => {
        if (editId) {
            // Update existing service
            const { data, error } = await supabase
                .from('services')
                .update({
                    title: newTitle,
                    image: newImageUrl, // Ensure this references the correct image property
                    passage1: newPassage1,
                    passage2: newPassage2,
                    description: newDescription
                })
                .eq('id', editId);
            if (error) {
                console.error('Error updating service:', error);
                showMessage('error', 'Failed to update service.');
            } else {
                setServices(services.map(serv => (serv.id === editId ? data[0] : serv)));
                showMessage('success', 'Service updated successfully!');
                clearFields();
            }
        } else {
            // Add new service
            const { data, error } = await supabase
                .from('services')
                .insert([{
                    title: newTitle,
                    image: newImageUrl,
                    passage1: newPassage1,
                    passage2: newPassage2,
                    description: newDescription
                }]);
            if (error) {
                console.error('Error adding service:', error);
                showMessage('error', 'Failed to add service.');
            } else {
                showMessage('success', 'Service added successfully!');
                setServices([...services, ...(Array.isArray(data) ? data : [data])]);
                clearFields();
            }
        }
    };

    // Handle deleting a service
    const handleDeleteService = async (id) => {
        const { error } = await supabase.from('services').delete().eq('id', id);
        if (error) {
            console.error('Error deleting service:', error);
            showMessage('error', 'Failed to delete service.');
        } else {
            setServices(services.filter(serv => serv.id !== id));
            showMessage('success', 'Service deleted successfully!');
        }
    };

    // Set service data for editing
    const setEditService = (serv) => {
        setEditId(serv.id);
        setNewTitle(serv.title);
        setNewImageUrl(serv.image); // Ensure this references the correct property
        setNewPassage1(serv.passage1);
        setNewPassage2(serv.passage2);
        setNewDescription(serv.description);
    };

    // Clear form fields
    const clearFields = () => {
        setNewTitle('');
        setNewImageUrl('');
        setNewPassage1('');
        setNewPassage2('');
        setNewDescription('');
        setEditId(null);
    };

    return (
        <>
            <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800 container">New Service</div>

            <div className="editor mx-auto container flex flex-col text-gray-800 border border-gray-300 p-8 w-[90vw] shadow-lg">
                <input
                    className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                    placeholder="Title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <textarea
                    className="passage1 bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
                    placeholder="Passage 1"
                    rows={3}
                    value={newPassage1}
                    onChange={(e) => setNewPassage1(e.target.value)}
                />
                <textarea
                    className="passage2 bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
                    placeholder="Passage 2"
                    rows={3}
                    value={newPassage2}
                    onChange={(e) => setNewPassage2(e.target.value)}
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
                        className="btn border border-gray-300 p-2 rounded text-gray-800 mx-2"
                        onClick={clearFields}
                    >
                        Clear
                    </button>
                    <button
                        className="btn border border-gray-300 p-2 rounded text-gray-800 mx-2"
                        onClick={handleAddOrUpdateService}
                    >
                        {editId ? 'Update Service' : 'Add Service'}
                    </button>
                </div>
                {successMessage && <div className="success-message text-green-600">{successMessage}</div>}
                {errorMessage && <div className="error-message text-red-600">{errorMessage}</div>}
            </div>

            <div className="services-list mb-5 container w-[90vw] mx-auto mt-10">
                <h2 className="text-center font-bold text-xl mb-4">Services List</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((serv) => (
                        <div key={serv.id} className="service-card border border-gray-300 p-4 rounded">
                            <h3 className="text-lg font-bold">{serv.title}</h3>
                           
                            <p>{serv.description}</p>
                            <img src={serv.image} alt={serv.title} className="h-32 object-cover" />
                            <div className="buttons flex justify-between mt-4">
                                <button className="text-blue-500" onClick={() => setEditService(serv)}>Edit</button>
                                <button className="text-red-500" onClick={() => handleDeleteService(serv.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
