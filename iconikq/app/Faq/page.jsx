

const FAQ = () => {
  const faqData = [
    {
      question: "What is a SAAS platform?",
      answer: "A SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.",
    },
    {
      question: "How does billing work?",
      answer: "We offer a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services.",
    },
    {
      question: "Can I get a refund for my subscription?",
      answer: "We offer a 30-day money-back guarantee for most of our subscription plans.",
    },
    {
      question: "How do I cancel my subscription?",
      answer: "To cancel your subscription, log in to your account and navigate to the subscription management page.",
    },
    {
      question: "Can I try this platform for free?",
      answer: "We offer a free trial of our platform for a limited time.",
    },
    {
      question: "How do I access documentation?",
      answer: "Documentation is available on the company's website and can be accessed by logging in to your account.",
    },
    {
      question: "How do I contact support?",
      answer: "If you need help, you can contact the company's support team by submitting a support request or emailing support@We.com.",
    },
    {
      question: "Do you offer any discounts or promotions?",
      answer: "We may offer discounts or promotions from time to time.",
    },
    {
      question: "How do we compare to other similar services?",
      answer: "This platform is highly reliable and feature-rich, offering competitive pricing and a wide range of tools.",
    },
  ];

  return (
    <>

    <div className=" mx-auto py-16 px-5 bg-white" >
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
        <p className="text-neutral-500 text-xl mt-3">Frequently asked questions</p>
      </div>
  
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        {faqData.map((faq, index) => (
          <div className="py-5" key={index}>
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 opacity-0 transition-opacity duration-200 ease-in-out group-open:opacity-100">
                {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
     
    </>
  );
};

export default FAQ;
