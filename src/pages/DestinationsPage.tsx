import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import shillongImg from "@/assets/shillong.png";
import cherrapunjiImg from "@/assets/Shillong & Cherrapunji Escape.png";
import tawangImg from "@/assets/tawang.png";
import kazirangaImg from "@/assets/kaziranga.png";
import ziroImg from  "@/assets/Ziro Valley.png";
import dawkiImg from "@/assets/dauki.png";



const destinations = [
  {
    id: 1,
    name: "Shillong",
    image: shillongImg,
    description: "The Scotland of the East — cafés, music & misty hills",
    tours: 8,
    price: "From ₹9,499"
  },
  {
    id: 2,
    name: "Cherrapunji (Sohra)",
    image: cherrapunjiImg,
    description: "Living root bridges, waterfalls & cloud valleys",
    tours: 6,
    price: "From ₹10,999"
  },
  {
    id: 3,
    name: "Tawang",
    image: tawangImg,
    description: "Monasteries, snow-clad passes & Himalayan serenity",
    tours: 7,
    price: "From ₹18,999"
  },
  {
    id: 4,
    name: "Kaziranga",
    image: kazirangaImg,
    description: "Home of the one-horned rhino — safaris & nature trails",
    tours: 5,
    price: "From ₹11,499"
  },
  {
    id: 5,
    name: "Ziro Valley",
    image: ziroImg,
    description: "Pine forests, Apatani culture & slow-travel calm",
    tours: 4,
    price: "From ₹16,999"
  },
  {
    id: 6,
    name: "Dawki & Mawlynnong",
    image: dawkiImg,
    description: "Crystal-clear rivers & Asia’s cleanest village experience",
    tours: 9,
    price: "From ₹8,999"
  }
];

const DestinationsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore Destinations</h1>
              <p className="text-xl text-muted-foreground">
                Discover breathtaking locations around the globe. From ancient wonders to modern marvels, 
                find your next adventure.
              </p>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <Card key={destination.id} className="group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                      <p className="text-sm opacity-90">{destination.tours} Tours Available</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-primary">{destination.price}</span>
                      <Button variant="outline" size="sm">View Tours</Button>
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

export default DestinationsPage;
