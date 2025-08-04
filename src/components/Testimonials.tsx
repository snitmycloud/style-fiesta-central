import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 font-poppins text-foreground">
          What Our Customers Say
        </h2>
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-elegant">
          <CardContent className="p-8">
            <div className="text-lg italic text-foreground/80 font-poppins mb-6">
              "Absolutely loved the saree collection! Quality was top-notch and delivery was on time. Will definitely buy again."
            </div>
            <div className="font-semibold text-primary font-poppins">
              – Priya R, Hyderabad
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;