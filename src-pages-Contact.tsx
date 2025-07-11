
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically submit to your contact form handler
    toast({
      title: "Message Sent Successfully! 📧",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-salon-black pt-16">
      {/* Hero Section */}
      <section className="py-20 salon-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-salon-yellow">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Have questions about our services? Want to schedule a consultation? 
            We're here to help you look and feel your absolute best.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-salon-yellow" />
              <span>Quick Response</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <span>Expert Consultation</span>
            <div className="w-px h-4 bg-gray-600"></div>
            <span>Personalized Advice</span>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-salon-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-salon-gray border border-salon-yellow/20 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white mb-2 block">Full Name *</Label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-salon-black border-salon-yellow/20 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label className="text-white mb-2 block">Phone Number</Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-salon-black border-salon-yellow/20 text-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white mb-2 block">Email Address *</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-salon-black border-salon-yellow/20 text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label className="text-white mb-2 block">Subject</Label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="bg-salon-black border-salon-yellow/20 text-white"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <Label className="text-white mb-2 block">Message *</Label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-salon-black border-salon-yellow/20 text-white min-h-[120px]"
                    placeholder="Tell us about your beauty goals, questions, or special requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold py-6 text-lg hover-lift"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-salon-gray border border-salon-yellow/20 rounded-2xl p-8 hover-glow">
                <h3 className="text-2xl font-bold text-salon-yellow mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-salon-yellow p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-salon-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Visit Our Salon</h4>
                      <p className="text-gray-300">
                        123 Beauty Street, Fashion District<br />
                        Mumbai, Maharashtra - 400001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-salon-yellow p-3 rounded-full">
                      <Phone className="w-6 h-6 text-salon-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Call Us</h4>
                      <p className="text-gray-300">
                        Primary: +91 98765 43210<br />
                        Secondary: +91 87654 32109<br />
                        WhatsApp: +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-salon-yellow p-3 rounded-full">
                      <Mail className="w-6 h-6 text-salon-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Email Us</h4>
                      <p className="text-gray-300">
                        General: info@sachinsalon.com<br />
                        Bookings: book@sachinsalon.com<br />
                        Support: support@sachinsalon.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-salon-yellow p-3 rounded-full">
                      <Clock className="w-6 h-6 text-salon-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Opening Hours</h4>
                      <p className="text-gray-300">
                        Monday - Saturday: 9:00 AM - 9:00 PM<br />
                        Sunday: 10:00 AM - 7:00 PM<br />
                        <span className="text-salon-yellow">Closed on major holidays</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-salon-gray border border-salon-yellow/20 rounded-2xl p-8 hover-glow">
                <h3 className="text-xl font-bold text-white mb-4">Find Us</h3>
                <div className="aspect-video bg-gradient-to-br from-salon-yellow/20 to-salon-yellow/5 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-salon-yellow mx-auto mb-4" />
                    <p className="text-white font-semibold">Interactive Map</p>
                    <p className="text-gray-400 text-sm">Click to open in Google Maps</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black"
                  >
                    Google Maps
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-salon-gray border border-salon-yellow/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
                <div className="grid grid-cols-1 gap-4">
                  <Button className="bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold py-3 hover-lift">
                    Book Appointment Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black font-semibold py-3"
                  >
                    Schedule Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black font-semibold py-3"
                  >
                    View Membership Plans
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-salon-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked <span className="text-salon-yellow">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions about our services and policies.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book my appointment?",
                answer: "We recommend booking at least 24 hours in advance to ensure your preferred time slot. For bridal packages and special occasions, please book 2-3 weeks ahead."
              },
              {
                question: "What should I bring to my appointment?",
                answer: "Just bring yourself! We provide all necessary products and tools. If you have specific product preferences or allergies, please inform us when booking."
              },
              {
                question: "Do you offer home services?",
                answer: "Yes! Our Platinum members enjoy complimentary home services, and we also offer home services for special occasions like bridal makeup and party styling."
              },
              {
                question: "What's your cancellation policy?",
                answer: "You can cancel or reschedule your appointment up to 2 hours before your scheduled time without any charges. Late cancellations may incur a small fee."
              },
              {
                question: "Do you use organic/natural products?",
                answer: "We offer a range of organic and natural products upon request. Please mention your preference when booking, and we'll ensure suitable products are available."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-salon-black border border-salon-yellow/20 rounded-2xl p-6 hover-lift">
                <h3 className="text-lg font-semibold text-salon-yellow mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-salon-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need <span className="text-salon-yellow">Immediate</span> Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            For urgent bookings, last-minute changes, or immediate assistance, 
            call us directly or send a WhatsApp message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold px-8 py-4 text-lg hover-lift">
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 98765 43210
            </Button>
            <Button 
              variant="outline"
              className="border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black font-semibold px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
