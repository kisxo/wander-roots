import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin } from "lucide-react";
import tourTawang from "@/assets/tawang.png";
import tourShillong from "@/assets/Shillong & Cherrapunji Escape.png";
import tourZiro from "@/assets/Ziro Valley.png";
import tourKaziranga from "@/assets/kaziranga.png";
import tourMajuli from "@/assets/majuli.png";
import tourDzukou from "@/assets/dvally.png";


const tours = [
  {
    id: 1,
    name: "Tawang Himalayan Expedition",
    image: tourTawang,
    destination: "Tawang, Arunachal Pradesh",
    duration: "7 Days",
    groupSize: "8-12",
    price: "₹22,499",
    category: "Adventure",
    description: "Ride through high-altitude passes, monasteries, prayer flags and snow-laden landscapes."
  },
  {
    id: 2,
    name: "Shillong & Cherrapunji Retreat",
    image: tourShillong,
    destination: "Meghalaya",
    duration: "5 Days",
    groupSize: "10-15",
    price: "₹12,999",
    category: "Relaxation",
    description: "Waterfalls, clouds, cafés, living root bridges and peaceful hill vibes."
  },
  {
    id: 3,
    name: "Ziro Valley Cultural Journey",
    image: tourZiro,
    destination: "Ziro, Arunachal Pradesh",
    duration: "6 Days",
    groupSize: "6-10",
    price: "₹18,999",
    category: "Culture",
    description: "Experience Apatani tribal heritage, pine forests, music, and slow-living beauty."
  },
  {
    id: 4,
    name: "Kaziranga Jungle Safari",
    image: tourKaziranga,
    destination: "Kaziranga, Assam",
    duration: "3 Days",
    groupSize: "8-12",
    price: "₹9,499",
    category: "Wildlife",
    description: "Spot the one-horned rhino, elephants and exotic birds in a UNESCO wildlife reserve."
  },
  {
    id: 5,
    name: "Majuli Heritage Island Tour",
    image: tourMajuli,
    destination: "Majuli, Assam",
    duration: "4 Days",
    groupSize: "12-16",
    price: "₹10,499",
    category: "History",
    description: "Discover Satras, river island culture, traditional arts and serene landscapes."
  },
  {
    id: 6,
    name: "Dzukou Valley Trek & Cloud Walk",
    image: tourDzukou,
    destination: "Nagaland",
    duration: "6 Days",
    groupSize: "6-8",
    price: "₹14,999",
    category: "Nature",
    description: "Trek across grass-covered valleys, floating clouds and breathtaking ridgelines."
  }
];

const ToursPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Tours</h1>
              <p className="text-xl text-muted-foreground">
                Carefully curated experiences designed to create unforgettable memories. 
                Each tour is led by expert guides who know these destinations inside out.
              </p>
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <Card key={tour.id} className="group overflow-hidden flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-background/90 text-foreground border-0">
                      {tour.category}
                    </Badge>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{tour.name}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{tour.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{tour.destination}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{tour.groupSize} people</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-bold text-primary">{tour.price}</span>
                      <Button>Book Now</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ToursPage;
