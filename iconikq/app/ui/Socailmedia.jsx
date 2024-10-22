
import Image from 'next/image';

const SocialMediaCards = () => {
  const socialMediaData = [
   
    {
      name: 'YouTube',
      followers: '58k',
      imageUrl: 'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/youtube.svg',
      altText: 'youtube',
    },
    {
      name: 'Facebook',
      followers: '896k',
      imageUrl: 'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/facebook.svg',
      altText: 'facebook',
    },
    {
      name: 'Twitter',
      followers: '77k',
      imageUrl: 'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/twitter.svg',
      altText: 'twitter',
    }
  ];

  return (
    <div className="flex flex-wrap mx-auto mb-5">
      <div className="w-full max-w-full px-3 mb-6 mx-auto bg-white">
        <div className="flex flex-wrap mt-5 mx-5 removable">
          {socialMediaData.map((social, index) => (
            <div key={index} className="w-full max-w-full px-3 mb-6 sm:w-1/4 xl:mb-0 xl:w-1/4 drop-zone">
              <div className="shadow-2xl relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
                <div className="flex flex-row items-center justify-center flex-auto py-8 px-9">
                  <Image loading="lazy" 
                    className="w-[10vh] mr-3"
                    src={social.imageUrl}
                    alt={social.altText}
                    width={40} // Set appropriate width
                    height={40} // Set appropriate height
                  />
                  <div className="flex flex-col my-7">
                    <span className="text-secondary-inverse text-4xl font-bold">
                      {social.followers}
                    </span>
                    <span className="font-medium text-secondary-dark text-lg">
                      Followers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCards;
