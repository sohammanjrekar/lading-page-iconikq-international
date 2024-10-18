import Button from "../ui/Button";

const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            
            <div className="sm:col-span-2">
            <img className="h-[6vh]" src="/images/logo.png" alt=""/>
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Subscribe to our newsletter for updates.
              </h1>
  
              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className="shadow-inner ring-2 ring-myred ring-offset-2 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />
  
               <Button text="Subscribe"/>
              </div>
            </div>
  
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Quick Links</p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
              </div>
            </div>
  
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Industries</p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Industry 1</a>
                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Industry 2</a>
                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Industry 3</a>
              </div>
            </div>
          </div>
        </div>
  
        <div className="py-6 mt-10 bg-gray-100 dark:bg-gray-800">
          <div className="container flex items-center justify-center mx-auto text-sm text-gray-600 dark:text-gray-300">
            © 2024 Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  