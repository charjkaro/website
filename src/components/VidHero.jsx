import React from "react";

const VidHero = () => {
  return (
    <div className="relative flex items-center justify-center">
      <video
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/f25315cf-b4cb-45ec-a8dc-799916d7b12a.mp4?alt=media&token=0d04cee5-1185-4b01-bc4f-ec3afa681d71"
        className="lg:h-[74vh] h-[40vh] w-[100vw] object-cover object-center brightness-50 opacity-95"
      >
        {" "}
      </video>
      <p className="absolute lg:text-7xl text-4xl w-[100vw] text-center font-bold lg:top-[30%] top-[35%] lg:right-[30%] -right-[5px] lg:w-1/2 px-2 text-white   lg:leading-normal leading-normal">
        {" "}
        Charge Ahead with  <span className="">
          Charj
        </span>{" "}
        <span className="">Karo</span>{" "}
      </p>
    </div>
  );
};

export default VidHero;
