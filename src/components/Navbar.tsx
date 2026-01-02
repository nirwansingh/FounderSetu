import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#031716]/80 backdrop-blur-md border-b border-[#0C969C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={scrollToTop}
            className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          >
            <h1 className="text-2xl font-bold text-[#0C969C]">FounderSetu</h1>
          </button>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('why')}
                className="text-[#6BA3BE] hover:text-[#0C969C] transition-colors duration-200"
              >
                Why
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="text-[#6BA3BE] hover:text-[#0C969C] transition-colors duration-200"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('tickets')}
                className="text-[#6BA3BE] hover:text-[#0C969C] transition-colors duration-200"
              >
                Tickets
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-[#6BA3BE] hover:text-[#0C969C] transition-colors duration-200"
              >
                Gallery
              </button>
              <a
                href="#"
                className="text-[#0C969C] hover:text-[#6BA3BE] transition-colors duration-200"
              >
                Join WhatsApp
              </a>
              <button
                onClick={() => scrollToSection('tickets')}
                className="bg-[#0C969C] text-white px-6 py-2 rounded-full hover:bg-[#0A7075] transition-all duration-200 transform hover:scale-105"
              >
                Book Your Spot
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#6BA3BE] hover:text-[#0C969C] transition-colors duration-200"
              >
                Book a Call
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0C969C] hover:text-[#6BA3BE] transition-colors duration-200"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#031716]/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('why')}
              className="block w-full text-left px-3 py-2 text-[#6BA3BE] hover:text-[#0C969C] hover:bg-[#032F30]/50 rounded-md transition-colors duration-200"
            >
              Why
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="block w-full text-left px-3 py-2 text-[#6BA3BE] hover:text-[#0C969C] hover:bg-[#032F30]/50 rounded-md transition-colors duration-200"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection('tickets')}
              className="block w-full text-left px-3 py-2 text-[#6BA3BE] hover:text-[#0C969C] hover:bg-[#032F30]/50 rounded-md transition-colors duration-200"
            >
              Tickets
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-3 py-2 text-[#6BA3BE] hover:text-[#0C969C] hover:bg-[#032F30]/50 rounded-md transition-colors duration-200"
            >
              Gallery
            </button>
            <a
              href="#"
              className="block px-3 py-2 text-[#0C969C] hover:bg-[#032F30]/50 rounded-md transition-colors duration-200"
            >
              Join WhatsApp
            </a>
            <button
              onClick={() => scrollToSection('tickets')}
              className="block w-full text-center bg-[#0C969C] text-white px-3 py-2 rounded-full hover:bg-[#0A7075] transition-colors duration-200 my-2"
            >
              Book Your Spot
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-[#6BA3BE] hover:text-[#0C969C] hover:bg-[#032F30]/50 rounded-md transition-colors duration-200"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
