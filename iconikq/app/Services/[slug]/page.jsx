"use client";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useServicesStore } from "../../store/servicesStore";
import Button from "../../ui/Button";

const CategoryPage = ({ params }) => {
  const { slug } = params; // Category slug from the URL
  const { servicesData, loading, error, fetchServicesData } =
    useServicesStore();

  useEffect(() => {
    if (slug) {
      console.log(`Fetching services for category: ${slug}`);
      fetchServicesData(slug);
    }
  }, [slug, fetchServicesData]); // Depend on slug so it fetches data when slug changes

  // Log the state to check the data flow
  useEffect(() => {
    if (servicesData) {
      console.log("Services Data:", servicesData);
    }
  }, [servicesData]);

  // Handle loading state
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // Handle case when no data is found
  if (!servicesData || servicesData.length === 0) {
    return (
      <div className="text-center text-red-500">
        <h1>No Services Found</h1>
        <p>There are no services under this category.</p>
      </div>
    );
  }

  // Set dynamic title and description
  const title = `ICONIKQ | ${
    slug.charAt(0).toUpperCase() + slug.slice(1)
  } Services`;
  const description = `Explore our ${slug} services at ICONIKQ. We provide exceptional logistics solutions tailored to your needs.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://www.iconikq.com/services/${slug}`}
        />
      </Head>

      <section className="pt-20 lg:pt-[120px] pb-5 lg:pb-10 bg-[#F3F4F6]">
        <div className="container mx-auto">
          <h1 className="text-4xl mt-8 font-bold text-center mb-8">
            Services in {slug} Category
          </h1>
          <div className="flex flex-wrap mx-4">
            {servicesData.map((card, index) => (
              <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="shadow-2xl bg-white rounded-lg overflow-hidden mb-10">
                  <Image
                    loading="lazy"
                    width={500}
                    height={300}
                    src={card.image}
                    alt={card.title}
                    className="w-[500px] h-[300px] object-cover"
                  />
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className=" text-myred font-semibold text-dark text-xl mb-4 block hover:text-primary">
                      {card.title}
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      {card.description.length > 200
                        ? `${card.description.slice(0, 200)}...`
                        : card.description}
                    </p>
                    <Button text="View Details" href={`/Services/${card.categoryslug}/${card.id}`}  />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
