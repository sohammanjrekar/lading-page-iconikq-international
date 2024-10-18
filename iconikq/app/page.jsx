
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import BlogSection from "./ui/BlogSection";

import Gallery from "./ui/Gallery";
import ScrollToTopButton from "./ui/ScrollToTopButton";
import Services from "./ui/Service";
import SocialMediaCards from "./ui/Socailmedia";
import Animatedword from "./ui/Animatedword";
import Team from "./ui/Team";
import Intro from "./ui/Intro";
import Autoscrollcompany from "./ui/Autoscrollcompany";
import Testimonial from "./ui/Testimonial";
import Mapsection from "./ui/Mapsection";
import VideoCarousel from "./ui/VideoCarousel";


export default function Home() {
  return (
  <>
  <Navbar/>
  <VideoCarousel/>
 <Animatedword/>
  
 <Services/>
 <Autoscrollcompany/>
<Team/>
<Intro/>
<Gallery/>
<Testimonial/>
<BlogSection/>
<SocialMediaCards/>
<Mapsection/>
  <ScrollToTopButton/>
  <Footer/>
  </>
  );
}
