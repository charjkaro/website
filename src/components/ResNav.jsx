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
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className=" -translate-x-10 -my-24   w-[90vw] ">
          <div
            className="modal-box bg-gray-950 py-20 rounded-lg shadow-lg max-h-[150vh] "
            onClick={() => document.getElementById("my_modal_2").close()}
          >
            <img
              src="https://i.ibb.co/chSxRVS/no-bg-logo.png"
              alt=""
              className=""
            />
            <ul className="  justify-center gap-16 p-5 font-poppins font-semibold text-white">
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
                <Link to="/#partner">Charging Station</Link>
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
            </ul>
            <div className="modal-action mt-6 flex justify-center">
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
