"use client";
import { useEffect, useState } from "react";
import { supabase } from "./../../utils/supabase/client";
import { useRouter } from "next/navigation";
import { useSessionStore } from "../../store/sessionStore";

const CompanyPage = () => {
  const router = useRouter();
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/Admin/Login");
    }
  }, [isAuthenticated, router]);

  const [companies, setCompanies] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [editId, setEditId] = useState(null);
  const [cloudinaryLoaded, setCloudinaryLoaded] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        if (
          result.event === "success" &&
          result.info.resource_type === "image"
        ) {
          const imageUrl = `https://res.cloudinary.com/mybazaar/image/upload/v1730371595/${result.info.public_id}.${result.info.format}`;
          setImageCallback(imageUrl);
        }
      }
    );
    widget.open();
  };

  const fetchCompanies = async () => {
    const { data, error } = await supabase.from("companies").select("*");
    if (error) console.error("Error fetching companies:", error);
    else setCompanies(data);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const showMessage = (type, message) => {
    if (type === "success") setSuccessMessage(message);
    if (type === "error") setErrorMessage(message);
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 5000);
  };

  const handleAddOrUpdateCompany = async () => {
    if (editId) {
      const { data, error } = await supabase
        .from("companies")
        .update({
          title: newTitle,
          imageurl: newImageUrl,
        })
        .eq("id", editId);
      if (error) {
        console.error("Error updating company:", error);
        showMessage("error", "Failed to update company.");
      } else {
        showMessage("success", "Company updated successfully!");
        fetchCompanies();
        clearFields();
      }
    } else {
      const { data, error } = await supabase.from("companies").insert([
        {
          title: newTitle,
          imageurl: newImageUrl,
        },
      ]);
      if (error) {
        console.error("Error adding company:", error);
        showMessage("error", "Failed to add company.");
      } else {
        showMessage("success", "Company added successfully!");
        fetchCompanies();
        clearFields();
      }
    }
  };

  const handleDeleteCompany = async (id) => {
    const { error } = await supabase.from("companies").delete().eq("id", id);
    if (error) {
      console.error("Error deleting company:", error);
      showMessage("error", "Failed to delete company.");
    } else {
      setCompanies(companies.filter((item) => item.id !== id));
      showMessage("success", "Company deleted successfully!");
    }
  };

  const setEditCompany = (item) => {
    setEditId(item.id);
    setNewTitle(item.title);
    setNewImageUrl(item.image_url);
  };

  const clearFields = () => {
    setNewTitle("");
    setNewImageUrl("");
    setEditId(null);
  };

  return (
    <>
      <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800 container">
        New Company
      </div>

      <div className="editor mx-auto container flex flex-col text-gray-800 border border-gray-300 p-8 w-[90vw] shadow-lg">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
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
            onClick={handleAddOrUpdateCompany}
          >
            {editId ? "Update Company" : "Save Company"}
          </button>
        </div>

        {/* Success or Error Message */}
        {successMessage && (
          <div className="bg-white p-6 md:mx-auto text-center">
            <h3 className="md:text-2xl text-base text-green-600 font-semibold text-center">
              {successMessage}
            </h3>
          </div>
        )}
        {errorMessage && (
          <div className="bg-white p-6 md:mx-auto text-center">
            <h3 className="md:text-2xl text-base text-red-600 font-semibold text-center">
              {errorMessage}
            </h3>
          </div>
        )}
      </div>

      <div className="company-list mt-8 mb-14 container mx-auto w-[90vw]">
        <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">
          Companies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map(
            (item) =>
              item && (
                <div
                  key={item.id}
                  className="company-item bg-white p-4 shadow-md"
                >
                  <h4 className="text-lg font-semibold">Title: {item.title}</h4>

                  {item.imageurl && (
                    <img
                      src={item.imageurl}
                      alt={item.title}
                      className="rounded-lg my-5 h-40 object-cover"
                    />
                  )}
                  <button
                    className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-2"
                    onClick={() => setEditCompany(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn border border-red-500 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-2"
                    onClick={() => handleDeleteCompany(item.id)}
                  >
                    Delete
                  </button>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
