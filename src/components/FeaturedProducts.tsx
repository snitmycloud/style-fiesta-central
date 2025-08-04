import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop",
      title: "Designer Saree",
      price: "₹1,999",
      description: "Beautifully handwoven silk saree for special events."
    },
    {
      image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&h=400&fit=crop",
      title: "Baby Dress",
      price: "₹899",
      description: "Soft cotton outfit for your little ones."
    },
    {
      image: "https://images.unsplash.com/photo-1603252109360-909baeb8c3f4?w=400&h=400&fit=crop",
      title: "Men's Shirt",
      price: "₹1,299",
      description: "Classic slim-fit shirt for formal occasions."
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-foreground">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;