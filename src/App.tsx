import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import WhyJoinSection from './components/WhyJoinSection';
import TicketsSection from './components/TicketsSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <WhySection />
      <WhyJoinSection />
      <TicketsSection />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
