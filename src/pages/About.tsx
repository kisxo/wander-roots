import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Users, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About NomadsOnWheels</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're passionate travelers dedicated to creating unforgettable adventures and 
                connecting people with the world's most amazing destinations.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At NomadsOnWheels, we believe that travel is more than just visiting new places—
                  it's about creating memories, experiencing cultures, and forming connections that 
                  last a lifetime.
                </p>
                <p className="text-lg text-muted-foreground">
                  We curate exceptional travel experiences that combine adventure, comfort, and 
                  authentic local insights to give you the trip of a lifetime.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-all">
                  <MapPin className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">50+</h3>
                  <p className="text-muted-foreground">Destinations</p>
                </div>
                <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-all">
                  <Users className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">10K+</h3>
                  <p className="text-muted-foreground">Happy Travelers</p>
                </div>
                <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-all">
                  <Award className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">15+</h3>
                  <p className="text-muted-foreground">Awards Won</p>
                </div>
                <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-all">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">98%</h3>
                  <p className="text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Authenticity</h3>
                <p className="text-muted-foreground">
                  We create genuine experiences that connect you with local cultures and communities.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  Every detail is carefully planned to ensure your journey exceeds expectations.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Community</h3>
                <p className="text-muted-foreground">
                  We believe in building connections and supporting local communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
