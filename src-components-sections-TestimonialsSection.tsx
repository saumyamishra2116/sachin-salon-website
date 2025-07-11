
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Fashion Designer",
      image: "👩‍💼",
      rating: 5,
      text: "Sachin Salon has completely transformed my look! The team's expertise in hair styling and their attention to detail is unmatched. I've been a Gold member for 2 years and couldn't be happier."
    },
    {
      name: "Raj Patel",
      role: "Business Executive", 
      image: "👨‍💼",
      rating: 5,
      text: "As a busy professional, the Platinum membership is perfect for me. The home service option and priority booking have made maintaining my grooming routine so much easier. Highly recommended!"
    },
    {
      name: "Anita Kumar",
      role: "Teacher",
      image: "👩‍🏫",
      rating: 5,
      text: "The facial treatments here are amazing! My skin has never looked better. The staff is so professional and the ambiance is very relaxing. The Silver membership gives great value for money."
    },
    {
      name: "Vikram Singh",
      role: "Photographer",
      image: "👨‍🎨",
      rating: 5,
      text: "Being in the creative field, I need to look my best always. Sachin Salon understands this perfectly. Their styling services are top-notch and they always stay updated with the latest trends."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-salon-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-salon-yellow">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say 
            about their experience at Sachin Salon.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-salon-black border border-salon-yellow/20 rounded-3xl p-8 md:p-12 hover-glow">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="bg-salon-yellow p-3 rounded-full w-16 h-16 mx-auto mb-8">
                <Quote className="w-10 h-10 text-salon-black" />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-salon-yellow fill-current" />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">{testimonials[currentIndex].image}</div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-salon-yellow">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-salon-yellow" 
                    : "bg-salon-yellow/30 hover:bg-salon-yellow/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
