import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import WhyChooseUs from "@/components/WhyChooseUs";
import Curators from "@/components/Curators";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { featuredPropertiesQuery } from "@/sanity/lib/queries";

export default async function Home() {
  // هنا بنطلب العقارات من سانيتي ونخزنها في متغير اسمه properties
  const properties = await client.fetch(featuredPropertiesQuery);

  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="properties">
          {/* هنا بنبعت الداتا للـ Component */}
          <FeaturedListings properties={properties} />
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