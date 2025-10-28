import featureNature from "@/assets/nature.webp";
import featureAdventure from "@/assets/partner.webp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Features = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            About us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What's so special<br />about this?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Discover what sets us apart in creating unforgettable travel experiences. 
            We blend local expertise with unmatched customer care to make every journey extraordinary.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <img 
                  src={featureNature} 
                  alt="Immersive nature experiences" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-background text-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  01
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">We don't just plan vacations</h3>
              <p className="text-muted-foreground">
                We craft journeys tailored to your dreams, ensuring every moment is an unforgettable adventure you'll cherish forever.
              </p>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <img 
                  src={featureAdventure} 
                  alt="Trusted local partners" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-background text-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  02
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">With our trusted local partners</h3>
              <p className="text-muted-foreground">
                You'll discover hidden gems and unique experiences that most travelers never get to see. Real adventures await.
              </p>
            </div>
          </div>
          
          <Button variant="default" size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
