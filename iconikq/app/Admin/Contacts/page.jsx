"use client";
import { useEffect, useState } from 'react';
import { supabase } from './../../utils/supabase/client';
import { useRouter } from 'next/navigation'; // Use this in the App Router
import { useSessionStore } from '../../store/sessionStore';

const ContactPage = () => {
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

  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchContacts = async () => {
      const { data, error, count } = await supabase
        .from('contact')
        .select('*', { count: 'exact' })
        .range((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage - 1);

      if (error) console.error('Error fetching contacts:', error);
      else {
        setContacts(data);
        setTotalPages(Math.ceil(count / itemsPerPage));
      }
    };
    fetchContacts();
  }, [currentPage]);

  const handleExportCSV = () => {
    const csvContent = [
      ['ID', 'Name', 'Email', 'Phone', 'Created At'],
      ...contacts.map(contact => [
        contact.id,
        contact.name,
        contact.email,
        contact.phone,
        contact.created_at,
      ]),
    ]
      .map(e => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'contacts.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="mt-[15vh] text-center font-bold text-2xl m-5 text-gray-800">Manage Contacts</div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        onClick={handleExportCSV}
      >
        Export as CSV
      </button>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
            <th className="border border-gray-300 p-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td className="border border-gray-300 p-2">{contact.id}</td>
              <td className="border border-gray-300 p-2">{contact.name}</td>
              <td className="border border-gray-300 p-2">{contact.email}</td>
              <td className="border border-gray-300 p-2">{contact.phone}</td>
              <td className="border border-gray-300 p-2">{new Date(contact.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="border border-gray-300 p-2 rounded"
        >
          Previous
        </button>
        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="border border-gray-300 p-2 rounded"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ContactPage;
