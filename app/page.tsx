'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  // Spa, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Menu, 
  X,
  Scissors,
  Waves,
  Hand,
  Sparkles
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F2E9]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              {/* <Spa className="h-8 w-8 text-[#6B8E6B]" /> */}
              <span className="text-2xl font-bold text-[#8B7355]">Nunu</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-[#6B8E6B] transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('salon')}
                className="text-gray-700 hover:text-[#6B8E6B] transition-colors"
              >
                Salon
              </button>
              <button 
                onClick={() => scrollToSection('sauna')}
                className="text-gray-700 hover:text-[#6B8E6B] transition-colors"
              >
                Sauna
              </button>
              <button 
                onClick={() => scrollToSection('massage')}
                className="text-gray-700 hover:text-[#6B8E6B] transition-colors"
              >
                Massage
              </button>
              <button 
                onClick={() => scrollToSection('hair')}
                className="text-gray-700 hover:text-[#6B8E6B] transition-colors"
              >
                Hair Styling
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-[#6B8E6B] hover:bg-[#5A7A5A]">Book Now</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#6B8E6B]"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#6B8E6B] hover:bg-gray-50"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('salon')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#6B8E6B] hover:bg-gray-50"
                >
                  Salon
                </button>
                <button 
                  onClick={() => scrollToSection('sauna')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#6B8E6B] hover:bg-gray-50"
                >
                  Sauna
                </button>
                <button 
                  onClick={() => scrollToSection('massage')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#6B8E6B] hover:bg-gray-50"
                >
                  Massage
                </button>
                <button 
                  onClick={() => scrollToSection('hair')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#6B8E6B] hover:bg-gray-50"
                >
                  Hair Styling
                </button>
                <div className="px-3 py-2">
                  <Button className="w-full bg-[#6B8E6B] hover:bg-[#5A7A5A]">Book Now</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            {/* <Spa className="h-16 w-16 text-[#6B8E6B] mr-4" /> */}
            <h1 className="text-6xl md:text-8xl font-bold">Nunu</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto">
            Experience tranquility and rejuvenation at our luxurious spa retreat. 
            Where wellness meets elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#6B8E6B] hover:bg-[#5A7A5A] text-lg px-8 py-3"
              onClick={() => scrollToSection('salon')}
            >
              Explore Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Salon Section */}
      <section id="salon" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <Scissors className="h-8 w-8 text-[#6B8E6B] mr-3" />
                <h2 className="text-4xl md:text-5xl font-bold text-[#8B7355]">Salon</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our full-service salon offers premium beauty treatments in a serene environment. 
                From precision cuts to stunning color transformations, our expert stylists create 
                looks that enhance your natural beauty and boost your confidence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-[#6B8E6B]" />
                  <span className="text-gray-700">Premium Hair Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-[#6B8E6B]" />
                  <span className="text-gray-700">Color Treatments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-[#6B8E6B]" />
                  <span className="text-gray-700">Facial Treatments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-[#6B8E6B]" />
                  <span className="text-gray-700">Nail Services</span>
                </div>
              </div>
              <Button className="bg-[#8B7355] hover:bg-[#7A6349]">
                View Salon Services
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Luxurious salon interior"
                  className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sauna Section */}
      <section id="sauna" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6B8E6B]/10 to-[#8B7355]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3188347/pexels-photo-3188347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Relaxing sauna experience"
                  className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Waves className="h-8 w-8 text-[#6B8E6B] mr-3" />
                <h2 className="text-4xl md:text-5xl font-bold text-[#8B7355]">Sauna</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Unwind in our authentic Finnish sauna, designed to purify your body and calm your mind. 
                The therapeutic heat promotes circulation, relieves muscle tension, and provides a 
                meditative escape from daily stress.
              </p>
              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-l-[#6B8E6B] bg-white/80">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-[#8B7355] mb-2">Traditional Finnish Sauna</h4>
                    <p className="text-gray-600">Authentic cedar-lined sauna with optimal temperature control</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-[#6B8E6B] bg-white/80">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-[#8B7355] mb-2">Infrared Therapy</h4>
                    <p className="text-gray-600">Deep-penetrating heat for muscle recovery and detoxification</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-[#6B8E6B] bg-white/80">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-[#8B7355] mb-2">Steam Room</h4>
                    <p className="text-gray-600">Humid heat therapy for respiratory and skin benefits</p>
                  </CardContent>
                </Card>
              </div>
              <Button className="bg-[#6B8E6B] hover:bg-[#5A7A5A]">
                Reserve Sauna Time
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Massage Section */}
      <section id="massage" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Hand className="h-8 w-8 text-[#6B8E6B] mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#8B7355]">Massage Parlour</h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our skilled massage therapists offer a range of therapeutic treatments designed to 
              restore balance, relieve tension, and promote deep relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Swedish massage"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-[#6B8E6B]">Most Popular</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#8B7355] mb-3">Swedish Massage</h3>
                <p className="text-gray-600 mb-4">
                  Classic relaxation massage using long, flowing strokes to ease muscle tension.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#6B8E6B]">$120</span>
                  <Button size="sm" className="bg-[#8B7355] hover:bg-[#7A6349]">Book</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/3757956/pexels-photo-3757956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Deep tissue massage"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#8B7355] mb-3">Deep Tissue</h3>
                <p className="text-gray-600 mb-4">
                  Therapeutic massage targeting deeper muscle layers for chronic pain relief.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#6B8E6B]">$150</span>
                  <Button size="sm" className="bg-[#8B7355] hover:bg-[#7A6349]">Book</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/3757950/pexels-photo-3757950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Hot stone massage"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#8B7355] mb-3">Hot Stone</h3>
                <p className="text-gray-600 mb-4">
                  Warmed stones placed on key points to melt away tension and stress.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#6B8E6B]">$180</span>
                  <Button size="sm" className="bg-[#8B7355] hover:bg-[#7A6349]">Book</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hair Styling Section */}
      <section id="hair" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#8B7355]/10 to-[#6B8E6B]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-[#6B8E6B] mr-3" />
                <h2 className="text-4xl md:text-5xl font-bold text-[#8B7355]">Hair Styling</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Transform your look with our expert hair stylists who specialize in cutting-edge 
                techniques and timeless styles. From bold transformations to subtle refinements, 
                we create personalized looks that reflect your unique style.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/80 p-4 rounded-lg border-l-4 border-l-[#6B8E6B]">
                  <h4 className="font-semibold text-[#8B7355] mb-2">Precision Cuts</h4>
                  <p className="text-gray-600 text-sm">$80 - $120</p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg border-l-4 border-l-[#6B8E6B]">
                  <h4 className="font-semibold text-[#8B7355] mb-2">Color & Highlights</h4>
                  <p className="text-gray-600 text-sm">$150 - $300</p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg border-l-4 border-l-[#6B8E6B]">
                  <h4 className="font-semibold text-[#8B7355] mb-2">Bridal Styling</h4>
                  <p className="text-gray-600 text-sm">$200 - $400</p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg border-l-4 border-l-[#6B8E6B]">
                  <h4 className="font-semibold text-[#8B7355] mb-2">Hair Treatments</h4>
                  <p className="text-gray-600 text-sm">$100 - $250</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#6B8E6B] hover:bg-[#5A7A5A]">
                  Book Consultation
                </Button>
                <Button variant="outline" className="border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Professional hair styling"
                  className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer className="bg-[#8B7355] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                {/* <Spa className="h-8 w-8 text-[#6B8E6B] mr-3" /> */}
                <span className="text-3xl font-bold">Nunu</span>
              </div>
              <p className="text-[#F5F2E9]/80 leading-relaxed">
                Your sanctuary for wellness, beauty, and rejuvenation. 
                Experience the ultimate in luxury spa services.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#6B8E6B] mr-3" />
                  <span className="text-[#F5F2E9]/80">(555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#6B8E6B] mr-3" />
                  <span className="text-[#F5F2E9]/80">123 Wellness Ave, Spa City</span>
                </div>
                <div className="flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#6B8E6B] mr-3" />
                  <span className="text-[#F5F2E9]/80">Mon-Sun: 9AM-9PM</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-xl font-semibold mb-4">Book Your Experience</h3>
              <p className="text-[#F5F2E9]/80 mb-6">
                Ready to relax and rejuvenate? Schedule your appointment today.
              </p>
              <Button 
                size="lg" 
                className="bg-[#6B8E6B] hover:bg-[#5A7A5A] text-white"
              >
                Book Now
              </Button>
            </div>
          </div>

          <div className="border-t border-[#F5F2E9]/20 mt-12 pt-8 text-center">
            <p className="text-[#F5F2E9]/60">
              © 2025 Nunu Spa. All rights reserved. | Designed for ultimate relaxation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}