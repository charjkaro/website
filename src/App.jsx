import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Media from "./pages/Media";
import Test from "./pages/Test";



const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/media" element={<Media />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
