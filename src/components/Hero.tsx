import { Calendar, Users, IndianRupee } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Meet Founders. Build
            <br />
            <span className="text-[#0C969C]">Connections.</span> Grow Faster.
          </h1>
          <p className="text-xl sm:text-2xl text-[#6BA3BE] mb-4 max-w-4xl mx-auto leading-relaxed">
            FounderSetu brings together founders for intimate events — high-
            <br />
            quality networking, practical talks, and collaboration opportunities.
            <br />
            <span className="text-white font-medium">Limited seats — high signal interaction.</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-[#0C969C] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0A7075] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Book Your Spot
          </button>
          <button className="bg-transparent border-2 border-[#0C969C] text-[#0C969C] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0C969C] hover:text-white transition-all duration-200 transform hover:scale-105">
            Join WhatsApp
          </button>
          <button className="bg-transparent border-2 border-[#6BA3BE] text-[#6BA3BE] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#6BA3BE] hover:text-white transition-all duration-200 transform hover:scale-105">
            Book a Call
          </button>
        </div>

        <div className="bg-gradient-to-br from-[#274D60]/40 to-[#032F30]/40 backdrop-blur-lg rounded-3xl p-8 max-w-3xl mx-auto border border-[#0C969C]/30 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="text-[#0C969C]" size={32} />
              <div>
                <p className="text-[#6BA3BE] text-sm">Next event:</p>
                <p className="text-white text-xl font-semibold">May 30 - 7:00 PM</p>
                <p className="text-[#6BA3BE]">Indore</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users className="text-[#0C969C]" size={32} />
              <div>
                <p className="text-[#6BA3BE] text-sm">Seats left</p>
                <p className="text-white text-3xl font-bold">40/50</p>
                <p className="text-[#6BA3BE] text-sm">Venue: Incubation Center</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <IndianRupee className="text-[#0C969C]" size={32} />
              <div>
                <p className="text-[#6BA3BE] text-sm">Ticket Price</p>
                <p className="text-white text-3xl font-bold">₹148</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#0C969C]/30">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#0C969C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0A7075] transition-all duration-200 transform hover:scale-105">
                Reserve Seat
              </button>
              <button className="bg-transparent border-2 border-[#6BA3BE] text-[#6BA3BE] px-8 py-3 rounded-full font-medium hover:bg-[#6BA3BE] hover:text-white transition-all duration-200">
                Book a Call with Founder
              </button>
            </div>
            <button className="w-full mt-4 bg-[#274D60]/50 text-[#6BA3BE] px-6 py-2 rounded-full text-sm hover:bg-[#274D60] transition-all duration-200">
              View Tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
