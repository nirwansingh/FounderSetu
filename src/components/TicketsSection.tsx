import { Check } from 'lucide-react';

export default function TicketsSection() {
  return (
    <section id="tickets" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Reserve Your Spot
          </h2>
          <p className="text-xl text-[#6BA3BE] max-w-3xl mx-auto">
            Limited seats available. Secure your place at the next FounderSetu event and join a
            community of ambitious founders.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[#0C969C]/20 to-[#0A7075]/20 backdrop-blur-xl rounded-3xl p-10 border-2 border-[#0C969C]/50 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#0C969C]/20 px-6 py-2 rounded-full mb-4">
                <p className="text-[#0C969C] font-semibold">FOUNDER TICKET</p>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl font-bold text-white">₹148</span>
              </div>
              <p className="text-[#6BA3BE]">Per person • Limited to 50 founders</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-[#0C969C]/20 rounded-full p-1 mt-0.5">
                  <Check className="text-[#0C969C]" size={20} />
                </div>
                <p className="text-white">Access to 2-hour networking event</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#0C969C]/20 rounded-full p-1 mt-0.5">
                  <Check className="text-[#0C969C]" size={20} />
                </div>
                <p className="text-white">Structured networking with fellow founders</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#0C969C]/20 rounded-full p-1 mt-0.5">
                  <Check className="text-[#0C969C]" size={20} />
                </div>
                <p className="text-white">Live talks from 3 successful founders</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#0C969C]/20 rounded-full p-1 mt-0.5">
                  <Check className="text-[#0C969C]" size={20} />
                </div>
                <p className="text-white">Post-event WhatsApp community access</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#0C969C]/20 rounded-full p-1 mt-0.5">
                  <Check className="text-[#0C969C]" size={20} />
                </div>
                <p className="text-white">Refreshments & networking space</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#0C969C]/20 rounded-full p-1 mt-0.5">
                  <Check className="text-[#0C969C]" size={20} />
                </div>
                <p className="text-white">High-quality, focused interactions</p>
              </div>
            </div>

            <button className="w-full bg-[#0C969C] text-white py-4 rounded-full text-lg font-semibold hover:bg-[#0A7075] transition-all duration-200 transform hover:scale-105 shadow-lg">
              Book Your Spot Now
            </button>

            <div className="mt-6 text-center">
              <p className="text-[#6BA3BE] text-sm">
                Only <span className="text-white font-bold">40 seats</span> left out of 50
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#6BA3BE] mb-4">Questions? Want to know more?</p>
            <button className="bg-transparent border-2 border-[#6BA3BE] text-[#6BA3BE] px-8 py-3 rounded-full font-medium hover:bg-[#6BA3BE] hover:text-white transition-all duration-200">
              Schedule a Call with Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
