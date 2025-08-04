import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    {
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop",
      title: "Sarees",
      description: "Graceful, traditional, and modern styles to suit every occasion."
    },
    {
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
      title: "Kids Wear",
      description: "Comfortable and colorful clothing for boys and girls."
    },
    {
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop",
      title: "Men's Wear",
      description: "Smart, casual, and ethnic wear for every personality."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-foreground">
          Our Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              image={category.image}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;