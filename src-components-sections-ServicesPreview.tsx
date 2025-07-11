
import { Scissors, Sparkles, Palette, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ServicesPreview = () => {
  const services = [
    {
      icon: Scissors,
      title: "Hair Styling",
      description: "Professional cuts, coloring, and styling for all hair types. From classic to contemporary looks.",
      features: ["Precision Cuts", "Color Correction", "Styling", "Treatments"]
    },
    {
      icon: Sparkles,
      title: "Skin Care",
      description: "Advanced facial treatments and skin rejuvenation therapies for glowing, healthy skin.",
      features: ["Deep Cleansing", "Anti-Aging", "Hydration", "Acne Treatment"]
    },
    {
      icon: Palette,
      title: "Nail Art",
      description: "Creative nail designs and premium manicure-pedicure services with luxury products.",
      features: ["Gel Polish", "Nail Art", "Manicure", "Pedicure"]
    },
    {
      icon: Waves,
      title: "Spa Treatments",
      description: "Relaxing spa experiences including massages, body treatments, and wellness therapies.",
      features: ["Aromatherapy", "Body Massage", "Relaxation", "Wellness"]
    }
  ];

  return (
    <section className="py-20 bg-salon-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Premium <span className="text-salon-yellow">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of beauty and wellness services, 
            designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-salon-black border border-salon-yellow/20 rounded-2xl p-8 hover-lift group hover-glow"
            >
              <div className="bg-salon-yellow p-4 rounded-full w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-salon-black" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-salon-yellow rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button 
              size="lg"
              className="bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold px-8 py-4 text-lg hover-lift"
            >
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
