import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-custom ">
      <div className="md:flex items-center justify-evenly bg-blue-600 p-1 text-white hidden">
        <div className="gap-10 md:flex">
          <h1 className="font-">Soho 930 New Delhi, India</h1>
          <h1 className="font-">Info@chargekaro.com</h1>
        </div>
        <div className="flex gap-2 invert">
          <img
            src="https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png"
            className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
            alt=""
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png"
            className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
            alt=""
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-512.png"
            className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
            alt=""
          />
          <img
            src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-256.png"
            className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
            alt=""
          />
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-256.png"
            className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
            alt=""
          />
        </div>
      </div>
      <div className="md:flex items-center justify-between md:px-10 px-2 border-b-2 border-gray-300 hidden ">
        <div className="">
          <img
            src="https://i.ibb.co/chSxRVS/no-bg-logo.png"
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
            +91-11-345-5789
          </span>
        </div>
      </div>
      <div className="">
        <div className="navbar bg-base-100 md:hidden ">
          <div className="navbar-start">
            <div className="dropdown">
              <label className="btn btn-circle swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link
                  to="/"
                  className="mx-2 block  text-xl transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="mx-2  block  text-xl transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                >
                  About Us
                </Link>
                <Link
                  to="/#advantages"
                  className="mx-2  block   text-xl transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                >
                  Advantage
                </Link>
                <Link className="mx-2  block  text-xl transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95">
                  Partner
                </Link>
                <Link
                  to="/#location"
                  className="mx-2  block  text-xl transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                >
                  {" "}
                  Charging Station
                </Link>
                <Link
                  to="/#technology"
                  className="mx-2  block  text-xl transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                >
                  Technology
                </Link>
                <Link className="mx-2   block text-xl transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95">
                  Clients
                </Link>

                <Link
                  to="/media"
                  className="mx-2  block  text-xl transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                >
                  Media
                </Link>
                <Link
                  to="/faq"
                  className="mx-2  block  text-xl transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                >
                  FAQs
                </Link>
                <Link
                  to="/contact"
                  className="mx-2  block  text-xl transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                >
                  Contact
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <img
              src="https://i.ibb.co/chSxRVS/no-bg-logo.png"
              alt=""
              className="w-36"
            />
          </div>
          <div className="navbar-end"></div>
        </div>
        <ul
          className={`$ hidden justify-center gap-10 p-5 font-custom font-bold text-blue-600 lg:flex`}
        >
          <Link
            to="/"
            className="mx-2 block  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mx-2  block  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            About Us
          </Link>
          <Link
            to="/#advantages"
            className="mx-2  block   text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Advantage
          </Link>
          <Link className="mx-2  block  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95">
            Partner
          </Link>
          <Link
            to="/#location"
            className="mx-2  block  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            {" "}
            Charging Station
          </Link>
          <Link
            to="/#technology"
            className="mx-2  block  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Technology
          </Link>
          <Link className="mx-2   block text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95">
            Clients
          </Link>

          <Link
            to="/media"
            className="mx-2  block  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Media
          </Link>
          <Link
            to="/faq"
            className="mx-2  block  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            FAQs
          </Link>
          <Link
            to="/contact"
            className="mx-2  block  text-lg transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
