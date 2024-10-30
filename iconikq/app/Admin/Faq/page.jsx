"use client";
import { useEffect, useState } from 'react';
import { supabase } from './../../utils/supabase/client';
import { useRouter } from 'next/navigation'; // Use this in the App Router
import { useSessionStore } from '../../store/sessionStore';

const FAQPage = () => {
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

  const [faqs, setFaqs] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      const { data, error } = await supabase.from('faqs').select('*');
      if (error) console.error('Error fetching FAQs:', error);
      else setFaqs(data);
    };
    fetchFAQs();
  }, []);

  const handleAddFAQ = async () => {
    const { data, error } = await supabase
      .from('faqs')
      .insert([{
        category: newCategory,
        question: newQuestion,
        answer: newAnswer,
      }]);
    if (error) console.error('Error adding FAQ:', error);
    else setFaqs([...faqs, ...data]);
    clearFields();
  };

  const handleEditFAQ = async () => {
    const { data, error } = await supabase
      .from('faqs')
      .update({
        category: newCategory,
        question: newQuestion,
        answer: newAnswer,
      })
      .eq('id', editId);
    if (error) console.error('Error updating FAQ:', error);
    else {
      setFaqs(faqs.map(faq => (faq.id === editId ? data[0] : faq)));
      clearFields();
    }
  };

  const handleDeleteFAQ = async (id) => {
    const { error } = await supabase.from('faqs').delete().eq('id', id);
    if (error) console.error('Error deleting FAQ:', error);
    else setFaqs(faqs.filter(faq => faq.id !== id));
  };

  const clearFields = () => {
    setNewCategory('');
    setNewQuestion('');
    setNewAnswer('');
    setEditId(null);
  };

  return (
    <>
      <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800">Manage FAQs</div>

      <div className="editor mx-auto container flex flex-col text-gray-800 border border-gray-300 p-8 shadow-lg">
        <input
          className="category bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <input
          className="question bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <textarea
          className="answer bg-gray-100 p-3 h-20 border border-gray-300 outline-none mb-4"
          placeholder="Answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
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
            onClick={editId ? handleEditFAQ : handleAddFAQ}
          >
            {editId ? 'Save' : 'Add FAQ'}
          </button>
        </div>
      </div>

      {/* Display List */}
      <ul className="container mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map(faq => (
          <li key={faq.id} className="mb-6">
            <div className="relative flex flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="p-6">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {faq.category}
                </h4>
                <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  <strong>Q: </strong>{faq.question}
                </p>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  <strong>A: </strong>{faq.answer}
                </p>
                <div className="flex">
                  <button
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={() => {
                      setEditId(faq.id);
                      setNewCategory(faq.category);
                      setNewQuestion(faq.question);
                      setNewAnswer(faq.answer);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline ml-4"
                    onClick={() => handleDeleteFAQ(faq.id)}
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

export default FAQPage;
