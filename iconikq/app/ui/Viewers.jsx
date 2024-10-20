
import Image from 'next/image';

const Viewers = () => {
  return (
    <>
      {/* component */}
      <div className="flex items-center -space-x-4">
        <Image
          alt="user 1"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          width={48} // Corresponding to h-12 (12*4=48px)
          height={48} // Corresponding to w-12 (12*4=48px)
          className="relative inline-block rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
        />
        <Image
          alt="user 2"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          width={48}
          height={48}
          className="relative inline-block rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
        />
        <Image
          alt="user 3"
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
          width={48}
          height={48}
          className="relative inline-block rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
        />
        <Image
          alt="user 4"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          width={48}
          height={48}
          className="relative inline-block rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
        />
        <Image
          alt="user 5"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
          width={48}
          height={48}
          className="relative inline-block rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
        />
      </div>
    </>
  );
};

export default Viewers;
