import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;