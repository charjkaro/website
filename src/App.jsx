import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Media from "./pages/Media";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PcNav from "./components/PcNav";
import Charge from "./pages/Charge";
import Blog1 from "./pages/blog/Blog1";
import Blog2 from "./pages/blog/Blog2";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="sticky top-0 z-40 bg-white">
        <PcNav />
      </div>
      <div className="overflow-x-hidden">
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/media" element={<Media />} />
            <Route path="/charge" element={<Charge />} />
            <Route path="/blog1" element={<Blog1 />} />
            <Route path="/blog2" element={<Blog2 />} />
            <Route path="*" element={<Home />} />
          </>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
