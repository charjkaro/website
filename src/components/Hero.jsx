/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="md:flex flex-col-reverse items-center justify-evenly w-full bg-[url('https://i.ibb.co/0qBZwqg/ground.png')] bg-cover   p-4 text-white md:flex-row md:p-10 hidden"
    >
      <div className="md:mr-4 md:w-1/2">
        <div className="mb-4 translate-x-10 font-poppins text-xl font-semibold md:text-6xl">
          OUR ACTIONS IMPACT THE FUTURE!
        </div>
        <div className="text-lg md:text-xl translate-x-10">
          Let's challenge and be committed to a clean and green environment.
        </div>
      </div>
      <div className="mt-4  w-full md:mt-0 md:w-1/2">
        <img
          src="https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg"
          alt=""
          className="mx-auto h-auto w-full rounded-md shadow-lg md:w-[41rem] md:skew-x-12"
        />
      </div>
    </div>
  );
};

export default Hero;
