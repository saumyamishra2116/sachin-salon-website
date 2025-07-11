
import { Check, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const MembershipPreview = () => {
  const plans = [
    {
      name: "Silver",
      price: "₹2,999",
      period: "per month",
      description: "Perfect for regular grooming needs",
      features: [
        "2 Hair Services",
        "1 Facial Treatment",
        "Basic Styling",
        "10% Member Discount"
      ],
      popular: false
    },
    {
      name: "Gold",
      price: "₹4,999",
      period: "per month", 
      description: "Most popular choice for comprehensive care",
      features: [
        "4 Hair Services",
        "2 Facial Treatments",
        "Advanced Styling",
        "1 Spa Session",
        "15% Member Discount",
        "Priority Booking"
      ],
      popular: true
    },
    {
      name: "Platinum",
      price: "₹7,999",
      period: "per month",
      description: "Ultimate luxury experience with premium services",
      features: [
        "Unlimited Hair Services",
        "4 Facial Treatments",
        "Premium Styling",
        "2 Spa Sessions",
        "Nail Services",
        "25% Member Discount",
        "VIP Treatment",
        "Home Service"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-salon-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Exclusive <span className="text-salon-yellow">Membership Plans</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our carefully crafted membership plans and enjoy premium services 
            at unbeatable prices with exclusive member benefits.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-salon-gray border-2 rounded-3xl p-8 hover-lift transition-all duration-300 ${
                plan.popular 
                  ? "border-salon-yellow shadow-2xl transform scale-105 hover-glow" 
                  : "border-salon-yellow/20 hover:border-salon-yellow/40"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-salon-yellow text-salon-black px-6 py-2 rounded-full font-semibold text-sm flex items-center space-x-1">
                    <Crown className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-salon-yellow">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-300 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="bg-salon-yellow p-1 rounded-full mr-3">
                      <Check className="w-3 h-3 text-salon-black" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link to="/membership" className="block">
                <Button 
                  className={`w-full font-semibold py-3 transition-all duration-300 ${
                    plan.popular
                      ? "bg-salon-yellow text-salon-black hover:bg-salon-yellow/90"
                      : "bg-transparent border-2 border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black"
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-salon-yellow/10 border border-salon-yellow/20 rounded-2xl p-8">
          <div className="flex justify-center mb-4">
            <Star className="w-8 h-8 text-salon-yellow fill-current" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Not sure which plan is right for you?
          </h3>
          <p className="text-gray-300 mb-6">
            Schedule a consultation with our experts to find the perfect membership plan 
            tailored to your beauty and wellness needs.
          </p>
          <Link to="/contact">
            <Button 
              variant="outline"
              className="border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black font-semibold px-8 py-3"
            >
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
