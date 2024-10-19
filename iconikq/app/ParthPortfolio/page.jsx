import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"

const page = () => {
  return (
    <>
 
  {/* component */}
  <Navbar/>
       {/* Name section */}
    <section className="flex flex-col items-center justify-center h-screen  -my-20 md:-mt-48 px-8">
      {/* style="height: 50vh" */}
      <div className="flex flex-col items-center justify-center text-center h-screen-half">
        {/* image */}
        <img
          className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
          src="/images/parth2.jpg"
          alt="Your Name Here"
        />
        <h1 className="text-5xl sm:text-6xl lg:text-9xl">Mr. Parth Ruparel</h1>
        <h2 className="font-light text-4xl sm:text-5xl lg:text-8xl">
          Partner
        </h2>
      </div>
    </section>
    {/* /Name Section */}
    {/* image section */}
    <section className="flex items-center justify-between px-8 mb-20 tracking-wider">
      {/* Summary (left) */}
      <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
        <div className="flex flex-col px-10 md:px-20">
          <h3 className="text-xl font-bold">Skills</h3>
          <br />
          <span className="text-lg">Management</span>
          <span className="text-lg">Collaboration</span>
          <span className="text-lg">Communication</span>
          <span className="text-lg">Microsoft Office</span>
        </div>
        <div className="px-10 md:px-20">
          <h3 className="text-xl font-bold">Summary</h3>
          <br />
          <p className="w-full md:w-2/3">
  Results-driven professional with over 3 years of experience in international logistics and supply chain management. Currently a Partner at Iconikq International LLP, where I utilize leadership skills to enhance logistics solutions and foster business growth. Holds a Master's in International Business Management from Coventry University and a Bachelor's in Finance and Financial Management Services. Skilled in collaboration, communication, and strategic planning, with proficiency in Microsoft Office and project management tools.
</p>

        </div>
        <div className="px-10 md:px-20">
          <br />
          <h3 className="text-xl font-bold">Contact</h3>
          <a
            className="text-xl hover:text-blue-600"
            href="mailto:test@nomail.com"
          >
         parth@iconikqinternational.com
          </a>
          <p>+91 9870725060 </p>
        </div>
      </div>
      {/* image */}
      <img
        className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
        src="images/parth3.jpg"
        alt="Your Name Here"
      />
      {/* statistics (right) */}
      <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
        <div className="px-20">
          <h4 className="text-xl font-bold">Experience</h4>
          <br />
          <p className="text-6xl">+2</p>
        </div>
        <div className="px-20">
          <h4 className="text-xl font-bold">Projects</h4>
          <br />
          <p className="text-6xl">+25</p>
        </div>
        <div className="px-20">
          <h4 className="text-xl font-bold">Clients</h4>
          <br />
          <p className="text-6xl">+14</p>
        </div>
      </div>
    </section>
    {/* /image section */}
    <hr className="border-gray-400 mx-44" />
{/* Resume */}
<section className="px-20 mt-10">
  <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
    Experience
  </h4>
  <div className="grid grid-cols-1 md:grid-cols-6 my-10">
    <div className="flex flex-col col-span-2 mb-4 md:mb-0">
      <h5 className="text-xl md:text-2xl font-bold">Partner</h5>
      <h6 className="text-lg font-bold">Iconikq International LLP</h6>
      <p>Apr 2021 - Present · 3 yrs 7 mos</p>
      <p>Mumbai, Maharashtra, India · On-site</p>
      <p>International Logistics</p>
      <p>Leadership and Management</p>
    </div>
    <div className="flex flex-col col-span-4">
      <p>
        Involved in providing efficient and reliable logistics solutions. 
        Responsibilities include overseeing operations, managing client relationships, 
        and ensuring timely deliveries while maintaining high-quality standards. 
        Focus on enhancing operational efficiency and driving growth through customized solutions.
      </p>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-6 my-10">
    <div className="flex flex-col col-span-2 mb-4 md:mb-0">
      <h5 className="text-xl md:text-2xl font-bold">Intern</h5>
      <h6 className="text-lg font-bold">Sharon Enterprises</h6>
      <p>May 2018 - Apr 2021 · 3 yrs</p>
      <p>Mulund</p>
    </div>
    <div className="flex flex-col col-span-4">
      <p>
        Assisted in various operational tasks, gaining practical experience in logistics and supply chain management. 
        Worked closely with the team to enhance workflow efficiency and supported customer service initiatives.
      </p>
    </div>
  </div>
</section>
<hr className="border-gray-400 mx-44" />
{/* Resume */}
<section className="px-20 mt-10">
  <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
    Education
  </h4>
  <div className="grid grid-cols-1 md:grid-cols-6 my-10">
    <div className="flex flex-col col-span-2 mb-4 md:mb-0">
      <h5 className="text-xl md:text-2xl font-bold">
        M.Sc. International Business Management
      </h5>
      <h6 className="text-lg font-bold">Coventry University</h6>
      <p>2019 - 2020</p>
    </div>
    <div className="flex flex-col col-span-4">
      <p>
        Completed a master's degree focused on international business strategies, 
        enhancing skills in global market analysis and management practices.
      </p>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-6 my-10">
    <div className="flex flex-col col-span-2 mb-4 md:mb-0">
      <h5 className="text-xl md:text-2xl font-bold">
        BMS, Finance and Financial Management Services
      </h5>
      <h6 className="text-lg font-bold">S.M. Shetty College</h6>
      <p>2015 - 2018</p>
    </div>
    <div className="flex flex-col col-span-4">
      <p>
        Graduated with a bachelor's degree, acquiring foundational knowledge in finance, 
        investment strategies, and financial management, preparing for a career in the business sector.
      </p>
    </div>
  </div>
</section>

    <Footer/>
  </>



  )
}

export default page