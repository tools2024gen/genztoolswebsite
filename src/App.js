import React , {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Tutorials from './pages/Tutorials';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Popup from './components/Popup';
function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const closePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <Router>
      <div>
      {isPopupVisible && <Popup onClose={closePopup} />}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
