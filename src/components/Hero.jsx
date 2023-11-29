/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = ({Title, img, subTitle}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="md:flex flex-col-reverse items-center justify-evenly w-full bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/ground.png?alt=media&token=4ad5b176-5662-4baa-80cd-9e59af8f20cb')] bg-cover bg-center   p-4 text-white md:flex-row md:p-10 hidden"
    >
      <div className="md:mr-4 md:w-1/2 p-10">
        <div className="mb-4 translate-x-10 font-poppins text-xl font-semibold md:text-6xl leading-10">
          {Title}
        </div>
        <div className="text-lg md:text-xl translate-x-10">
          {subTitle}
        </div>
      </div>
      <div className="mt-4  w-full md:mt-0 md:w-1/2">
        <img
          src={img}
          alt=""
          className="mx-auto h-auto w-full rounded-md shadow-lg md:w-[41rem] md:skew-x-12"
        />
      </div>
    </div>
  );
};

export default Hero;
