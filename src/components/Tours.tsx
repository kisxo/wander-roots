import Shillong from "@/assets/Shillong & Cherrapunji Escape.png";
import Nasima from "@/assets/narsima.png";
import tawangRoad from "@/assets/tawang_road.png";
import tourZiro from "@/assets/Ziro Valley.png";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";

const tours = [
  {
    title: "Narasimha Parvatha Trek",
    image: Nasima, // Replace with your image import
    duration: "2 days / 2 nights",
    groupSize: "Small group",
    price: "From ₹4,099"
  },
  {
    title: "Tawang Himalayan Road Trip",
    image: tawangRoad, // Replace with your image import
    duration: "7 days",
    groupSize: "Rider / SUV Tour",
    price: "From ₹22,499"
  },
  {
    title: "Ziro Valley Cultural Retreat",
    image: tourZiro, // Replace with your image import
    duration: "6 days",
    groupSize: "Private / Group",
    price: "From ₹18,999"
  }
];


const Tours = () => {
  return (
    <section id="tours" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Roads That Call Your Name, Start the Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our most loved adventures.
Handpicked routes. Authentic experiences. Memories for a lifetime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div 
              key={tour.title}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {tour.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{tour.price}</span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tours;
