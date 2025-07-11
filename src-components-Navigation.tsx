
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Membership", path: "/membership" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-salon-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-salon-yellow p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Scissors className="h-6 w-6 text-salon-black" />
            </div>
            <span className="text-2xl font-bold text-salon-yellow">Sachin Salon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-salon-yellow relative group ${
                    location.pathname === item.path
                      ? "text-salon-yellow"
                      : "text-white hover:text-salon-yellow"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-salon-yellow transition-all duration-300 group-hover:w-full"></span>
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-salon-yellow"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/booking">
              <Button className="bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-medium px-6 py-2 hover-glow">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-salon-yellow p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-salon-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-salon-yellow bg-salon-gray/20"
                    : "text-white hover:text-salon-yellow hover:bg-salon-gray/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/booking" className="block px-3 py-2">
              <Button className="w-full bg-salon-yellow text-salon-black hover:bg-salon-yellow/90 font-medium">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
