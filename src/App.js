import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Aseguradoras from './components/Aseguradoras/Aseguradoras';
import KPIs from './components/KPIs/KPIs';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Aseguradoras />
        <KPIs />
        <Features />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
