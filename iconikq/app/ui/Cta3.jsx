"use client"; // Required for Next.js to handle client-side rendering

const HeroSection = () => {
  return (
    <>
      {/* Styles for spinning text */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #spin {
              display: inline-block; /* Ensures the text behaves like inline elements */
            }
            #spin:after {
              content: "marketing"; /* Initial content */
              animation: spin 10s linear infinite; /* Animation duration and timing */
            }
            @keyframes spin {
              0% { content: "marketing"; }
              20% { content: "content"; }
              40% { content: "engineering"; }
              60% { content: "crypto"; }
              80% { content: "consulting"; }
              100% { content: "business"; }
            }
          `,
        }}
      />

      <div className="flex items-center justify-center min-h-screen bg-slate-800">
        <div className="bg-slate-700 shadow-md rounded-xl m-16 border border-indigo-500/50 shadow-xl shadow-indigo-500/50">
          <div className="flex flex-col p-10 px-16 space-y-6 items-center text-center">
            <h1 className="font-light md:text-6xl text-5xl text-white tracking-wide">
              Hire the{" "}
              <span
                id="spin"
                className="text-transparent font-normal bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300"
              />
              <br /> expert you need
            </h1>
            <p className="text-gray-400 md:text-2xl text-xl px-18">
              Create a job to connect with freelancers and agencies who can
              increase your sales, make your website stand out, and more
            </p>
            <button className="rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white text-lg py-4 px-6 hover:bg-indigo-600 transition-colors duration-300">
              Find Expert
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
