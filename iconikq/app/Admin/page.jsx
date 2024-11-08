"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSessionStore } from './../store/sessionStore';
import { supabase } from './../utils/supabase/client';
import Image from 'next/image';
import Link from 'next/link';

const BlogAdmin = () => {
  const router = useRouter();
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);
  const [counts, setCounts] = useState({ contactCount: 0, blogPostCount: 0 });


  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/Admin/Login'); // Redirect to login if not authenticated
    } else {
      fetchCounts();

    }
  }, [isAuthenticated, router]);

  const fetchCounts = async () => {
    try {
      const response = await getCounts();
      setCounts(response);
    } catch (error) {
      console.error('Error fetching counts:', error);
    }
  };

  const getCounts = async () => {
    try {
      const { count: contactCount } = await supabase
        .from('contacts')
        .select('*', { count: 'exact', head: true });
      const { count: blogPostCount } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true });
      const { count: serviceCount } = await supabase
        .from('services')
        .select('*', { count: 'exact', head: true });
      const { count: certificateCount } = await supabase
        .from('certificates')
        .select('*', { count: 'exact', head: true });
      const { count: faqCount } = await supabase
        .from('faqs')
        .select('*', { count: 'exact', head: true });
      const { count: galleryCount } = await supabase
        .from('gallery')
        .select('*', { count: 'exact', head: true });
      const { count: mediaCount } = await supabase
        .from('media')
        .select('*', { count: 'exact', head: true });
        const { count: AchievementCount } = await supabase
        .from('achievements')
        .select('*', { count: 'exact', head: true });
        const { count: CompanyCount } = await supabase
        .from('companies')
        .select('*', { count: 'exact', head: true });
      return {
        contactCount,
        blogPostCount,
        serviceCount,
        certificateCount,
        faqCount,
        galleryCount,
        mediaCount,
        AchievementCount,
        CompanyCount,
      };
    } catch (error) {
      console.error('Error fetching counts:', error);
      throw new Error('Failed to fetch counts');
    }
  };



  if (!isAuthenticated) {
    return null; // Prevent rendering until authentication is confirmed
  }

  return (
    <div className="container min-h-screen w-[70vw] mx-auto  my-28">
      <div className="p-4">
        <div class="container mx-auto text-center">
          <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">Admin Dashboard</h2>
          <p class="block antialiased font-sans  leading-relaxed text-inherit mb-8 text-xl font-normal !text-gray-500">Manage ICONIKQ&apos;s logistics services, content, and client data efficiently with the Admin Dashboard</p>
        </div>
        <div className="mt-12">

          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
            {/* Blog Count Card */}

            <Link href={'/Admin/Blog'}>
              <div className="relative h-[40vh] lg:h-[20vh] flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-24 w-24 place-items-center">
                  <Image src={'/images/blog.png'} height={516} width={516} alt="blog" />
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased font-sans text-2xl leading-normal font-normal text-blue-gray-600">Blogs</p>
                  <h4 className="block antialiased mt-10 tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900">{counts.blogPostCount}</h4>

                </div>

              </div>
            </Link>
            {/* Contacts Count Card */}
            <Link href={'/Admin/Contacts'}>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white h-[40vh] lg:h-[20vh] text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-24 w-24 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-20 h-20 text-white">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased font-sans text-2xl leading-normal font-normal text-blue-gray-600">Contacts</p>
                  <h4 className="block antialiased mt-10 tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900">{counts.contactCount}</h4>
                </div>

              </div>
            </Link>
            {/* Service Count Card */}
            <Link href={'/Admin/Services'}>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white h-[40vh] lg:h-[20vh] text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-24 w-24 place-items-center">
                  <Image src={'/images/service.png'} height={516} width={516} alt="service" />
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased font-sans text-2xl leading-normal font-normal text-blue-gray-600">Services</p>
                  <h4 className="block mt-10 antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900">{counts.serviceCount}</h4>
                </div>
              </div>


            </Link>
            {/* media Count Card */}
            <Link href={'/Admin/Media'}>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white h-[40vh] lg:h-[20vh] text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-24 w-24 place-items-center">
                  <Image src={'/images/video.png'} height={516} width={516} alt="media" />
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased font-sans text-2xl leading-normal font-normal text-blue-gray-600">Media</p>
                  <h4 className="block mt-10 antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900">{counts.mediaCount}</h4>
                </div>
              </div>

            </Link>
            {/* certificates Count Card */}
            <Link href={'/Admin/Certificates'}>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white h-[40vh] lg:h-[20vh] text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-24 w-24 place-items-center">
                  <Image src={'/images/certificate.png'} height={516} width={516} alt="certificate" />
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased font-sans text-2xl leading-normal font-normal text-blue-gray-600">Certificate</p>
                  <h4 className="block mt-10 antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900">{counts.certificateCount}</h4>
                </div>
              </div>
            </Link>
            {/* faq Count Card */}
            <Link href={'/Admin/Faq'}>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white h-[40vh] lg:h-[20vh] text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-24 w-24 place-items-center">
                  <Image src={'/images/faq.png'} height={516} width={516} alt="faq" />
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased font-sans text-2xl leading-normal font-normal text-blue-gray-600">FAQ</p>
                  <h4 className="block mt-10 antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900">{counts.faqCount}</h4>
                </div>
              </div>
            </Link>

            {/* gallery Count Card */}
            <Link href={'/Admin/Gallery'}>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white h-[40vh] lg:h-[20vh] text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-24 w-24 place-items-center">
                  <Image src={'/images/picture.png'} height={516} width={516} alt="gallery" />
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased font-sans text-2xl leading-normal font-normal text-blue-gray-600">Gallery</p>
                  <h4 className="block mt-10 antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900">{counts.galleryCount}</h4>
                </div>
              </div>
            </Link>


            {/* gallery Count Card */}
            <Link href={'/Admin/Achievements'}>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white h-[40vh] lg:h-[20vh] text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-24 w-24 place-items-center">
                  <Image src={'/images/picture.png'} height={516} width={516} alt="Achievement" />
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased font-sans text-2xl leading-normal font-normal text-blue-gray-600">Achievements</p>
                  <h4 className="block mt-10 antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900">{counts.AchievementCount}</h4>
                </div>
              </div>
            </Link>




            <Link href={'/Admin/Company'}>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white h-[40vh] lg:h-[20vh] text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-24 w-24 place-items-center">
                  <Image src={'/images/picture.png'} height={516} width={516} alt="Achievement" />
                </div>
                <div className="p-4 text-right">
                  <p className="block antialiased font-sans text-2xl leading-normal font-normal text-blue-gray-600">Company</p>
                  <h4 className="block mt-10 antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900">{counts.CompanyCount}</h4>
                </div>
              </div>
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
