import Button from "../ui/Button";
import Social from "../ui/Social"

const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-900 shadow-2xl shadow-white">
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
  
            <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center text-center">
        <div>
          <p class="font-medium">
            Company
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a class="hover:opacity-75" href> About </a>
            <a class="hover:opacity-75" href> Meet the Team </a>
            <a class="hover:opacity-75" href> History </a>
            <a class="hover:opacity-75" href> Careers </a>
          </nav>
        </div>
        <div>
          <p class="font-medium">
            Services
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a class="hover:opacity-75" href> 1on1 Coaching </a>
            <a class="hover:opacity-75" href> Company Review </a>
            <a class="hover:opacity-75" href> Accounts Review </a>
            <a class="hover:opacity-75" href> HR Consulting </a>
            <a class="hover:opacity-75" href> SEO Optimisation </a>
          </nav>
        </div>
        <div>
          <p class="font-medium">
            Helpful Links
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a class="hover:opacity-75" href> Contact </a>
            <a class="hover:opacity-75" href> FAQs </a>
            <a class="hover:opacity-75" href> Live Chat </a>
          </nav>
        </div>
        <div>
          <p class="font-medium">
            Legal
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a class="hover:opacity-75" href> Privacy Policy </a>
            <a class="hover:opacity-75" href> Terms &amp; Conditions </a>
            <a class="hover:opacity-75" href> Returns Policy </a>
            <a class="hover:opacity-75" href> Accessibility </a>
          </nav>
        </div>
      </div>
    </div>
        </div>
  
        <div className="px-8 py-3 mt-10 flex justify-between items-center bg-gray-100 dark:bg-gray-800 ">
          <div className="text-[2vh] md:text-sm text-gray-600 dark:text-gray-300">
            © 2024 Your Company. All rights reserved.
          </div>
          <Social/>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  