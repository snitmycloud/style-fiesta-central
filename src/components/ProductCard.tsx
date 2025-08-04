import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

const ProductCard = ({ image, title, price, description }: ProductCardProps) => {
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
        <h3 className="text-xl font-semibold font-poppins mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-2xl font-bold text-primary mb-2 font-poppins">
          {price}
        </p>
        <p className="text-muted-foreground font-poppins mb-4">
          {description}
        </p>
        <Button variant="elegant" className="w-full font-poppins">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;