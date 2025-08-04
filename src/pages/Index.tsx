import Header from "@/components/Header";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
