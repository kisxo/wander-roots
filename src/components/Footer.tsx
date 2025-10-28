import { Button } from "@/components/ui/button";
import { Mountain, Facebook, Instagram, Twitter, Mail } from "lucide-react";
 import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-md">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pack your bags, your<br />adventure awaits!
            </h3>
          </div>
          <div>
            <Button variant="hero" size="lg">
              Start Your Journey
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Hot Deals</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Tour Packages</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Work with Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Travel Agents & Experts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/nomadsonwheels_now/" className="text-background/80 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
             
<img src={logo} alt=""className="h-8 w-8 text-primary rounded"  />
              <span className="font-bold">NomadsOnWheels</span>
            </div>
            <p className="text-sm text-background/60">
              © 2025 NomadsOnWheels. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
