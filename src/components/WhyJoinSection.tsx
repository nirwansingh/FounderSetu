import { Users, MessageCircle, TrendingUp, Clock, Lightbulb, Target } from 'lucide-react';

export default function WhyJoinSection() {
  return (
    <section id="events" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Why Join FounderSetu?
          </h2>
          <p className="text-xl text-[#6BA3BE] max-w-4xl mx-auto leading-relaxed">
            Get real, focused conversations with founders — structured networking so you meet the
            right people, not just collect business cards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#0C969C]/10 to-[#0A7075]/10 backdrop-blur-lg rounded-2xl p-8 border border-[#0C969C]/30 hover:border-[#0C969C]/60 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-[#0C969C]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="text-[#0C969C]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Meet Real Founders</h3>
            <p className="text-[#6BA3BE] leading-relaxed">
              Connect with founders who are actively building, facing similar challenges, and
              willing to share their experiences openly.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0C969C]/10 to-[#0A7075]/10 backdrop-blur-lg rounded-2xl p-8 border border-[#0C969C]/30 hover:border-[#0C969C]/60 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-[#0C969C]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="text-[#0C969C]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Structured Networking</h3>
            <p className="text-[#6BA3BE] leading-relaxed">
              No awkward mingling. We facilitate meaningful conversations through structured
              sessions that ensure everyone gets value.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0C969C]/10 to-[#0A7075]/10 backdrop-blur-lg rounded-2xl p-8 border border-[#0C969C]/30 hover:border-[#0C969C]/60 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-[#0C969C]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="text-[#0C969C]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Accelerate Your Growth</h3>
            <p className="text-[#6BA3BE] leading-relaxed">
              Learn from others' successes and failures. Save months of trial and error by
              tapping into collective founder wisdom.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0C969C]/10 to-[#0A7075]/10 backdrop-blur-lg rounded-2xl p-8 border border-[#0C969C]/30 hover:border-[#0C969C]/60 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-[#0C969C]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Clock className="text-[#0C969C]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Focused & Intimate</h3>
            <p className="text-[#6BA3BE] leading-relaxed">
              Limited seats ensure high-quality interactions. Every attendee gets attention,
              making every conversation count.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0C969C]/10 to-[#0A7075]/10 backdrop-blur-lg rounded-2xl p-8 border border-[#0C969C]/30 hover:border-[#0C969C]/60 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-[#0C969C]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="text-[#0C969C]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Practical Talks</h3>
            <p className="text-[#6BA3BE] leading-relaxed">
              Get actionable insights from founders on stage who share real strategies, not
              theory. Walk away with ideas you can implement immediately.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0C969C]/10 to-[#0A7075]/10 backdrop-blur-lg rounded-2xl p-8 border border-[#0C969C]/30 hover:border-[#0C969C]/60 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-[#0C969C]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-[#0C969C]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">High Signal, Low Noise</h3>
            <p className="text-[#6BA3BE] leading-relaxed">
              Carefully curated attendees mean you meet people who are serious about building
              and growing their ventures.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0C969C]/20 to-[#274D60]/20 backdrop-blur-xl rounded-3xl p-12 border border-[#0C969C]/40">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Event Highlights</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-[#6BA3BE] text-lg">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0C969C] rounded-full mt-2"></div>
              <p><span className="text-white font-semibold">2 hours</span> • Focused networking</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0C969C] rounded-full mt-2"></div>
              <p><span className="text-white font-semibold">3 founders</span> on stage</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0C969C] rounded-full mt-2"></div>
              <p>Icebreaker & quick intros</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0C969C] rounded-full mt-2"></div>
              <p>Intimate venue for real conversations</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0C969C] rounded-full mt-2"></div>
              <p>Structured networking sessions</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#0C969C] rounded-full mt-2"></div>
              <p>Post-event WhatsApp community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
