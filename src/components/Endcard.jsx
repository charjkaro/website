import { Link } from "react-router-dom";

const Endcard = ({ title,location }) => {
  return (
    <div className="p-10 font-poppins bg-orange-500 m-2 rounded-3xl text-white flex justify-evenly items-center">
      <h1 className="text-5xl">{title}</h1>
      <Link to={`/${location}`} className="text-2xl  border-2 p-4 rounded-full hover:scale-95 transition-transform duration-200 ease-in-out" >{location}</Link>
    </div>
  );
};

export default Endcard;
