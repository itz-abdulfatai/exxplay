import Hero from "../components/home/Hero";
import Header from "../components/Header";
import OurCustomWorkflow from "../components/home/OurCustomWorkflow";
import Services from "../components/home/Services";
import Portfolio from "../components/home/Portfolio";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      {/* header */}
      <Header />

      {/* hero */}
      <Hero />

      {/* custom workflow */}
      <OurCustomWorkflow />

      {/* our services */}
      <Services />

      {/* portfolio */}

      <Portfolio />

      {/* testimonial */}
      <Testimonials/>

      {/* contact */}
      <Contact/>

      {/* footer */}
    <Footer/>

    </div>
  );
}

export default Home;
