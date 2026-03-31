import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import WhyChooseUs from "@/components/WhyChooseUs";
import Curators from "@/components/Curators";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="properties">
          <FeaturedListings />
        </section>
        <section id="about">
          <WhyChooseUs />
        </section>
        <Curators />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
