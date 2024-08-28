
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Boprops from './components/Boprops';
// import FirstSection from "./components/firt-section";
// import FoFiSiSection from './components/FoFiSiSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Inerpage from './components/inerpage/inerpage';
// import SecondeSection from './components/SecondeSection';
// import ThirdSection from './components/ThirdSection';
// import Youtube from './components/youtube/Youtube';
// import { Route, Routes } from 'react-router-dom';
import Homepage from './homepage';

function App() {
  return (
    <>
    
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes>
       
         <Inerpage/>
          {/* <Youtube/> */}
     <Footer /> 
      {/* <ProductForm/> */}
    </>
  );
}

export default App;
