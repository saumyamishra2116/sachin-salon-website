
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Star } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Work" },
    { id: "hair", name: "Hair Styling" },
    { id: "skin", name: "Skin Care" },
    { id: "nails", name: "Nail Art" },
    { id: "bridal", name: "Bridal" }
  ];

  const galleryImages = [
    {
      id: 1,
      category: "hair",
      title: "Modern Bob Cut",
      description: "Chic and sophisticated bob cut with subtle highlights",
      image: "🎨",
      beforeAfter: true
    },
    {
      id: 2,
      category: "skin",
      title: "Glowing Facial Result",
      description: "Hydrating facial treatment showing radiant skin transformation",
      image: "✨",
      beforeAfter: true
    },
    {
      id: 3,
      category: "hair",
      title: "Balayage Highlights",
      description: "Natural-looking balayage technique creating beautiful dimension",
      image: "🌟",
      beforeAfter: false
    },
    {
      id: 4,
      category: "nails",
      title: "Artistic Nail Design",
      description: "Hand-painted floral nail art with gel finish",
      image: "💅",
      beforeAfter: false
    },
    {
      id: 5,
      category: "bridal",
      title: "Bridal Makeover",
      description: "Complete bridal transformation with traditional styling",
      image: "👰",
      beforeAfter: true
    },
    {
      id: 6,
      category: "hair",
      title: "Color Correction",
      description: "Expert color correction from damaged to healthy hair",
      image: "🎭",
      beforeAfter: true
    },
    {
      id: 7,
      category: "skin",
      title: "Anti-Aging Treatment",
      description: "Advanced anti-aging facial showing visible results",
      image: "🧴",
      beforeAfter: true
    },
    {
      id: 8,
      category: "nails",
      title: "French Manicure",
      description: "Classic French manicure with modern twist",
      image: "💎",
      beforeAfter: false
    },
    {
      id: 9,
      category: "hair",
      title: "Curly Hair Styling",
      description: "Natural curl enhancement and definition treatment",
      image: "🌀",
      beforeAfter: false
    },
    {
      id: 10,
      category: "bridal",
      title: "Engagement Look",
      description: "Elegant engagement party makeup and hairstyling",
      image: "💐",
      beforeAfter: false
    },
    {
      id: 11,
      category: "skin",
      title: "Acne Treatment Result",
      description: "Effective acne treatment showing clear skin transformation",
      image: "🌿",
      beforeAfter: true
    },
    {
      id: 12,
      category: "hair",
      title: "Keratin Treatment",
      description: "Smooth, frizz-free hair after keratin treatment",
      image: "💫",
      beforeAfter: true
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-salon-black pt-16">
      {/* Hero Section */}
      <section className="py-20 salon-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Work <span className="text-salon-yellow">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our portfolio of transformations and artistic creations. 
            Each image tells a story of beauty, confidence, and expert craftsmanship.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-salon-yellow fill-current" />
              <span>Professional Photography</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <span>Real Client Results</span>
            <div className="w-px h-4 bg-gray-600"></div>
            <span>Before & After</span>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-salon-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-salon-yellow text-salon-black"
                    : "bg-salon-black text-salon-yellow border border-salon-yellow hover:bg-salon-yellow hover:text-salon-black"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-salon-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openModal(index)}
                className="relative group cursor-pointer hover-lift"
              >
                <div className="aspect-square bg-salon-gray border border-salon-yellow/20 rounded-2xl overflow-hidden hover-glow">
                  <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-salon-yellow/20 to-salon-yellow/5">
                    {image.image}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-salon-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{image.description}</p>
                      {image.beforeAfter && (
                        <span className="bg-salon-yellow text-salon-black px-3 py-1 rounded-full text-xs font-semibold">
                          Before & After
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-salon-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-salon-black border border-salon-yellow/20 rounded-2xl p-8 hover-lift">
              <h3 className="text-4xl font-bold text-salon-yellow mb-2">500+</h3>
              <p className="text-white font-semibold mb-2">Transformations</p>
              <p className="text-gray-400 text-sm">Beautiful makeovers completed</p>
            </div>
            <div className="bg-salon-black border border-salon-yellow/20 rounded-2xl p-8 hover-lift">
              <h3 className="text-4xl font-bold text-salon-yellow mb-2">50+</h3>
              <p className="text-white font-semibold mb-2">Bridal Looks</p>
              <p className="text-gray-400 text-sm">Perfect wedding day styles</p>
            </div>
            <div className="bg-salon-black border border-salon-yellow/20 rounded-2xl p-8 hover-lift">
              <h3 className="text-4xl font-bold text-salon-yellow mb-2">100%</h3>
              <p className="text-white font-semibold mb-2">Satisfaction</p>
              <p className="text-gray-400 text-sm">Client happiness guaranteed</p>
            </div>
            <div className="bg-salon-black border border-salon-yellow/20 rounded-2xl p-8 hover-lift">
              <h3 className="text-4xl font-bold text-salon-yellow mb-2">24/7</h3>
              <p className="text-white font-semibold mb-2">Support</p>
              <p className="text-gray-400 text-sm">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-salon-gray rounded-2xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-salon-black/80 text-white p-2 rounded-full hover:bg-salon-yellow hover:text-salon-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-salon-black/80 text-white p-3 rounded-full hover:bg-salon-yellow hover:text-salon-black transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-salon-black/80 text-white p-3 rounded-full hover:bg-salon-yellow hover:text-salon-black transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image content */}
            <div className="aspect-video bg-gradient-to-br from-salon-yellow/20 to-salon-yellow/5 flex items-center justify-center">
              <div className="text-9xl">{filteredImages[selectedImage].image}</div>
            </div>

            {/* Image info */}
            <div className="p-6 bg-salon-black">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{filteredImages[selectedImage].title}</h3>
                {filteredImages[selectedImage].beforeAfter && (
                  <span className="bg-salon-yellow text-salon-black px-3 py-1 rounded-full text-sm font-semibold">
                    Before & After
                  </span>
                )}
              </div>
              <p className="text-gray-300 text-lg">{filteredImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
