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
    const [newImageUrl, setNewImageUrl] = useState(''); 
    const [newPassage1, setNewPassage1] = useState('');
    const [newPassage2, setNewPassage2] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newSlug, setNewSlug] = useState('');
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
    const fetchServices = async () => {
        const { data, error } = await supabase.from('services').select('*');
        if (error) console.error('Error fetching services:', error);
        else setServices(data);
    };

    useEffect(() => {
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
                    image: newImageUrl,
                    passage1: newPassage1,
                    passage2: newPassage2,
                    description: newDescription,
                    categoryslug: newSlug
                })
                .eq('id', editId);
            if (error) {
                console.error('Error updating service:', error);
                showMessage('error', 'Failed to update service.');
            } else {
                showMessage('success', 'Service updated successfully!');
                clearFields();
                fetchServices(); // Refresh services after update
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
                    description: newDescription,
                    categoryslug: newSlug
                }]);
            if (error) {
                console.error('Error adding service:', error);
                showMessage('error', 'Failed to add service.');
            } else {
                showMessage('success', 'Service added successfully!');
                fetchServices(); // Refresh services after add
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
            showMessage('success', 'Service deleted successfully!');
            fetchServices(); // Refresh services after delete
        }
    };

    // Set service data for editing
    const setEditService = (serv) => {
        setEditId(serv.id);
        setNewTitle(serv.title);
        setNewImageUrl(serv.image);
        setNewPassage1(serv.passage1);
        setNewPassage2(serv.passage2);
        setNewDescription(serv.description);
        setNewSlug(serv.categoryslug);
    };

    // Clear form fields
    const clearFields = () => {
        setNewTitle('');
        setNewImageUrl('');
        setNewPassage1('');
        setNewPassage2('');
        setNewDescription('');
        setNewSlug('');
        setEditId(null);
    };

    // Options for the category slug
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
            <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800 container">New Service</div>

            <div className="editor  mx-auto container flex flex-col text-gray-800 border border-gray-300 p-8 w-[90vw] shadow-lg">
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

                {/* Select Dropdown for Slug */}
                <select
                    className="categoryslug bg-gray-100 border border-gray-300 p-2 mb-4"
                    value={newSlug}
                    onChange={(e) => setNewSlug(e.target.value)}
                >
                    {slugOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                {/* Image Upload */}
                <div className="mb-4 flex flex-row">
                    <button
                        className="upload-btn bg-blue-500 text-white py-2 px-4 rounded"
                        onClick={() => openWidget(setNewImageUrl)}
                    >
                        Upload Image
                    </button>

                    {newImageUrl && (
                        <img src={newImageUrl} alt="Preview" className="ml-4 h-20" />
                    )}
                </div>

                <div className="flex justify-center">
                    <button
                        className="submit-btn bg-green-500 text-white py-2 px-4 rounded mr-2"
                        onClick={handleAddOrUpdateService}
                    >
                        {editId ? 'Update Service' : 'Add Service'}
                    </button>

                    {editId && (
                        <button
                            className="delete-btn bg-red-500 text-white py-2 px-4 rounded"
                            onClick={() => handleDeleteService(editId)}
                        >
                            Delete Service
                        </button>
                    )}
                </div>

                {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
                {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
            </div>

            <div className="mt-8 text-center font-bold text-2xl m-5 text-gray-800 container">All Services</div>
            <div className="flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-center">
    {services.map((serv) => (
        serv &&
        <div key={serv.id} className="service-card border border-gray-300 m-4 p-4 w-64">
            <img src={serv.image} alt={serv.title} className="mb-2 h-32 w-full object-cover" />
            <h3 className="font-bold">{serv.title}</h3>
            <div className="flex justify-between mt-2">
                <button
                    className="edit-btn bg-yellow-500 text-white py-1 px-2 rounded"
                    onClick={() => setEditService(serv)}
                >
                    Edit
                </button>
                <button
                    className="delete-btn bg-red-500 text-white py-1 px-2 rounded"
                    onClick={() => handleDeleteService(serv.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    ))}
</div>

            </div>
        </>
    );
};

export default ServicesPage;
