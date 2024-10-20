import Image from "next/image";
import Animatedword from "./Animatedword";
import Button from "./Button";
import Link from "next/link"; // Import Next.js Link

const Services = () => {
  // Step 1: Define the data for each card
  const cardData = [
    {
      image: 'images/transport.jpg',
      title: 'TRANSPORTATION & WAREHOUSING',
      description: 'Iconikq International provides tailored transportation and warehousing solutions for your logistics needs. Our secure facilities ensure timely delivery and safe storage of your goods. Trust us to optimize your supply chain for maximum efficiency.',
      link: '/services/transportation', // Replace with actual link
    },
    {
      image: 'images/freight forwarder.png',
      title: 'FREIGHT FORWARDING',
      description: 'Iconikq International offers reliable global freight forwarding with tailored air and sea cargo solutions. Our expert team ensures smooth shipping and flexible delivery to key markets worldwide.',
      link: '/services/freight-forwarding', // Replace with actual link
    },
    {
      image: 'images/inventory.jpg',
      title: 'INVENTORY MANAGEMENT',
      description: 'Iconikq International offers expert inventory management services to streamline your supply chain. Our solutions ensure optimal stock levels, reduce costs, and enhance order accuracy.',
      link: '/services/inventory-management', // Replace with actual link
    },
    {
      image: 'images/custom.jpg',
      title: 'CUSTOM BROKER SERVICES',
      description: 'Iconikq International provides fast and reliable sea and air customs clearance. Our expert team ensures smooth processing with services like import/export clearance, documentation, shipment examination, and warehousing.',
      link: '/services/custom-broker-services', // Replace with actual link
    },
    {
      image: 'images/supply.png',
      title: 'SUPPLY CHAIN CONSULTING',
      description: 'We offer expert supply chain consulting services, optimizing logistics for seamless operations. From customs clearance to freight management, we streamline your entire supply chain.',
      link: '/services/supply-chain-consulting', // Replace with actual link
    },
    {
      image: 'images/aeo.jpg',
      title: 'Legal CONSULTANTS',
      description: 'Our AEO certification offers significant benefits, including faster customs clearance, reduced inspections, and priority treatment. Maximize efficiency and minimize delays with our trusted AEO status.',
      link: '/services/legal-consultants', // Replace with actual link
    },
  ];

  return (
    <>
      <section className="pb-5 lg:pb-10 bg-[#F3F4F6]">
        <div className="container mx-auto">
          <Animatedword />
          <div className="flex flex-wrap -mx-4">
            {/* Step 2: Use map to dynamically generate cards */}
            {cardData.map((card, index) => (
              <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="shadow-2xl bg-white rounded-lg overflow-hidden mb-10">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[35vh] object-cover"
                    width={500} // Adjust based on your design
                    height={300} // Adjust based on your design
                  />
                  <div className="p-4 sm:p-6 md:p-4 xl:p-6 text-center">
                    <h3>
                      <Link
                        href={card.link}
                        className="font-semibold text-dark text-xl sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-xl 2xl:text-[20px] mb-4 block hover:text-primary"
                      >
                        {card.title}
                      </Link>
                    </h3>
                    <p
                      className="text-base text-body-color leading-relaxed mb-7"
                      title={card.description} // Full text on hover
                    >
                      {card.description.length > 100
                        ? `${card.description.slice(0, 130)}...`
                        : card.description}
                    </p>
                    <Button text="View Details" href={card.link} />
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
