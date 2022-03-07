import Landing from "./Components/Landing";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Personal from "./Components/Views/Personal";
import Corporate from "./Components/Views/Corporate";
import Sme from "./Components/Views/Sme";
import OurCards from "./Components/Views/OurCards";
import Home from "./Components/Views/Home";
import About from "./Components/Views/About";
import Media from "./Components/Views/Media";
import Banking from "./Components/Views/Banking";
import Careers from "./Components/Views/Careers";
import Whistle from "./Components/Views/Whistle";
import Contact from "./Components/Views/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/personal" element={<Personal/>}/>
          <Route path="/corporate" element={<Corporate/>}/>
          <Route path="/sme" element={<Sme/>}/>
          <Route path="/ourcards" element={<OurCards/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/banking' element={<Banking/>}/>
          <Route path='/media' element={<Media/>}/>
          <Route path='/careers' element={<Careers/>}/>
          <Route path='/whistle' element={<Whistle/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
