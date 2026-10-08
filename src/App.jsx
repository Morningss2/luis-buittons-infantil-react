import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destaques from './components/Destaques';
import Infantil from './components/Infantil';
import ChamadaFinal from './components/ChamadaFinal';
import Footer from './components/Footer';

import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Destaques />
        <Infantil />
        <ChamadaFinal />
      </main>

      <Footer />
    </>
  );
}

export default App;