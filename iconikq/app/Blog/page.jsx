"use client"
import Image from 'next/image';
import Button from '../ui/Button';
import { useEffect } from 'react';
import { useBlogStore } from '../store/blogStore';


const BlogPage = () => {
  const { blogPosts, fetchBlogPosts, loading, error } = useBlogStore();

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  const convertToDate = (dateStr) => {
    const [day, month, year] = dateStr.split('-');
    return new Date(`${year}-${month}-${day}`);
  };

  // Sort blog posts based on date
  const sortedBlogData = blogPosts.slice().sort((a, b) => convertToDate(b.date) - convertToDate(a.date));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className=" min-h-screen  text-gray-900 pt-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16">
        
        {/* Featured Blog Post */}
        {sortedBlogData[0] && (
          <div className="flex flex-col my-10 items-center sm:px-5 md:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pt-6 md:w-1/2">
              <div className="flex flex-col items-start justify-center h-full space-y-3 md:pr-10 lg:pr-16">
                <div className="bg-myred flex items-center rounded-full text-white px-2 py-1 uppercase">
                  <p className="inline text-xs font-medium">{sortedBlogData[0].topic}</p>
                </div>
                <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                  {sortedBlogData[0].title}
                </a>
                <div className="text-sm font-medium">
                  <span>Date: </span>
                  <span> {sortedBlogData[0].date} </span>
                  <Button text="Read More" href={`/Blog/${sortedBlogData[0].id}`} />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                loading="lazy"
                width={500}
                height={500}
                layout="responsive"
                src={sortedBlogData[0].image1}
                alt="Featured Article"
                className="object-cover w-full mb-2 rounded-lg shadow-md"
              />
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
          {sortedBlogData.slice(1, 6).map((post, index) => (
            <div key={post.id} className="flex flex-col items-start col-span-12 sm:col-span-6 xl:col-span-4 space-y-3">
              <Image
                loading="lazy"
                width={500}
                height={500}
                layout="responsive"
                src={post.image1}
                alt={`Article ${index + 1}`}
                className="object-cover w-full mb-2 rounded-lg shadow-md"
              />
              <p className="bg-myred flex items-center leading-none text-sm font-medium text-white px-3 py-1 rounded-full uppercase">
                {post.topic}
              </p>
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                {post.title}
              </a>
              <p className="text-sm text-black">
                {post.passage1.substring(0, 200)}...
              </p>
              <div className="text-xs font-medium">
                <span> · {post.date} · </span>
                <Button text="Read More" href={`/Blog/${post.id}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
