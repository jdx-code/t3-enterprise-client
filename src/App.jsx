import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Clients from './components/Clients';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Clients />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
