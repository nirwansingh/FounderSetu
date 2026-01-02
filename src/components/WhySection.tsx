export default function WhySection() {
  return (
    <section id="why" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#0C969C] mb-8">
            Why FounderSetu Exists
          </h2>
          <p className="text-xl sm:text-2xl text-white max-w-5xl mx-auto leading-relaxed">
            Building a startup is hard. Building it alone is harder. FounderSetu was created because too
            many visionary founders struggle in silence — not due to lack of ideas, but due to lack of
            the right people around them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-[#0C969C]/20 to-[#0A7075]/20 backdrop-blur-lg rounded-3xl p-10 border border-[#0C969C]/30 hover:border-[#0C969C]/60 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-3xl font-bold text-[#0C969C] mb-6">A Founder's Reality</h3>
            <p className="text-lg text-[#6BA3BE] leading-relaxed">
              Every founder fights the same battles — hiring, finding customers, learning sales, fixing
              problems, and staying calm when everything is breaking. But when you meet people
              walking the same path, the journey becomes lighter, smarter, and faster.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#274D60]/20 to-[#032F30]/20 backdrop-blur-lg rounded-3xl p-10 border border-[#6BA3BE]/30 hover:border-[#6BA3BE]/60 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-3xl font-bold text-[#6BA3BE] mb-6">The Power of Community</h3>
            <p className="text-lg text-[#6BA3BE] leading-relaxed">
              FounderSetu isn't just another networking event. It's a carefully curated space where
              real founders share real challenges, exchange practical advice, and build lasting
              relationships that accelerate growth and open new opportunities.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#032F30]/60 to-[#0A7075]/40 backdrop-blur-xl rounded-3xl p-12 border border-[#0C969C]/40">
          <h3 className="text-4xl font-bold text-white mb-8 text-center">What We Believe</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-[#0C969C] text-5xl font-bold mb-3">01</div>
              <h4 className="text-xl font-semibold text-white mb-3">Real Connections</h4>
              <p className="text-[#6BA3BE]">
                Quality over quantity. We limit seats to ensure meaningful interactions, not just
                business card exchanges.
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#0C969C] text-5xl font-bold mb-3">02</div>
              <h4 className="text-xl font-semibold text-white mb-3">Practical Insights</h4>
              <p className="text-[#6BA3BE]">
                No fluff, no theory. Every session focuses on real challenges and actionable
                solutions from founders who've been there.
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#0C969C] text-5xl font-bold mb-3">03</div>
              <h4 className="text-xl font-semibold text-white mb-3">Accelerated Growth</h4>
              <p className="text-[#6BA3BE]">
                Learn from others' mistakes, leverage collective wisdom, and fast-track your
                startup journey with the right support system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
