
import { Award, Users, Clock, Heart, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Sachin Kumar",
      role: "Founder & Master Stylist",
      image: "👨‍🎨",
      experience: "15+ years",
      specialties: ["Hair Styling", "Color Expert", "Bridal Makeover"]
    },
    {
      name: "Priya Mehta",
      role: "Senior Aesthetician",
      image: "👩‍⚕️",
      experience: "10+ years", 
      specialties: ["Skin Care", "Anti-Aging", "Facial Treatments"]
    },
    {
      name: "Rahul Sharma",
      role: "Spa Therapist",
      image: "👨‍⚕️",
      experience: "8+ years",
      specialties: ["Massage Therapy", "Aromatherapy", "Wellness"]
    },
    {
      name: "Neha Singh",
      role: "Nail Artist",
      image: "👩‍🎨", 
      experience: "6+ years",
      specialties: ["Nail Art", "Gel Extensions", "Creative Designs"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer Care",
      description: "Every client receives personalized attention and premium care tailored to their unique needs and preferences."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in all our services, using only premium products and advanced techniques."
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Our unisex salon welcomes everyone, creating a comfortable and inclusive environment for all our clients."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of beauty trends and continuously update our skills to offer the latest and most effective treatments."
    }
  ];

  return (
    <div className="min-h-screen bg-salon-black pt-16">
      {/* Hero Section */}
      <section className="py-20 salon-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-salon-yellow">Sachin Salon</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Founded with a vision to redefine beauty and wellness, Sachin Salon has been setting 
                new standards in the industry for over a decade. We believe that everyone deserves to 
                look and feel their absolute best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button className="bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold px-8 py-4 hover-lift">
                    Book Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline"
                    className="border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black font-semibold px-8 py-4"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-salon-yellow/10 border-2 border-salon-yellow/20 rounded-3xl p-8 hover-glow">
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <h3 className="text-2xl font-bold text-salon-yellow mb-4">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To provide exceptional beauty and wellness services that enhance our clients' 
                    natural beauty while delivering an unparalleled luxury experience in a 
                    welcoming, inclusive environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-salon-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-salon-black border border-salon-yellow/20 rounded-3xl p-8 hover-lift">
              <div className="flex items-center space-x-4 mb-6">
                <Eye className="w-8 h-8 text-salon-yellow" />
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                What started as a small neighborhood salon has grown into Mumbai's most trusted 
                destination for premium beauty and wellness services. Our founder, Sachin Kumar, 
                began this journey with a simple belief: that exceptional beauty services should 
                be accessible to all, regardless of gender or background.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Over the years, we've built a reputation for excellence, innovation, and 
                uncompromising quality. Our team of skilled professionals is passionate about 
                their craft and dedicated to making every client feel special.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-salon-yellow/10 rounded-xl">
                  <Clock className="w-8 h-8 text-salon-yellow mx-auto mb-2" />
                  <p className="text-salon-yellow font-bold text-2xl">10+</p>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-salon-yellow/10 rounded-xl">
                  <Users className="w-8 h-8 text-salon-yellow mx-auto mb-2" />
                  <p className="text-salon-yellow font-bold text-2xl">500+</p>
                  <p className="text-gray-400 text-sm">Happy Clients</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-salon-yellow/10 border border-salon-yellow/20 rounded-2xl p-6 hover-lift">
                <h3 className="text-xl font-bold text-salon-yellow mb-3">Premium Quality</h3>
                <p className="text-gray-300">We use only the finest products from renowned international brands to ensure exceptional results.</p>
              </div>
              <div className="bg-salon-yellow/10 border border-salon-yellow/20 rounded-2xl p-6 hover-lift">
                <h3 className="text-xl font-bold text-salon-yellow mb-3">Expert Team</h3>
                <p className="text-gray-300">Our stylists and therapists are certified professionals with years of experience and continuous training.</p>
              </div>
              <div className="bg-salon-yellow/10 border border-salon-yellow/20 rounded-2xl p-6 hover-lift">
                <h3 className="text-xl font-bold text-salon-yellow mb-3">Modern Facilities</h3>
                <p className="text-gray-300">State-of-the-art equipment and hygienically maintained spaces ensure comfort and safety.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-salon-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-salon-yellow">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and help us deliver exceptional 
              experiences to our valued clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-salon-gray border border-salon-yellow/20 rounded-2xl p-8 text-center hover-lift hover-glow"
              >
                <div className="bg-salon-yellow p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-salon-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-salon-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-salon-yellow">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our passionate team of professionals is dedicated to bringing out your best. 
              Each member brings unique skills and expertise to serve you better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-salon-black border border-salon-yellow/20 rounded-2xl p-8 text-center hover-lift hover-glow"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-salon-yellow font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.experience}</p>
                <div className="space-y-2">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <span 
                      key={specialtyIndex}
                      className="inline-block bg-salon-yellow/10 text-salon-yellow text-xs px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-salon-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the Sachin Salon Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our family of satisfied clients and discover why we're Mumbai's most trusted 
            salon for premium beauty and wellness services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold px-8 py-4 text-lg hover-lift">
                Book Your Visit
              </Button>
            </Link>
            <Link to="/membership">
              <Button 
                variant="outline"
                className="border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black font-semibold px-8 py-4 text-lg"
              >
                Explore Memberships
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
