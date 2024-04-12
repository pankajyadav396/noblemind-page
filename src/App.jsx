
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Swipersec from './components/Swipersec';
import Pioneer from './components/Pioneer';
import Formsec from './components/Formsec';
import Faqs from './components/Faqs';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Backtotop from './components/Backtotop';
import Preloader from './components/Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000,
      }
    );
  })

  return (
    <>
      <Preloader />
      <Backtotop />
      <Hero />
      <Pioneer />
      <Swipersec />
      <Formsec />
      <Faqs />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
