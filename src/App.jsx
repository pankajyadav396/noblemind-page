
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
function App() {
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
