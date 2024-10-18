import React from 'react'

const Viewers = () => {
  return (
    <>
    {/* component */}
    <div className="flex items-center -space-x-4">
      <img
        alt="user 1"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
      />
      <img
        alt="user 2"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
        className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
      />
      <img
        alt="user 3"
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
        className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
      />
      <img
        alt="user 4"
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
        className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
      />
      <img
        alt="user 5"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
        className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
      />
    </div>
    <div className="w-full pt-5 px-4 mb-8 mx-auto ">
      <div className="text-sm text-gray-700 py-1">
        Made with{" "}
        <a
          className="text-gray-700 font-semibold"
          href="https://www.material-tailwind.com/docs/html/avatar#avatar-stack?ref=tailwindcomponents"
          target="_blank"
        >
          Material Tailwind
        </a>{" "}
        by{" "}
        <a
          href="https://www.creative-tim.com?ref=tailwindcomponents"
          className="text-gray-700 font-semibold"
          target="_blank"
        >
          {" "}
          Creative Tim
        </a>
        .
      </div>
    </div>
  </>
  
  )
}

export default Viewers