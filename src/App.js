
import './App.css';
import Boprops from './components/Boprops';
import FirstSection from "./components/firt-section";
import FoFiSiSection from './components/FoFiSiSection';
import Footer from './components/Footer';
import Header from './components/Header';
import SecondeSection from './components/SecondeSection';
import ThirdSection from './components/ThirdSection';
import Youtube from './components/youtube/Youtube';

function App() {
  return (
    <>
      <Header/>
      <Boprops/>
      <FirstSection />
      <SecondeSection/>
      <ThirdSection/>
      <FoFiSiSection/>
      <Youtube/>
     <Footer /> 
      {/* <ProductForm/> */}
    </>
  );
}

export default App;
