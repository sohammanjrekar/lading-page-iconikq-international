"use client";
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase/client';

// export const metadata = {
//   title: 'ICONIKQ | FAQ',
//   description: 'Find answers to the most common questions about our logistics services and processes at ICONIKQ.',
//   keywords: 'FAQ, frequently asked questions, logistics, ICONIKQ',
// };

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    // Fetch FAQ data from Supabase
    const fetchFaqData = async () => {
      try {
        const { data, error } = await supabase
          .from('faqs') 
          .select('*'); 

        if (error) throw error;

        setFaqData(data); 
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchFaqData();
  }, []);

  return (
    <div className="mx-auto mt-12  py-16 px-5 container bg-white">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
        <p className="text-neutral-500 text-2xl mt-3">Frequently asked questions</p>
      </div>

      <div className="grid divide-y divide-neutral-200  mx-auto mt-8">
        {faqData.map((faq, index) => (
          <div className="py-5" key={index}>
            <details className="group">
              <summary className="flex justify-between text-xl items-center font-medium cursor-pointer list-none">
                <span className='text-myblue'>Q.{index+1} &ensp;  {faq.question}</span>
                <span className="text-myred  transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="28"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="28"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className=" text-blue text-lg my-3 opacity-0 transition-opacity duration-200 ease-in-out group-open:opacity-100">
                Ans: &ensp; {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
