import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Clients from './components/Clients';
import Services from './components/Services';
import Footer from './components/Footer';
import Offerings from './components/Offerings';
import Vision from './components/Vision';
import Founder from './components/Founder';


function App() {
  return (
    <div>
      <Header />
      <About />
      <Clients />
      <Services />
      <Offerings />
      <Vision />
      {/* <Founder /> */}
      <Footer />
    </div>
  );
}

export default App;
