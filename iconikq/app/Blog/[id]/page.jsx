"use client";
import { useEffect } from 'react';
import { useBlogStore } from '../../store/blogStore';
import Image from 'next/image';
import Head from 'next/head';
import Button from '../../ui/Button';

const Page = ({ params }) => {
  const { id } = params;
  const { blogPosts = [], fetchBlogPosts } = useBlogStore(); // Use fetchBlogPosts and default to an empty array

  useEffect(() => {
    // Fetch blog data if not already loaded
    if (blogPosts.length === 0) {
      fetchBlogPosts();
    }
  }, [fetchBlogPosts, blogPosts]);

  // Find the blog post by ID
  const blog = blogPosts.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Dynamic Metadata */}
      <Head>
        <title>Iconikq | {blog.title}</title>
        <meta name="description" content={`Read about ${blog.title}, discussing its impact on logistics and global trade.`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={`Read about ${blog.title}, discussing its impact on logistics and global trade.`} />
        <meta property="og:image" content={blog.image1} />
        <meta property="og:url" content={`https://yourwebsite.com/blog/${id}`} />
      </Head>

      <div className=" min-h-screen  container w-[70vw] my-8 pt-10 mx-auto">
        <main className="mt-12">
          {/* Header Section */}
          <header className="mb-12">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              {blog.title}
            </h1>
            <div className="bg-myred w-[10vw] flex px-3  items-center text-center rounded-full text-white  py-1 uppercase">
              <p className="text-sm text-center font-medium mx-auto">{blog.topic}</p>
            </div>
          </header>

          {/* Top Image */}
          {blog.image1 && (
            <div className="relative mb-12">
              <Image
                loading="lazy"
                alt="Primary image related to the blog post"
                width={800}
                height={500}
                layout="responsive"
                src={blog.image1}
                className="rounded-lg max-h-[70vh]  shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          )}

          {/* Blog Content Section */}
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            {/* Main Content */}
            <div className="lg:w-3/4 px-4 lg:px-0 mb-12 lg:mb-0">
              {[blog.passage1, blog.passage2, blog.passage3].map((passage, idx) => (
                <div key={idx} className="mb-12">
                   <p className=" text-sm md:text-lg text-gray-700 leading-relaxed text-justify mb-8">
                    {passage}
                  </p>

                  {/* Display corresponding image */}
                  {blog[`image${idx + 2}`] && (
                    <div className="mb-8 mt-5">
                      <Image
                        loading="lazy"
                        alt={`Image related to passage ${idx + 1}`}
                        width={1000}
                        height={800}
                        layout="responsive"
                        src={blog[`image${idx + 2}`]}
                        className="rounded-lg max-h-[50vh] shadow-lg transition-transform transform hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Justified Text */}
                 
                </div>
              ))}
            </div>

            {/* Sidebar / Author Section */}
            <div className="w-full lg:w-1/4 max-w-sm mx-auto lg:mx-0 mb-12 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out">
                <div className="flex flex-wrap flex-col justify-center items-center mb-6">
                  <Image
                    loading="lazy"
                    alt= {blog.id % 2 === 0 ? 'Drusti Ruparel' : 'Mr. Parth Ruparel'}
                    width={120}
                    height={120}
                    layout="intrinsic"
                    src= {blog.id % 2 === 0 ? '/images/drusti2.jpg' : '/images/parth2.jpg'}
                    className="h-24 w-24 rounded-full object-cover border-4 border-green-700"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-lg text-gray-800">{blog.id  % 2 === 0 ? 'Drusti Ruparel' : 'Mr. Parth Ruparel'}</p>
                    <p className="text-md text-center text-gray-600">Partner</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed text-justify">
                {blog.id  % 2 === 0 ? 'Drusti Ruparel' : 'Mr. Parth Ruparel'} is a logistics expert dedicated to providing efficient and customized solutions, ensuring timely and secure deliveries globally.
                </p>
                <Button className="mx-auto" text="Contact Me" href={'/Contact'} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
