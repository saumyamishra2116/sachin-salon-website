import { ArrowRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 salon-gradient"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-salon-yellow rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-salon-yellow rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-salon-yellow rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-salon-yellow rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Premium badge */}
          <div className="inline-flex items-center space-x-2 bg-salon-yellow/10 border border-salon-yellow/20 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-salon-yellow fill-current" />
            <span className="text-salon-yellow text-sm font-medium">Premium Unisex Salon Experience</span>
            <Sparkles className="w-4 h-4 text-salon-yellow" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block text-salon-yellow">Style Today</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience luxury at Sachin Salon – where cutting-edge techniques meet 
            premium care for both men and women. Your journey to exceptional style starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/membership" className="animate-scale-in">
              <Button 
                size="lg" 
                className="bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold px-8 py-4 text-lg hover-lift group"
              >
                Join Our Membership
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/booking" className="animate-scale-in delay-200">
              <Button 
                variant="outline" 
                size="lg"
                className="border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black font-semibold px-8 py-4 text-lg hover-lift"
              >
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 animate-slide-in-right">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-salon-yellow fill-current" />
                ))}
              </div>
              <span className="text-sm">5.0 Rating</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <span className="text-sm">500+ Happy Clients</span>
            <div className="w-px h-4 bg-gray-600"></div>
            <span className="text-sm">10+ Years Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-salon-yellow rounded-full flex justify-center">
          <div className="w-1 h-3 bg-salon-yellow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
