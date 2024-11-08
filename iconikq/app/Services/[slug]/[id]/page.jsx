// "use client";
// import { useEffect } from 'react';
// import { useServiceStore } from '../../store/serviceStore'; // Assuming the store for services
// import Image from 'next/image';
// import Head from 'next/head';
// import Button from '../../ui/Button';

// const Page = ({ params }) => {
//   const { id } = params; // Retrieve service ID from URL params
//   const { service = null, fetchServiceData, loading, error } = useServiceStore(); // Get service data from store

//   useEffect(() => {
//     // Fetch single service data when the page loads or id changes
//     if (id) {
//       fetchServiceData(id); // This should fetch data based on the ID passed in params
//     }
//   }, [id, fetchServiceData]); // Effect depends on `id` to fetch service data when the ID changes

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error loading service: {error}</div>;
//   }

//   if (!service) {
//     return <div>Service not found</div>; // Handle the case when no service is found
//   }

//   return (
//     <>
//       <Head>
//         <title>Service: {service.title}</title>
//         <meta name="description" content={`Learn more about ${service.title}.`} />
//         <meta property="og:title" content={service.title} />
//         <meta property="og:description" content={`Learn more about ${service.title}.`} />
//         <meta property="og:image" content={service.image1} />
//         <meta property="og:url" content={`https://yourwebsite.com/service/${id}`} />
//       </Head>

//       <div className="min-h-screen container w-[70vw] my-8 pt-10 mx-auto">
//         <main className="mt-12">
//           {/* Header Section */}
//           <header className="mb-12 text-center">
//             <h1 className="text-2xl sm:text-4xl font-extrabold text-myblue leading-tight mb-4">
//               {service.title}
//             </h1>
//             <div className="flex flex-row items-center justify-center mb-2">
//               <div className="bg-myred w-[10vw] flex items-center rounded-full text-white py-1 uppercase mr-2">
//                 <p className="text-sm font-medium text-center mx-auto">{service.category}</p>
//               </div>
//               <p className="text-md font-bold text-myblue">Date: {formatDate(service.date)}</p>
//             </div>
//           </header>

//           {/* Top Image */}
//           {service.image1 && (
//             <div className="relative mb-12">
//               <Image
//                 loading="lazy"
//                 alt="Primary image related to the service"
//                 width={800}
//                 height={500}
//                 layout="responsive"
//                 src={service.image1}
//                 className="rounded-lg max-h-[70vh] shadow-lg transition-transform transform hover:scale-105"
//               />
//             </div>
//           )}

//           {/* Service Details Content */}
//           <div className="flex flex-col lg:flex-row lg:space-x-12">
//             <div className="lg:w-3/4 px-4 lg:px-0 mb-12 lg:mb-0">
//               <div className="mb-12">
//                 <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-justify mb-8">
//                   {service.description}
//                 </p>
//                 {/* Image for the description */}
//                 {service.image2 && (
//                   <div className="mb-8 mt-5">
//                     <Image
//                       loading="lazy"
//                       alt="Image related to the service"
//                       width={1000}
//                       height={800}
//                       layout="responsive"
//                       src={service.image2}
//                       className="rounded-lg max-h-[50vh] shadow-lg transition-transform transform hover:scale-105"
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Sidebar / Author Section */}
//             <div className="w-full lg:w-1/4 max-w-sm mx-auto lg:mx-0 mb-12 lg:mb-0">
//               <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out">
//                 <div className="flex flex-wrap flex-col justify-center items-center mb-6">
//                   <Image
//                     loading="lazy"
//                     alt="Author Image"
//                     width={120}
//                     height={120}
//                     layout="intrinsic"
//                     src={service.authorImage}
//                     className="h-24 w-24 rounded-full object-cover border-4 border-green-700"
//                   />
//                   <div className="ml-4">
//                     <p className="font-semibold text-lg text-gray-800">{service.author}</p>
//                     <p className="text-md text-center text-gray-600">Author</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-4 text-lg leading-relaxed text-justify">
//                   {service.authorDescription}
//                 </p>
//                 <Button className="mx-auto" text="Contact Me" href={'/Contact'} />
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Page;
