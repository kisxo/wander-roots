import { Button } from "@/components/ui/button";
import heroImage from "@/assets/green.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          The road is calling.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Where the journey matters more than the destination.
        </p>
        <Link to={"/destinations"} className="group bg-orange-500 py-3 px-6 flex w-fit mx-auto text-neutral-50 items-center rounded-xl">
          Read more
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
