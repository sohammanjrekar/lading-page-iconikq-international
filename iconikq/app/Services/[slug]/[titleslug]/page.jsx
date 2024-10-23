import { data } from '../../../Data';
import Link from "next/link";


export async function generateStaticParams() {
  // Get all slugs for categories and titles
  return data.map((item) => ({
    slug: item.categorySlug,
    titleslug: item.titleSlug,
  }));
}

const ServiceDetailPage = ({ params }) => {
  const { slug, titleslug } = params;

  // Find the specific card based on the slugs from the data
  const card = data.find(
    (item) => item.categorySlug === slug && item.titleSlug === titleslug
  );

  // If no matching service is found, show a fallback UI
  if (!card) {
    return (
      <div className="text-center text-red-500">
        <h1>Service Not Found</h1>
        <p>We couldn&apos;t find the service you&apos;re looking for.</p>
      </div>
    );
  }

  return (
    <>
     
      <nav className="text-sm sm:text-base mt-20 bg-white p-2 md:p-4 lg:p-4 rounded-md shadow-lg w-full">
        <ol className="list-none p-0 inline-flex space-x-2">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              className="cursor-pointer hover:fill-blue-500 transition-colors duration-300"
              fill="#4b5563"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link
              href="/Service"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              Services
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link
              href={`/Services/${card.categorySlug}`}
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              {slug}
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-800">{titleslug}</span>
          </li>
        </ol>
      </nav>

      <header
        className="bg-center bg-fixed bg-no-repeat bg-cover h-[35vh] relative"
        style={{ backgroundImage: `url(${card.image})` }}
      >
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="mx-2 text-center">
            <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
              <span className="text-white">{card.title}</span>
            </h1>
          </div>
        </div>
      </header>

    </>
  );
};

export default ServiceDetailPage;
