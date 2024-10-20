
import Image from 'next/image';

const BlogPost = ({ title, imgSrc, description }) => (
  <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
    <div className="rounded-lg h-64 overflow-hidden">
      <Image
        alt="content"
        className="object-cover object-center h-full w-full"
        src={imgSrc}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <h2 className="text-xl font-medium title-font text-white mt-5">
      {title}
    </h2>
    <p className="text-base leading-relaxed mt-2">{description}</p>
    <a className="text-indigo-400 inline-flex items-center mt-3">
      Learn More
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  </div>
);

const Blog2 = () => {
  const posts = [
    {
      title: 'Shooting Stars',
      imgSrc: 'https://dummyimage.com/1203x503',
      description:
        'Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
    },
    {
      title: 'The Catalyzer',
      imgSrc: 'https://dummyimage.com/1204x504',
      description:
        'Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
    },
    {
      title: 'The 400 Blows',
      imgSrc: 'https://dummyimage.com/1205x505',
      description:
        'Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
    },
  ];

  return (
    <>
      {/* component */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500" />
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                Space The Final Frontier
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {posts.map((post, index) => (
              <BlogPost
                key={index}
                title={post.title}
                imgSrc={post.imgSrc}
                description={post.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog2;
