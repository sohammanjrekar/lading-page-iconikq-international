
const page = () => {
  return (
    <>
  {/* component */}
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />
  <main className="profile-page">
    <section className="relative block h-500-px">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")'
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-50 bg-black"
        />
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style={{ transform: "translateZ(0px)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x={0}
          y={0}
        >
          <polygon
            className="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </section>
    <section className="relative py-16 bg-blueGray-200">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div className="py-6 px-3 mt-32 sm:mt-0">
                  <button
                    className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Connect
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      22
                    </span>
                    <span className="text-sm text-blueGray-400">Friends</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      10
                    </span>
                    <span className="text-sm text-blueGray-400">Photos</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      89
                    </span>
                    <span className="text-sm text-blueGray-400">Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Jenna Stones
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                Los Angeles, California
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                Solution Manager - Creative Tim Officer
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                University of Computer Science
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <a href="#pablo" className="font-normal text-pink-500">
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Made with{" "}
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  Notus JS
                </a>{" "}
                by{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-blueGray-500 hover:text-blueGray-800"
                  target="_blank"
                >
                  {" "}
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </main>
  <>
  {/* component */}
  <link
    rel="stylesheet"
    href="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css"
  />
  <div className="flex flex-col justify-center items-center h-[100vh]">
    <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          General Information
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
          As we live, our hearts turn colder. Cause pain is what we go through
          as we become older. We get insulted by others, lose trust for those
          others. We get back stabbed by friends. It becomes harder for us to
          give others a hand. We get our heart broken by people we love, even
          that we give them all...
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 px-2 w-full">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Education</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Stanford University
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Languages</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            English, Spanish, Italian
          </p>
        </div>
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Department</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Product Design
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Work History</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            English, Spanish, Italian
          </p>
        </div>
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Organization</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Simmmple Web LLC
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Birthday</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            20 July 1986
          </p>
        </div>
      </div>
    </div>
    <p className="font-normal text-navy-700 mt-20 mx-auto w-max">
      Profile Card component from{" "}
      <a
        href="https://horizon-ui.com?ref=tailwindcomponents.com"
        target="_blank"
        className="text-brand-500 font-bold"
      >
        Horizon UI Tailwind React
      </a>
    </p>
  </div>

</>
<>
  {/* component */}
  <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
    <h4 className="text-xl text-gray-900 font-bold">Activity log</h4>
    <div className="relative px-4">
      <div className="absolute h-full border border-dashed border-opacity-20 border-secondary" />
      {/* start::Timeline item */}
      <div className="flex items-center w-full my-6 -ml-1.5">
        <div className="w-1/12 z-10">
          <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
        </div>
        <div className="w-11/12">
          <p className="text-sm">Profile informations changed.</p>
          <p className="text-xs text-gray-500">3 min ago</p>
        </div>
      </div>
      {/* end::Timeline item */}
      {/* start::Timeline item */}
      <div className="flex items-center w-full my-6 -ml-1.5">
        <div className="w-1/12 z-10">
          <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
        </div>
        <div className="w-11/12">
          <p className="text-sm">
            Connected with{" "}
            <a href="#" className="text-blue-600 font-bold">
              Colby Covington
            </a>
            .
          </p>
          <p className="text-xs text-gray-500">15 min ago</p>
        </div>
      </div>
      {/* end::Timeline item */}
      {/* start::Timeline item */}
      <div className="flex items-center w-full my-6 -ml-1.5">
        <div className="w-1/12 z-10">
          <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
        </div>
        <div className="w-11/12">
          <p className="text-sm">
            Invoice{" "}
            <a href="#" className="text-blue-600 font-bold">
              #4563
            </a>{" "}
            was created.
          </p>
          <p className="text-xs text-gray-500">57 min ago</p>
        </div>
      </div>
      {/* end::Timeline item */}
      {/* start::Timeline item */}
      <div className="flex items-center w-full my-6 -ml-1.5">
        <div className="w-1/12 z-10">
          <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
        </div>
        <div className="w-11/12">
          <p className="text-sm">
            Message received from{" "}
            <a href="#" className="text-blue-600 font-bold">
              Cecilia Hendric
            </a>
            .
          </p>
          <p className="text-xs text-gray-500">1 hour ago</p>
        </div>
      </div>
      {/* end::Timeline item */}
      {/* start::Timeline item */}
      <div className="flex items-center w-full my-6 -ml-1.5">
        <div className="w-1/12 z-10">
          <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
        </div>
        <div className="w-11/12">
          <p className="text-sm">
            New order received{" "}
            <a href="#" className="text-blue-600 font-bold">
              #OR9653
            </a>
            .
          </p>
          <p className="text-xs text-gray-500">2 hours ago</p>
        </div>
      </div>
      {/* end::Timeline item */}
      {/* start::Timeline item */}
      <div className="flex items-center w-full my-6 -ml-1.5">
        <div className="w-1/12 z-10">
          <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
        </div>
        <div className="w-11/12">
          <p className="text-sm">
            Message received from{" "}
            <a href="#" className="text-blue-600 font-bold">
              Jane Stillman
            </a>
            .
          </p>
          <p className="text-xs text-gray-500">2 hours ago</p>
        </div>
      </div>
      {/* end::Timeline item */}
    </div>
  </div>
</>

</>

  )
}

export default page