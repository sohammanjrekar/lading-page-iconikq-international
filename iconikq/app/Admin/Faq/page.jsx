"use client";
import { useEffect, useState } from "react";
import { supabase } from './../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useSessionStore } from '../../store/sessionStore';

const FAQPage = () => {
  const router = useRouter();
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/Admin/Login');
    }
  }, [isAuthenticated, router]);

  const [faqs, setFAQs] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [editId, setEditId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchFAQs = async () => {
      const { data, error } = await supabase.from('faqs').select('*');
      if (error) console.error('Error fetching FAQs:', error);
      else setFAQs(data);
    };
    fetchFAQs();
  }, []);

  const showMessage = (type, message) => {
    if (type === 'success') setSuccessMessage(message);
    if (type === 'error') setErrorMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 5000);
  };

  const handleAddOrUpdateFAQ = async () => {
    if (editId) {
      // Update existing FAQ
      const { data, error } = await supabase
        .from('faqs')
        .update({
          question: newQuestion,
          answer: newAnswer
        })
        .eq('id', editId);
      if (error) {
        console.error('Error updating FAQ:', error);
        showMessage('error', 'Failed to update FAQ.');
      } else {
        setFAQs(faqs.map(faq => (faq.id === editId ? data[0] : faq)));
        showMessage('success', 'FAQ updated successfully!');
        clearFields();
      }
    } else {
      // Add new FAQ
      const { data, error } = await supabase
        .from('faqs')
        .insert([{
          question: newQuestion,
          answer: newAnswer
        }]);
      if (error) {
        console.error('Error adding FAQ:', error);
        showMessage('error', 'Failed to add FAQ.');
      } else {
        showMessage('success', 'FAQ added successfully!');
        setFAQs([...faqs, ...(Array.isArray(data) ? data : [data])]);
        clearFields();
      }
    }
  };

  const handleDeleteFAQ = async (id) => {
    const { error } = await supabase.from('faqs').delete().eq('id', id);
    if (error) {
      console.error('Error deleting FAQ:', error);
      showMessage('error', 'Failed to delete FAQ.');
    } else {
      setFAQs(faqs.filter(faq => faq.id !== id));
      showMessage('success', 'FAQ deleted successfully!');
    }
  };

  const setEditFAQ = (faq) => {
    setEditId(faq.id);
    setNewQuestion(faq.question);
    setNewAnswer(faq.answer);
  };

  const clearFields = () => {
    setNewQuestion('');
    setNewAnswer('');
    setEditId(null);
  };

  return (
    <>
      <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800 container">New FAQ</div>

      <div className="editor mx-auto container flex flex-col text-gray-800 border border-gray-300 p-8 w-[90vw] shadow-lg">
        <input
          className="question bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <textarea
          className="answer bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
          placeholder="Answer"
          rows={5}
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
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
            onClick={handleAddOrUpdateFAQ}
          >
            {editId ? "Update FAQ" : "Save FAQ"}
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

      <div className="faq-list mt-8 mb-14 container mx-auto w-[90vw]">
        <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">FAQs</h3>
        {faqs.map(faq => (
          <div key={faq.id} className="faq bg-white p-6 shadow-md mb-4">
            <h4 className="text-lg font-semibold">Question: {faq.question}</h4>
            <p className="text-sm text-gray-700 my-2">Answer: {faq.answer}</p>
            <button
              className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-2"
              onClick={() => setEditFAQ(faq)}
            >
              Edit
            </button>
            <button
              className="btn border border-red-500 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-2"
              onClick={() => handleDeleteFAQ(faq.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQPage;
