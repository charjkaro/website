/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar-start font-poppins ">
      <button
        className="btn rounded-full px-1 "
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <label className="btn btn-circle swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className=" -translate-x-10 -my-24   w-[90vw] ">
          <div
            className="modal-box bg-gray-950 py-20 rounded-lg shadow-lg max-h-[150vh] "
            onClick={() => document.getElementById("my_modal_2").close()}
          >
            <div className="bg-[url('')] bg-cover bg-center flex justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/Untitled%20design%20(1).png?alt=media&token=620fe06b-6770-41d3-8258-f53e657f6b45"
                alt=""
                className="w-64 object-cover h-28"
              />
            </div>
            <img src="" alt="" className="" />
            <ul className="  justify-center gap-16 p-5 font-poppins font-semibold text-white">
              <Link to="/charge">
                <div className="  text-white text-lg my-2  rounded-full animate-pulse">
                  How to charge?
                </div>
              </Link>
              <hr />
              <li className="nav-link text-lg">
                <Link to="/">Home</Link>
              </li>
              <hr />
              <li className="nav-link text-lg">
                <Link to="/about">About Us</Link>
              </li>

              <hr className="py-1" />
              <li className="nav-link text-lg">
                <Link to="/#advantages">Advantage</Link>
              </li>
              <hr className="py-1" />
              <li className="nav-link text-lg">
                <Link to="/#partner">Partner</Link>
              </li>
              <hr className="py-1" />
              <li className="nav-link text-lg">
                <Link to="/#location">Charging Station</Link>
              </li>
              <hr className="py-1" />
              <li className="nav-link text-lg">
                <Link to="/#technology">Technology</Link>
              </li>

              <hr className="py-1" />
              <li className="nav-link text-lg">
                <Link to="/media">Media</Link>
              </li>
              <hr className="py-1" />
              <li className="nav-link text-lg">
                <Link to="/faq">FAQs</Link>
              </li>
              <hr className="py-1" />
              <li className="nav-link text-lg">
                <Link to="/contact">Contact</Link>
              </li>
              <hr />
            </ul>
            <div className="modal-action mt-2 flex justify-center">
              <button
                className="btn bg-transparent border text-white px-10 text-lg"
                onClick={() => document.getElementById("my_modal_2").close()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Nav;
