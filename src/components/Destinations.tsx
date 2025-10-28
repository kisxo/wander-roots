import destShillong from "@/assets/shillong.png";
import destTawang from "@/assets/tawang.png";
import destDVally from "@/assets/dvally.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const destinations = [
  {
    name: "Shillong",
    image: destShillong,
    description: "Scotland of the East,” waterfalls, music & cafés."
  },
  {
    name: "Tawang",
    image: destTawang,
    description: "Monasteries, snow-covered passes, serene mountain beauty."
  },
  {
    name: "Dzukou Valley",
    image: destDVally,
    description: "“Valley of Flowers,” alpine rivers, hot springs."
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your next favorite<br />place awaits
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-muted-foreground mb-6">
              Ride the Hidden Trails of Northeast India — Where Nature Whispers and Culture Speaks.
            </p>
            <Button variant="default" className="group">
              View All
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.name}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium uppercase tracking-wider">
                      {destination.name}
                    </span>
                  </div>
                  <p className="text-white/90 text-sm">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
