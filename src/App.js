import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';
import aboutimage from './images/frame 19.png';
import aboutimage1 from './images/download.png';




function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimage} title='Comes With All You Need For Daily Life' button='Get The App' />
      <About image={aboutimage1} title='Download And Get The App Now' button='Download' />
      <Presentation />
      <Contact />
    </div>
  );
}

export default App;
