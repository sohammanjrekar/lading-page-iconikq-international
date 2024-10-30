"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import { supabase } from "../utils/supabase/client";

const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, date, images, passages, topic")
        .order("date", { ascending: false })
        .limit(4);

      console.log(data, error);

      if (error) {
        console.error("Error fetching blog data:", error);
      } else {
        setBlogData(data);
      }
      setLoading(false);
    };

    fetchBlogData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="bg-myblue">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white">
          From the blog
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {blogData.map((post, index) => {
            // Split the images string and get the first image URL
            const firstImage = post.images ? post.images.split(",")[0].trim() : "/images/parth2.jpg";

            return (
              <div key={index} className="lg:flex">
                <div className="relative w-full h-56 lg:w-[45vw] rounded-lg">
                  <Image
                    loading="lazy"
                    className="object-cover w-full h-full rounded-lg"
                    src={firstImage}
                    alt={post.title || "Blog post image"}
                    width={500}
                    height={100}
                    onError={(e) => {
                      e.target.src = "/images/parth2.jpg"; // Fallback on load error
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 sm:justify-between py-1 lg:mx-6">
                  <a href={`/Blog/${post.id}`} className="text-xl font-semibold hover:underline text-myred">
                    {post.title || "Untitled"}
                  </a>
                  <span className="text-sm text-white">On: {post.date || "Unknown date"}</span>
                  <p className="text-sm text-white mb-2">
                    {post.passages.substring(0, 200) || "No description available"}...
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

export default BlogSection;
