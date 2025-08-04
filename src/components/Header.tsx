import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-hero py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img 
            src="/lovable-uploads/2da7257a-c1a2-4213-b8c9-d946b79b11b6.png" 
            alt="Fashion Fiesta Logo" 
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-5xl md:text-6xl font-bold font-poppins bg-gradient-brand bg-clip-text text-transparent">
            Fashion Fiesta
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-poppins font-medium">
          Trendy Sarees, Kids Wear & Men's Clothing – All in One Place
        </p>
        <Button variant="hero" size="xl" className="font-poppins">
          Shop Now
        </Button>
      </div>
    </header>
  );
};

export default Header;