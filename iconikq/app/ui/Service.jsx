import Button from "./Button";

const Services = () => {
  // Step 1: Define the data for each card
  const cardData = [
    {
      image: 'images/transport.jpg',
      title: 'TRANSPORTATION '+'&'+' WAREHOUSING',
      description: 'Iconikq International provides tailored transportation and warehousing solutions for your logistics needs. Our secure facilities ensure timely delivery and safe storage of your goods. Trust us to optimize your supply chain for maximum efficiency.',
      link: 'javascript:void(0)', // replace with actual link when available
    },
    {
      image: 'images/freight forwarder.png',
      title: 'FREIGHT FORWARDING',
      description: 'Iconikq International offers reliable global freight forwarding with tailored air and sea cargo solutions. Our expert team ensures smooth shipping and flexible delivery to key markets worldwide.',
      link: 'javascript:void(0)',
    },
    {
      image: 'images/inventory.jpg',
      title: 'INVENTORY MANAGEMENT',
      description: 'Iconikq International offers expert inventory management services to streamline your supply chain. Our solutions ensure optimal stock levels, reduce costs, and enhance order accuracy. Trust us to maximize efficiency and support your business growth.',
      link: 'javascript:void(0)',
    },
    {
      image: 'images/custom.jpg',
      title: 'CUSTOM BROKER SERVICES',
      description: 'Iconikq International provides fast and reliable sea and air customs clearance. Our expert team ensures smooth processing with services like import/export clearance, documentation, shipment examination, and warehousing.',
      link: 'javascript:void(0)', 
    },
    {
      image: 'images/supply.png',
      title: 'SUPPLY CHAIN CONSULTING',
      description: 'Iconikq International   We offer expert supply chain consulting services, optimizing logistics for seamless operations. From customs clearance to freight management, we streamline your entire supply chain. Trust us to enhance efficiency and reduce costs across your logistics processes.',
      link: 'javascript:void(0)',
    },
    {
      image: 'images/aeo.jpg',
      title: 'AEO CONSULTANTS',
      description: 'Our AEO certification offers significant benefits, including faster customs clearance, reduced inspections, and priority treatment. Enjoy streamlined global trade with enhanced security and compliance. Maximize efficiency and minimize delays with our trusted AEO status.',
      link: 'javascript:void(0)',
    },
    
  ];

  return (
    <>
      <section className="pt-10 lg:pt-[120px] pb-5 lg:pb-10 bg-[#F3F4F6]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Step 2: Use map to dynamically generate cards */}
            {cardData.map((card, index) => (
              <div key={index} className=" w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="shadow-2xl bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src={card.image}
                    alt="image"
                    className="w-full h-[35vh]"
                  />
                  <div className="p-4 sm:p-6 md:p-4 xl:p-6 text-center">
                    <h3>
                      <a
                        href={card.link}
                        className="
                          font-semibold
                          text-dark text-xl
                          sm:text-[20px]
                          md:text-[20px]
                          lg:text-[20px]
                          xl:text-xl
                          2xl:text-[20px]
                          mb-4
                          block
                          hover:text-primary
                        "
                      >
                        {card.title}
                      </a>
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      {card.description}
                    </p>
                    <Button text="View Details" href={`/Services/${card.link}`} />
                      
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
