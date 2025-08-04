import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  image: string;
  title: string;
  description: string;
}

const CategoryCard = ({ image, title, description }: CategoryCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-card border-0 shadow-lg">
      <CardContent className="p-6 text-center">
        <div className="overflow-hidden rounded-lg mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-xl font-semibold font-poppins mb-3 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground font-poppins">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;