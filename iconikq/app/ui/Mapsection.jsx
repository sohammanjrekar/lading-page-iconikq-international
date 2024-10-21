import Button from "./Button"

const Mapsection = () => {
  return (
    <>
    {/* component */}
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.808556918118!2d72.93450307502964!3d19.15985558206205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9b18fe9f6a7%3A0x7fa376a0e7022678!2z4KSr4KS_4KSy4KS_4KSV4KWN4KS4IOCkn-ClieCkteCksOCljeCkuA!5e0!3m2!1smr!2sin!4v1729279258607!5m2!1smr!2sin"
          style={{}}
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex items-center">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Share Your Experience
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
          Your feedback helps us grow and deliver even better logistics solutions. We’re always eager to hear about your experience with Iconikq International.
</p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        <div className="mx-auto">
        <Button text="Send Feedback"/>
        </div>
         
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Mapsection