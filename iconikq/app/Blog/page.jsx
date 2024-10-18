import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

// Sample data for the blog posts
const blogData = [
  {
    title: "Write anything. Be creative.",
    author: "Jack Sparrow",
    date: "23rd, April 2021",
    readTime: "1hr 20min. read",
    imageUrl: "https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "New",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Improving your day to the MAX",
    author: "Jack Sparrow",
    date: "23rd, March 2021",
    readTime: "1hr 20min. read",
    imageUrl: "https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Entertainment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Another amazing post",
    author: "Jack Sparrow",
    date: "23rd, March 2021",
    readTime: "1hr 20min. read",
    imageUrl: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Entertainment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more blog data as needed
];

const BlogPage = () => {
  return (
    <>
      {/* component */}
      <Navbar/>
      <div className="text-gray-900 pt-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16">
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pt-6 md:w-1/2">
              <div className="flex flex-col items-start justify-center h-full space-y-3 md:pr-10 lg:pr-16">
                <div className="bg-green-500 flex items-center rounded-full text-gray-50 px-2 py-1 uppercase inline-block">
                  <p className="inline text-xs font-medium">New</p>
                </div>
                <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                  Write anything. Be creative.
                </a>
                <div className="text-sm font-medium">
                  <span>Author: </span>
                  <a className="underline">Jack Sparrow</a>
                  <span> · 23rd, April 2021 · </span>
                  <span className="text-gray-200">1hr 20min read</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Creative content"
                className="object-cover rounded-lg max-h-64 sm:max-h-96 w-full h-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col items-start col-span-12 sm:col-span-6 xl:col-span-4 space-y-3">
                <img
                  src={`https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}
                  alt={`Article ${index + 1}`}
                  className="object-cover w-full mb-2 rounded-lg shadow-md"
                />
                <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 px-3 py-1 rounded-full uppercase inline-block">
                  Entertainment
                </p>
                <a className="text-lg font-bold sm:text-xl md:text-2xl">
                  Improving your day to the MAX
                </a>
                <p className="text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
                <div className="text-xs font-medium">
                  <span>Jack Sparrow</span>
                  <span> · 23rd, March 2021 · </span>
                  <span className="text-gray-300">1hr 20min read</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );

};

export default BlogPage;
