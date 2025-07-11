
import { Check, Crown, Star, Gift, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Membership = () => {
  const plans = [
    {
      name: "Silver",
      price: "₹2,999",
      originalPrice: "₹4,500",
      period: "per month",
      description: "Perfect for regular grooming and basic beauty needs",
      features: [
        "2 Hair Services per month",
        "1 Facial Treatment",
        "Basic Hair Styling",
        "10% Discount on additional services",
        "Priority booking during weekdays",
        "Complimentary hair wash"
      ],
      popular: false,
      savings: "Save ₹1,501"
    },
    {
      name: "Gold",
      price: "₹4,999",
      originalPrice: "₹8,000",
      period: "per month", 
      description: "Most popular choice for comprehensive beauty care",
      features: [
        "4 Hair Services per month",
        "2 Facial Treatments",
        "Advanced Hair Styling",
        "1 Spa Session (60 min)",
        "15% Discount on additional services",
        "Priority booking anytime",
        "Complimentary scalp treatment",
        "Birthday special discount (25%)"
      ],
      popular: true,
      savings: "Save ₹3,001"
    },
    {
      name: "Platinum",
      price: "₹7,999",
      originalPrice: "₹12,500",  
      period: "per month",
      description: "Ultimate luxury experience with premium services",
      features: [
        "Unlimited Hair Services",
        "4 Facial Treatments",
        "Premium Hair Styling & Treatments",
        "2 Spa Sessions (90 min each)",
        "Monthly Nail Service",
        "25% Discount on additional services",
        "VIP Priority booking",
        "Home service available",
        "Complimentary bridal trial",
        "Personal styling consultation"
      ],
      popular: false,
      savings: "Save ₹4,501"
    }
  ];

  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Perks",
      description: "Members get access to exclusive services, early booking for special events, and surprise gifts."
    },
    {
      icon: Shield,
      title: "Quality Guarantee", 
      description: "100% satisfaction guarantee on all services with free touch-ups if you're not completely happy."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Priority booking system with ability to reschedule appointments up to 2 hours before."
    }
  ];

  return (
    <div className="min-h-screen bg-salon-black pt-16">
      {/* Hero Section */}
      <section className="py-20 salon-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-salon-yellow/10 border border-salon-yellow/20 rounded-full px-4 py-2 mb-8">
            <Crown className="w-4 h-4 text-salon-yellow" />
            <span className="text-salon-yellow text-sm font-medium">Exclusive Membership Benefits</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-salon-yellow">VIP</span> Membership
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Unlock premium beauty services at unbeatable prices. Save more, look better, 
            and enjoy exclusive perks designed just for our valued members.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-salon-yellow fill-current" />
              <span>No Hidden Fees</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <span>Cancel Anytime</span>
            <div className="w-px h-4 bg-gray-600"></div>
            <span>30-Day Money Back</span>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-salon-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-salon-gray border-2 rounded-3xl p-8 transition-all duration-300 hover-lift ${
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

                {/* Savings Badge */}
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                  {plan.savings}
                </div>

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-gray-400 line-through text-lg mr-2">{plan.originalPrice}</span>
                    <span className="text-4xl font-bold text-salon-yellow">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="bg-salon-yellow p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-salon-black" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link to="/contact" className="block">
                  <Button 
                    className={`w-full font-semibold py-3 transition-all duration-300 ${
                      plan.popular
                        ? "bg-salon-yellow text-salon-black hover:bg-salon-yellow/90"
                        : "bg-transparent border-2 border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black"
                    }`}
                  >
                    Choose {plan.name} Plan
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-20 bg-salon-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-salon-yellow">Membership?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our membership program is designed to provide maximum value while ensuring 
              you always look and feel your best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-salon-black border border-salon-yellow/20 rounded-2xl p-8 text-center hover-lift hover-glow"
              >
                <div className="bg-salon-yellow p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-salon-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Comparison Section */}
          <div className="bg-salon-black border border-salon-yellow/20 rounded-3xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Member vs Non-Member <span className="text-salon-yellow">Savings</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-red-400 mb-4">Without Membership</h4>
                <div className="space-y-3 text-gray-300">
                  <p>Hair Cut + Styling: ₹1,200</p>
                  <p>Facial Treatment: ₹1,800</p>
                  <p>Spa Session: ₹2,500</p>
                  <p>Nail Service: ₹1,000</p>
                  <div className="border-t border-gray-600 pt-3 mt-4">
                    <p className="text-xl font-bold text-red-400">Monthly Total: ₹6,500+</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-salon-yellow mb-4">With Gold Membership</h4>
                <div className="space-y-3 text-gray-300">
                  <p>4 Hair Services: Included</p>
                  <p>2 Facial Treatments: Included</p>
                  <p>1 Spa Session: Included</p>
                  <p>Extra Services: 15% off</p>
                  <div className="border-t border-salon-yellow/30 pt-3 mt-4">
                    <p className="text-xl font-bold text-salon-yellow">Monthly Cost: ₹4,999</p>
                    <p className="text-green-400 font-semibold">You Save: ₹1,501+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-salon-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked <span className="text-salon-yellow">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my membership plan?",
                answer: "Yes, you can upgrade or downgrade your membership plan at any time. Changes will take effect from your next billing cycle."
              },
              {
                question: "What happens to unused services?",
                answer: "Unused services from your current month can be carried forward to the next month, but they don't accumulate beyond one month."
              },
              {
                question: "Is there a cancellation fee?",
                answer: "No cancellation fees! You can cancel your membership anytime with 30 days notice. We also offer a 30-day money-back guarantee."
              },
              {
                question: "Can I share my membership with family?",
                answer: "Memberships are individual and non-transferable. However, we offer family packages with special discounts for multiple memberships."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-salon-gray border border-salon-yellow/20 rounded-2xl p-6 hover-lift">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-salon-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our VIP Members?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your membership today and begin saving on premium beauty services 
            while enjoying exclusive perks and priority treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold px-8 py-4 text-lg hover-lift">
                Start Membership
              </Button>
            </Link>
            <Link to="/booking">
              <Button 
                variant="outline"
                className="border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black font-semibold px-8 py-4 text-lg"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
