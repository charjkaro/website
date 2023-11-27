/* eslint-disable react/no-unescaped-entities */

const MobileHero = () => {
  return (
    <div>
      {/* <div className="w-[100vw] bg-blue-500 bg-[url('https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg')]  bg-cover h-[40vh]">
        <div className="bg-black opacity-25">
          <h1 className="text-4xl font-semibold text-white">
            Our Actions impact the future
          </h1>
          <p className="text-xl font-semibold text-white">
            Let's challenge and be committed to a clean and green environment.
          </p>
        </div>
      </div> */}
      <div className="relative md:hidden">
        <img src="https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg" alt="" className="brightness-50 h-80" />
        <div className="absolute bottom-6 pl-5 ">
          <h4 className="text-4xl font-semibold text-white my-3">
            Our Actions impact the future
          </h4>
          <p className="text-xl font-semibold text-white">
            Let's challenge and be committed to a clean and green environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;
