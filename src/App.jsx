import React from 'react'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';


 const App = () => {
  return <div className="bg-[#171d32] h-auto w-full overflow-hidden">
<Navbar/>
<Home/>
<About/>
<Experience/>
<Projects/>
<Footer/>

  </div>;
}

export default App;
