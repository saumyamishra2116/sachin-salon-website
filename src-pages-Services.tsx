
import { Scissors, Sparkles, Palette, Waves, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      icon: Scissors,
      title: "Hair Services",
      description: "Professional styling and treatments for all hair types",
      services: [
        { name: "Precision Hair Cut", price: "₹500 - ₹1200", duration: "45 min" },
        { name: "Hair Coloring", price: "₹1500 - ₹3500", duration: "2-3 hours" },
        { name: "Hair Styling", price: "₹800 - ₹1500", duration: "30-60 min" },
        { name: "Hair Treatment", price: "₹1200 - ₹2500", duration: "60-90 min" },
        { name: "Keratin Treatment", price: "₹3000 - ₹6000", duration: "3-4 hours" },
        { name: "Hair Extensions", price: "₹2000 - ₹8000", duration: "2-3 hours" }
      ]
    },
    {
      icon: Sparkles,
      title: "Skin Care",
      description: "Advanced facial treatments for radiant, healthy skin",
      services: [
        { name: "Classic Facial", price: "₹800 - ₹1500", duration: "60 min" },
        { name: "Anti-Aging Treatment", price: "₹2000 - ₹4000", duration: "90 min" },
        { name: "Acne Treatment", price: "₹1200 - ₹2500", duration: "75 min" },
        { name: "Hydra Facial", price: "₹2500 - ₹4500", duration: "75 min" },
        { name: "Chemical Peel", price: "₹1800 - ₹3500", duration: "45 min" },
        { name: "Micro-needling", price: "₹3000 - ₹5000", duration: "90 min" }
      ]
    },
    {
      icon: Palette,
      title: "Nail Services",
      description: "Creative nail art and premium manicure-pedicure",
      services: [
        { name: "Classic Manicure", price: "₹600 - ₹1000", duration: "45 min" },
        { name: "Gel Manicure", price: "₹1000 - ₹1800", duration: "60 min" },
        { name: "Pedicure", price: "₹800 - ₹1500", duration: "60 min" },
        { name: "Nail Art", price: "₹500 - ₹2000", duration: "30-90 min" },
        { name: "Nail Extensions", price: "₹1500 - ₹3000", duration: "90 min" },
        { name: "Nail Repair", price: "₹300 - ₹800", duration: "30 min" }
      ]
    },
    {
      icon: Waves,
      title: "Spa & Wellness",
      description: "Relaxing treatments for mind, body, and soul",
      services: [
        { name: "Full Body Massage", price: "₹2000 - ₹4000", duration: "90 min" },
        { name: "Aromatherapy", price: "₹1500 - ₹2800", duration: "75 min" },
        { name: "Hot Stone Massage", price: "₹2500 - ₹4500", duration: "90 min" },
        { name: "Body Scrub", price: "₹1800 - ₹3200", duration: "60 min" },
        { name: "Body Wrap", price: "₹2200 - ₹3800", duration: "75 min" },
        { name: "Reflexology", price: "₹1200 - ₹2200", duration: "45 min" }
      ]
    }
  ];

  const specialServices = [
    {
      icon: Heart,
      title: "Bridal Packages",
      description: "Complete bridal makeover packages for your special day",
      price: "Starting from ₹15,000"
    },
    {
      icon: Zap,
      title: "Express Services",
      description: "Quick touch-ups and styling for busy schedules",
      price: "Starting from ₹500"
    }
  ];

  return (
    <div className="min-h-screen bg-salon-black pt-16">
      {/* Hero Section */}
      <section className="py-20 salon-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Premium <span className="text-salon-yellow">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of professional beauty and wellness services, 
            crafted to enhance your natural beauty and boost your confidence.
          </p>
          <Link to="/booking">
            <Button className="bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold px-8 py-4 text-lg hover-lift">
              Book Your Service
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="mb-20">
              <div className="text-center mb-12">
                <div className="bg-salon-yellow p-4 rounded-full w-20 h-20 mx-auto mb-6">
                  <category.icon className="w-12 h-12 text-salon-black" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                <p className="text-xl text-gray-300">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="bg-salon-gray border border-salon-yellow/20 rounded-2xl p-6 hover-lift hover-glow"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-salon-yellow font-semibold">{service.price}</span>
                      <span className="text-gray-400 text-sm">{service.duration}</span>
                    </div>
                    <Link to="/booking">
                      <Button className="w-full bg-transparent border border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-salon-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Special <span className="text-salon-yellow">Packages</span>
            </h2>
            <p className="text-xl text-gray-300">
              Exclusive packages designed for special occasions and busy lifestyles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialServices.map((service, index) => (
              <div 
                key={index}
                className="bg-salon-black border border-salon-yellow/20 rounded-3xl p-8 text-center hover-lift hover-glow"
              >
                <div className="bg-salon-yellow p-6 rounded-full w-24 h-24 mx-auto mb-6">
                  <service.icon className="w-12 h-12 text-salon-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <p className="text-salon-yellow font-bold text-xl mb-6">{service.price}</p>
                <Link to="/contact">
                  <Button className="bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold px-8 py-3">
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-salon-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your appointment today and experience the luxury of Sachin Salon's premium services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold px-8 py-4 text-lg hover-lift">
                Book Appointment
              </Button>
            </Link>
            <Link to="/membership">
              <Button 
                variant="outline"
                className="border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black font-semibold px-8 py-4 text-lg"
              >
                View Membership Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
