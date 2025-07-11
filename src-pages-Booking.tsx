
import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: ""
  });

  const services = [
    { id: "hair-cut", name: "Hair Cut & Styling", duration: "60 min", price: "₹800-1500" },
    { id: "hair-color", name: "Hair Coloring", duration: "2-3 hours", price: "₹1500-3500" },
    { id: "facial", name: "Facial Treatment", duration: "75 min", price: "₹1200-2500" },
    { id: "spa", name: "Spa Session", duration: "90 min", price: "₹2000-4000" },
    { id: "manicure", name: "Manicure & Nail Art", duration: "60 min", price: "₹800-1800" },
    { id: "pedicure", name: "Pedicure", duration: "75 min", price: "₹1000-1800" },
    { id: "bridal", name: "Bridal Package", duration: "4-5 hours", price: "₹15000+" },
    { id: "consultation", name: "Free Consultation", duration: "30 min", price: "Free" }
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !selectedDate || !selectedTime || !formData.name || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to book your appointment.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically submit to your booking system
    toast({
      title: "Booking Confirmed! 🎉",
      description: `Your appointment has been scheduled for ${selectedDate} at ${selectedTime}. We'll send you a confirmation shortly.`,
    });

    // Reset form
    setSelectedService("");
    setSelectedDate("");
    setSelectedTime("");
    setFormData({ name: "", phone: "", email: "", notes: "" });
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen bg-salon-black pt-16">
      {/* Hero Section */}
      <section className="py-20 salon-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-salon-yellow p-4 rounded-full w-20 h-20 mx-auto mb-6">
            <Scissors className="w-12 h-12 text-salon-black" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Book Your <span className="text-salon-yellow">Appointment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Schedule your premium beauty experience at Sachin Salon. Choose your preferred 
            service, date, and time for a personalized consultation and treatment.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-salon-yellow" />
              <span>Easy Online Booking</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <span>Instant Confirmation</span>
            <div className="w-px h-4 bg-gray-600"></div>
            <span>Free Rescheduling</span>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-salon-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-salon-gray border border-salon-yellow/20 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Schedule Your Visit</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div>
                  <Label className="text-white mb-2 block">Select Service *</Label>
                  <Select onValueChange={setSelectedService}>
                    <SelectTrigger className="bg-salon-black border-salon-yellow/20 text-white">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          <div className="flex justify-between items-center w-full">
                            <span>{service.name}</span>
                            <span className="text-salon-yellow ml-4">{service.price}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Selection */}
                <div>
                  <Label className="text-white mb-2 block">Preferred Date *</Label>
                  <Input
                    type="date"
                    min={getTomorrowDate()}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-salon-black border-salon-yellow/20 text-white"
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <Label className="text-white mb-2 block">Preferred Time *</Label>
                  <Select onValueChange={setSelectedTime}>
                    <SelectTrigger className="bg-salon-black border-salon-yellow/20 text-white">
                      <SelectValue placeholder="Choose time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white mb-2 block">Full Name *</Label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-salon-black border-salon-yellow/20 text-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label className="text-white mb-2 block">Phone Number *</Label>
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
                  <Label className="text-white mb-2 block">Email Address</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-salon-black border-salon-yellow/20 text-white"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Special Notes */}
                <div>
                  <Label className="text-white mb-2 block">Special Requests</Label>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    className="bg-salon-black border-salon-yellow/20 text-white min-h-[100px]"
                    placeholder="Any specific requirements or preferences..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold py-6 text-lg hover-lift"
                >
                  Confirm Booking
                </Button>
              </form>
            </div>

            {/* Booking Info */}
            <div className="space-y-8">
              {/* Selected Service Info */}
              {selectedService && (
                <div className="bg-salon-gray border border-salon-yellow/20 rounded-2xl p-6 hover-glow">
                  <h3 className="text-xl font-bold text-salon-yellow mb-4">Selected Service</h3>
                  {services.find(s => s.id === selectedService) && (
                    <div className="space-y-3">
                      <p className="text-white font-semibold">
                        {services.find(s => s.id === selectedService)?.name}
                      </p>
                      <div className="flex justify-between text-gray-300">
                        <span>Duration:</span>
                        <span>{services.find(s => s.id === selectedService)?.duration}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Price:</span>
                        <span className="text-salon-yellow font-semibold">
                          {services.find(s => s.id === selectedService)?.price}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Contact Information */}
              <div className="bg-salon-gray border border-salon-yellow/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-salon-yellow" />
                    <span className="text-gray-300">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-salon-yellow" />
                    <span className="text-gray-300">info@sachinsalon.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-salon-yellow mt-1" />
                    <div className="text-gray-300">
                      <p>Mon - Sat: 9:00 AM - 9:00 PM</p>
                      <p>Sunday: 10:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Policies */}
              <div className="bg-salon-gray border border-salon-yellow/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Booking Policies</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-salon-yellow">•</span>
                    <span>24-hour advance booking required</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-salon-yellow">•</span>
                    <span>Free cancellation up to 2 hours before appointment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-salon-yellow">•</span>
                    <span>Late arrivals may result in shortened service time</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-salon-yellow">•</span>
                    <span>Payment accepted: Cash, Card, UPI, Digital Wallets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Booking */}
      <section className="py-20 bg-salon-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need an <span className="text-salon-yellow">Urgent Appointment?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            For same-day bookings or urgent requests, please call us directly. 
            We'll do our best to accommodate your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-semibold px-8 py-4 text-lg hover-lift">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 98765 43210
            </Button>
            <Button 
              variant="outline"
              className="border-salon-yellow text-salon-yellow hover:bg-salon-yellow hover:text-salon-black font-semibold px-8 py-4 text-lg"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
