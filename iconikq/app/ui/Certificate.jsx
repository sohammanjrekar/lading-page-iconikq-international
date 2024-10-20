
import Image from 'next/image';

const Certificate = () => {
  return (
    <>
      {/* component */}
      <div className="container mx-auto py-3  w-[85vw]">
      <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900   lg:!text-4xl">
     Certification
    </h2>
    <p className="block antialiased font-sans text-xl  leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
      Read about our latest achievements and milestones.
    </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {/* Blog Entry 1 */}
          <div className=" mx-auto relative shadow-md rounded-lg cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Img by Meriç Dağlı https://unsplash.com/@meric"
              className="w-full h-auto object-cover rounded-lg"
              width={500} // Set the width as per your requirement
              height={500} // Set the height as per your requirement
              layout="responsive"
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-myblue bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
              <h1 className="text-2xl font-semibold">Nature Image</h1>
              <p className="mt-2">
                This is a beautiful nature image placeholder. You can replace it
                with your own image.
              </p>
            </div>
          </div>
          {/* Blog Entry 2 */}
          <div className=" mx-auto relative shadow-md rounded-lg cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Img by Meriç Dağlı https://unsplash.com/@meric"
              className="w-full h-auto object-cover rounded-lg"
              width={500}
              height={500}
              layout="responsive"
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-myblue bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
              <h1 className="text-2xl font-semibold">Nature Image</h1>
              <p className="mt-2">
                This is a beautiful nature image placeholder. You can replace it
                with your own image.
              </p>
            </div>
          </div>
          {/* Blog Entry 3 */}
          <div className=" mx-auto relative shadow-md rounded-lg cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Img by Meriç Dağlı https://unsplash.com/@meric"
              className="w-full h-auto object-cover rounded-lg"
              width={500}
              height={500}
              layout="responsive"
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-myblue bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
              <h1 className="text-2xl font-semibold">Nature Image</h1>
              <p className="mt-2">
                This is a beautiful nature image placeholder. You can replace it
                with your own image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
