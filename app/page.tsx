import Features from "./_screen/Features/Features";
import Hero from "./_screen/Hero/Hero";
import Pricing from "./_screen/Pricing/Pricing";
import Solution from "./_screen/Solution/Solution";
import Interface from "./_screen/Interface/Interface";
import Testimonial from "./_screen/Testimonial/Testimonial";
import Navbar from "./_screen/Navbar/Navbar";
import Footer from "./_screen/Footer/Footer";
import Faq from "./_screen/Faq/Faq";
export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <Features />
      <Interface />
      <Solution />
      <Testimonial />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
