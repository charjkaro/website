import { Link } from "react-router-dom";
import Nav from "./ResNav";

const Navbar = () => {
  return (
    <div className="font-poppins   ">
      <div className="md:flex items-center justify-evenly bg-blue-600 p-1 text-white hidden">
        <div className="gap-10 md:flex">
          <h1 className="font-">Soho 930 New Delhi, India</h1>
          <h1 className="font-">
            <a href="mailto:info@charjkaro.com">
              <p>info@charjkaro.com</p>
            </a>
          </h1>
        </div>
        <div className="flex gap-2 invert">
          <a
            href=" https://www.facebook.com/profile.php?id=100093408431168"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png"
              className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
          </a>
          <a
            href=" https://www.instagram.com/_charjkaro_/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png"
              className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
          </a>
          <a
            href=" https://www.linkedin.com/company/96009890/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-512.png"
              className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
          </a>
          <a
            href="https://twitter.com/charjkaro"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-256.png"
              className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCUDXyzulIrLaMbV6v9_iJyA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-256.png"
              className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="md:flex items-center justify-between md:px-10 - border-b-2 border-gray-300 hidden ">
        <div className="">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/no-bg-logo.png?alt=media&token=afcc0834-b6e6-4545-9d3b-26f993572e5e"
            alt=""
            className="w-36"
          />
        </div>
        <div className="p-2 text-right ">
          <span className="text-lg font-bold text-green-600">
            Get free consultation!
          </span>{" "}
          <br />
          <span className="text-xl font-bold text-blue-600">
            {" "}
            <a href="tel:+91112345678">+91-11-234-5678</a>
          </span>
        </div>
      </div>
      <div className="">
        <div className="navbar bg-base-100  lg:hidden ">
          <Nav />
          <div className="navbar-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/no-bg-logo.png?alt=media&token=afcc0834-b6e6-4545-9d3b-26f993572e5e"
              alt=""
              className="w-36"
            />
          </div>
          <div className="navbar-end"></div>
        </div>
        <ul
          className={`$ hidden justify-center gap-10 p-5  font-bold text-blue-600 lg:flex font-poppins`}
        >
          <Link
            to="/"
            className="  block - - rounded-xl hover:text-black  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="  block - - rounded-xl hover:text-black  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            About Us
          </Link>
          <Link
            to="/#advantages"
            className="-  block - - rounded-xl hover:text-black   text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Advantage
          </Link>
          <Link
            to="/#partner"
            className="-  block - - rounded-xl hover:text-black  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Partner
          </Link>
          <Link
            to="/#location"
            className="-  block - - rounded-xl hover:text-black  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            {" "}
            Charging Station
          </Link>
          <Link
            to="/#technology"
            className="-  block - - rounded-xl hover:text-black  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Technology
          </Link>

          <Link
            to="/media"
            className="-  block - - rounded-md hover:text-black  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Media
          </Link>
          <Link
            to="/faq"
            className="-  block - - rounded-xl hover:text-black  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            FAQs
          </Link>
          <Link
            to="/contact"
            className="-  block - - rounded-xl hover:text-black  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
