
import { Users, Award, Clock, Sparkles } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied customers who trust our expertise"
    },
    {
      icon: Award,
      number: "10+",
      label: "Years Experience",
      description: "Decade of excellence in beauty and grooming"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Booking Available",
      description: "Book your appointment anytime, anywhere"
    },
    {
      icon: Sparkles,
      number: "50+",
      label: "Premium Services",
      description: "Comprehensive beauty and wellness treatments"
    }
  ];

  return (
    <section className="py-20 bg-salon-black border-t border-salon-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover-lift"
            >
              <div className="bg-salon-yellow/10 border border-salon-yellow/20 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-salon-yellow/20">
                <div className="bg-salon-yellow p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-salon-black" />
                </div>
                <h3 className="text-4xl font-bold text-salon-yellow mb-2">{stat.number}</h3>
                <h4 className="text-xl font-semibold text-white mb-3">{stat.label}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
