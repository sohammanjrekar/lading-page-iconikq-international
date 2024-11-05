import { supabase } from '@/lib/supabaseClient';
import Image from 'next/image';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const CategoryPage = ({ params }) => {
  const { slug } = params;
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('servicesStore') // Replace with your actual table name
        .select('*')
        .eq('categorySlug', slug);

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setFilteredCards(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (filteredCards.length === 0) {
    return (
      <div className="text-center text-red-500">
        <h1>No Services Found</h1>
        <p>There are no services under this category.</p>
      </div>
    );
  }

  const title = `ICONIKQ | ${slug.charAt(0).toUpperCase() + slug.slice(1)} Services`;
  const description = `Explore our ${slug} services at ICONIKQ. We provide exceptional logistics solutions tailored to your needs.`;
  const keywords = `${slug}, logistics, services, ICONIKQ`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://www.iconikq.com/services/${slug}`} />
      </Head>

      <section className="pt-20 lg:pt-[120px] pb-5 lg:pb-10 bg-[#F3F4F6]">
        <div className="container mx-auto">
          <nav className="text-sm sm:text-base bg-white p-2 md:p-4 lg:p-4 rounded-md shadow-lg w-full">
            <ol className="list-none p-0 inline-flex space-x-2">
              <li className="flex items-center">
                <svg
                  onClick={() => window.location.href = '/'}
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="cursor-pointer hover:fill-blue-500 transition-colors duration-300"
                  fill="#4b5563"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>{" "}
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                >
                  Services
                </a>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-800">{slug}</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl mt-8 font-bold text-center mb-8">
            Services in {slug} Category
          </h1>
          <div className="flex flex-wrap mx-4">
            {filteredCards.map((card, index) => (
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
                  <div className="p-4 sm:p-6 md:p-4 xl:p-6 text-center">
                    <h3>
                      <a
                        href={card.link}
                        className="
                          font-semibold
                          text-dark text-xl
                          sm:text-[20px]
                          md:text-[20px]
                          lg:text-[20px]
                          xl:text-xl
                          2xl:text-[20px]
                          mb-4
                          block
                          hover:text-primary
                        "
                      >
                        {card.title}
                      </a>
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      {card.description.length > 100 ? `${card.description.slice(0, 130)}...` : card.description}
                    </p>
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
