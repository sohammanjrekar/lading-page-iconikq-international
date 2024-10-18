
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import BlogSection from "./ui/BlogSection";

import Gallery from "./ui/Gallery";
import ScrollToTopButton from "./ui/ScrollToTopButton";
import Services from "./ui/Service";
import SocialMediaCards from "./ui/Socailmedia";
import Animatedword from "./ui/Animatedword";
import Team from "./ui/Team";
import Testimonial from "./ui/Testimonial";
import VideoCarousel from "./ui/VideoCarousel";


export default function Home() {
  return (
  <>
  <Navbar/>
  {/* <VideoCarousel/> */}
 <Animatedword/>
  
 <Services/>
<Team/>
<Gallery/>
<Testimonial/>
<BlogSection/>
<SocialMediaCards/>
  <ScrollToTopButton/>
  <Footer/>
  </>
  );
}
