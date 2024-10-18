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
          src="https://i.ibb.co/Byd813Q/mateus-campos-felipe-Zxd-JFg-SGQBA-unsplash.jpg"
          alt="Your Name Here"
        />
        <h1 className="text-5xl sm:text-6xl lg:text-9xl">Jane Doe</h1>
        <h2 className="font-light text-4xl sm:text-5xl lg:text-8xl">
          Business Manager
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque
            delectus consequuntur harum doloremque assumenda omnis quibusdam
            quia neque, adipisci iste laborum sed nostrum.
          </p>
        </div>
        <div className="px-10 md:px-20">
          <br />
          <h3 className="text-xl font-bold">Contact</h3>
          <a
            className="text-xl hover:text-blue-600"
            href="mailto:test@nomail.com"
          >
            test@email.com
          </a>
          <p>675 234 4323</p>
        </div>
      </div>
      {/* image */}
      <img
        className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
        src="https://i.ibb.co/Byd813Q/mateus-campos-felipe-Zxd-JFg-SGQBA-unsplash.jpg"
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
          <h5 className="text-xl md:text-2xl font-bold">
            Full Stack Developer
          </h5>
          <h6 className="text-lg font-bold">Facebook</h6>
          <p>Jan 2015 - present</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            eveniet deleniti tempore veritatis adipisci accusantium voluptatibus
            vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
            laudantium ullam! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Animi non incidunt voluptates molestiae delectus
            nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
            harum voluptates praesentium. Suscipit itaque officiis odio ut!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">Software Developer</h5>
          <h6 className="text-lg font-bold">Google</h6>
          <p>Feb 2010 - Jan 2015</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            eveniet deleniti tempore veritatis adipisci accusantium voluptatibus
            vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
            laudantium ullam! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Animi non incidunt voluptates molestiae delectus
            nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
            harum voluptates praesentium. Suscipit itaque officiis odio ut!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl  font-bold">Web Developer</h5>
          <h6 className="text-lg font-bold">IBM</h6>
          <p>Apr 2008 - Feb 2010</p>
        </div>
        <div className="flex flex-col col-span-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            eveniet deleniti tempore veritatis adipisci accusantium voluptatibus
            vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
            laudantium ullam! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Animi non incidunt voluptates molestiae delectus
            nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
            harum voluptates praesentium. Suscipit itaque officiis odio ut!
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
          <h5 className="text-xl md:text-2xl  font-bold">
            B.S. Computer Science
          </h5>
          <h6 className="text-lg font-bold">Harward University</h6>
          <p>Jan 2015 - present</p>
        </div>
        <div className="flex flex-col col-span-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            eveniet deleniti tempore veritatis adipisci accusantium voluptatibus
            vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
            laudantium ullam! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Animi non incidunt voluptates molestiae delectus
            nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
            harum voluptates praesentium. Suscipit itaque officiis odio ut!
          </p>
        </div>
      </div>
    </section>
    <Footer/>
  </>



  )
}

export default page