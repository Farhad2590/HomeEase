import ServiceSlider from "../Components/HomeComponents/ServiceSlider";
import HowItWorks from "../Components/HomeComponents/HowItWorks";
import ServiceCategories from "../Components/HomeComponents/ServiceCategories";
import FeaturedServices from "../Components/HomeComponents/FeaturedServices";
import Testimonials from "../Components/HomeComponents/Testimonials";
import CtaSection from "../Components/HomeComponents/CtaSection";


const Home = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen mt-5 mx-auto">
      <ServiceSlider />
      <HowItWorks />
      <ServiceCategories />
      <FeaturedServices />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default Home;
