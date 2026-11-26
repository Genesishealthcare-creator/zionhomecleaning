import './App.css';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ContactBar from './components/ContactBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      {/* Fixed top bars — topbar(38px) + navbar(86px) = 124px total */}
      <TopBar />
      <Navbar />

      {/* Hero fills viewport itself with internal padding-top offset */}
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <WhyChooseUs />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
        <ContactBar />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
