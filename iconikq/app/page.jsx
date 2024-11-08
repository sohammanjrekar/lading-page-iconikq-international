import { ReactLenis } from "lenis/react"; // Import ReactLenis for smooth scrolling
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
import Companytree from "./ui/Companytree";
export const metadata = {
  title: "ICONIKQ | Home",
  description:
    "Welcome to ICONIKQ, your trusted logistics partner for efficient and reliable solutions. Explore our services today!",
  keywords: "logistics, shipping, freight forwarding, ICONIKQ",
  openGraph: {
    title: "ICONIKQ | Home",
    description:
      "Discover ICONIKQ, providing top-notch logistics and transportation services tailored for your needs.",
    url: "https://www.iconikq.com",
    image: "https://www.iconikq.com/images/home-banner.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICONIKQ | Home",
    description:
      "Your logistics solutions start here at ICONIKQ. Learn more about our services.",
    image: "https://www.iconikq.com/images/home-banner.jpg",
  },
};

export default function Home() {
  return (
    <ReactLenis root>
      <VideoCarousel />
      <Services />
      <Autoscrollcompany />
      <Companytree />
      <Team />

      <Intro />

      <Gallery />
      <Testimonial />
      <BlogSection />
      <Mapsection />
      <ScrollToTopButton />
    </ReactLenis>
  );
}
