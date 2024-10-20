"use client"
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Iconikq International has been an essential partner for our business. Their team ensures that our goods are always delivered on time and in perfect condition. We highly recommend their services!",
    name: "Amit K.",
    title: "CEO of Global Exports"
  },
  {
    id: 2,
    text: "The level of professionalism and transparency at Iconikq International is unmatched. Their logistics solutions have streamlined our operations, making international shipments stress-free.",
    name: "Priya S",
    title: "Operations Manager at TechWorld"
  },
  {
    id: 3,
    text: "From start to finish, the experience with Iconikq International has been fantastic. Their team goes above and beyond to meet our logistics needs, making them our go-to partner for all shipping requirements.",
    name: "Rahul M.",
    title: "Founder of GreenFarms Imports"
  }
];

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  return (
    <>
     <div className=" mt-10 flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
        What Our Clients Say
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Our clients’ success stories speak for themselves. Hear from the businesses that trust Iconikq International to deliver their goods with efficiency and reliability.
        </p>
      </div>
    <div className="mb-10 md:mb-24  container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
      
    <div className="relative h-[35vh] sm:h-full w-full py-2 md:py-24 bg-heromy bg-cover md:w-1/2 flex flex-col items-center justify-center">
  {/* Semi-Transparent Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

  <div className="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight mb-0 z-20">
    <span className="md:block shadow-inner text-shadow-md">What Our</span>
    <span className="md:block shadow-inner text-shadow-md">Customers</span>
    <span className="block shadow-inner text-shadow-md">Are Saying!</span>
  </div> 
</div>


      <div className="bg-myblue md:w-1/2">
        <div className="flex flex-col h-full relative">
          <div className="absolute top-0 left-0 mt-2 ml-2 md:mt-2 md:ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-myred fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24">
              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/>
            </svg>
          </div>

          <div className="h-full relative z-10">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={`h-full ${activeTestimonial === testimonial.id ? "block" : "hidden"}`}>
                <p className="text-white serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex my-4 justify-center items-center">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(testimonial.id)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 
                ${activeTestimonial === testimonial.id ? 'h-16 w-16 opacity-100 bg-myred text-white' : 'h-12 w-12 opacity-25 bg-white text-gray-600'}`}
              >
                {testimonial.name.charAt(0)}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap flex-col items-center justify-center mb-8">
          <div className="text-2xl text-white">

              {testimonials[activeTestimonial - 1].name}
            </div>
            
            <div className="text-sm text-white">

              {testimonials[activeTestimonial - 1].title}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Testimonial;
