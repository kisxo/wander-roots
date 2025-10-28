import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
            "I've been on countless trips, but this one was different. 
            Everything was perfectly organized, and the local insights made it truly unique. 
            <span className="text-primary"> Can't wait for my next adventure!</span>"
          </blockquote>
          
          <div className="flex justify-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary" />
            </div>
            <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-secondary to-accent" />
            </div>
            <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-accent to-primary" />
            </div>
          </div>
          
          <p className="text-sm font-semibold">Rahul Sharma</p>
          <p className="text-sm text-muted-foreground">Travel Enthusiast</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
