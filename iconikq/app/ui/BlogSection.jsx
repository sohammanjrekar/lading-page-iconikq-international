const BlogSection = () => {
    return (
      <section className="bg-myblue">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl text-white">
            From the blog
          </h1>
  
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <div key={index} className="lg:flex">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={post.imgSrc}
                  alt={post.title}
                />
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a href="#" className="text-xl font-semibold text-gray-800 hover:underline text-white">
                    {post.title}
                  </a>
                  <span className="text-sm text-gray-500 text-gray-300">On: {post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  const blogPosts = [
    {
      title: 'How to use sticky note for problem solving',
      date: '20 October 2019',
      imgSrc: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Morning routine to boost your mood',
      date: '25 November 2020',
      imgSrc: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'All the features you want to know',
      date: '30 September 2020',
      imgSrc: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80',
    },
    {
      title: 'Minimal workspace for your inspirations',
      date: '13 October 2019',
      imgSrc: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80',
    },
    {
      title: 'What do you want to know about Blockchain',
      date: '20 October 2019',
      imgSrc: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ];
  
  export default BlogSection;
  