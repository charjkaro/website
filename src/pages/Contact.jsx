import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Endcard from "../components/Endcard";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="m-8 my-10 text-center font-custom text-5xl font-semibold text-blue-600">
        Follow Us on
        <div
          className=" mt-4
 flex justify-around px-36 md:px-40"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png"
            className="delay-10   m-1 w-24 transition-all duration-150 hover:scale-75"
            alt=""
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png"
            className="delay-10 m-1 w-24 transition-all duration-150 hover:scale-75
"
            alt=""
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-512.png"
            className="delay-10  m-1 w-24 transition-all duration-150 hover:scale-75
"
            alt=""
          />
          <img
            src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-256.png"
            className="delay-10 m-1 w-24 transition-all duration-150 hover:scale-75
"
            alt=""
          />
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-256.png"
            className="delay-10  m-1 w-24 transition-all duration-150 hover:scale-75
"
            alt=""
          />
        </div>
      </div>
      <ContactForm />
      <Endcard
        title="Find out more about us."
        location="about"
      />

      <Footer />
    </div>
  );
};

export default Contact;
