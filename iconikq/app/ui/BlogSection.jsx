"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { useEffect } from "react";
import { useBlogStore } from "../store/blogStore";
import Link from "next/link";

const BlogPage = () => {
  const { blogPosts, fetchBlogPosts, loading, error } = useBlogStore();

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);
  const convertToDate = (dateStr) => {
    // Check if the date format is valid (yyyy-mm-dd)
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateStr)) {
      console.error(`Invalid date format: ${dateStr}`);
      return new Date(NaN); // Return an invalid date
    }
    return new Date(dateStr); // Directly create a Date object from the string
  };

  const formatDate = (dateStr) => {
    const date = convertToDate(dateStr);
    if (isNaN(date)) {
      return "Invalid Date"; // Return a message for invalid dates
    }
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Sort blog posts based on date
  const sortedBlogData = blogPosts
    .slice() // Create a shallow copy of the blogPosts array
    .sort((a, b) => convertToDate(b.date) - convertToDate(a.date))
    .slice(0, 4); // Get the first 4 posts after sorting

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching blog posts: {error}</p>;

  return (
    <section className="bg-myblue">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white">
          From the blog
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {sortedBlogData.map((post) => {
            return (
              <div key={post.id} className="lg:flex">
                <div className="relative w-full h-56 lg:w-[45vw] rounded-lg">
                  <Image
                    loading="lazy"
                    className="object-cover w-full h-full rounded-lg"
                    src={post.image1}
                    alt={post.title || "Blog post image"}
                    width={500}
                    height={100}
                    onError={(e) => {
                      e.target.src = "/images/parth2.jpg"; // Fallback on load error
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 sm:justify-between py-1 lg:mx-6">
                  <Link href={`/Blog/${post.id}`}>
                    <p className="text-xl font-semibold hover:underline text-myred">
                      {post.title || "Untitled"}
                    </p>
                  </Link>
                  <span className="text-sm text-white">
                    On: {formatDate(post.date) || "Unknown date"}
                  </span>
                  <p className="text-sm text-white mb-2">
                    {post.passage1.substring(0, 200) ||
                      "No description available"}
                    ...
                  </p>
                  <Button text="Read More" href={`/Blog/${post.id}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
