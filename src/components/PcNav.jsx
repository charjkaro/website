import { Link } from "react-router-dom";

const PcNav = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 flex items-center justify-center  ">
        <ul
          className={`$  hidden justify-center gap-10 p-5 font-bold text-blue-600 xl:flex font-poppins `}
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
        <Link to="/charge">
          <div className="btn bg-blue-600 text-white text-xl px-10 rounded-full animate-pulse hidden xl:flex">
            How to charge?
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PcNav;
