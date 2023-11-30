import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Media from "./pages/Media";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/media" element={<Media />} />
      
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
