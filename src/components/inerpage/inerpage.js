
 
import './iner.css'
import { Route, Routes } from 'react-router-dom';
import MacPage from '../mac/Mac';
import IPadPage from '../ipad/ipad';
import WatchPage from '../whach/wach';
import TVPage from '../tv/tv';
import MusicPage from '../music/music';
import IPhonePage from '../iphone/ipohne';

function Inerpage(){
  return<>
        <Routes>
        <Route path="/mac" element={<MacPage/>} />
        <Route path="/iphone" element={<IPhonePage/>} />
        <Route path="/ipad" element={<IPadPage/>} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/tv" element={<TVPage/>} />
        <Route path="/music" element={<MusicPage />} />
      </Routes>
    </>
  
};
export default Inerpage;
