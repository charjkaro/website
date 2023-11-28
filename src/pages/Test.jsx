import Hero from "../components/Hero";
import MobileHero from "../components/MobileHero";

const Test = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Hero 
          Title="CharjKaro. It is the new Charge Brigade" 
          img="https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg"/>
          <MobileHero
           Title="CharjKaro. It is the new Charge Brigade" 
           img="https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className=" btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert hidden md:block "
            >
              ❮
            </a>
            <a
              href="#slide2" 
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert hidden md:block"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <Hero 
          Title="Charge Ahead with CharjKaro" 
          img="https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg"/>
          <MobileHero 
          Title="Charge Ahead with CharjKaro" 
          img="https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert hidden md:block"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert hidden md:block"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <Hero 
          Title="Steerin toward a Greener Future" 
          img="https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg"/>
          <MobileHero 
          Title="Steerin toward a Greener Future" 
          img="https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert hidden md:block"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert hidden md:block"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <Hero 
          Title="The New Face of Sustainability" 
          img="https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg"/>
          <MobileHero 
          Title="The New Face of Sustainability" 
          img="https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert hidden md:block"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert hidden md:block"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
        <Hero 
          Title="Live the Green Mobility" 
          img="https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg"/>
          <MobileHero 
          Title="Live the Green Mobility" 
          img="https://i.ibb.co/tpYN7xL/shutterstock-750610873.jpg"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide5"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert hidden md:block"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert hidden md:block"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
          <div className="">
            <div className="flex justify-center w-full py-2 gap-2 -translate-y-10 ">
              <a href="#slide1" className="btn btn-xs text-white border bg-transparent">
                1
              </a>
              <a href="#slide2" className=" btn btn-xs text-white border bg-transparent">
                2
              </a>
              <a href="#slide3" className=" btn btn-xs text-white border bg-transparent">
                3
              </a>
              <a href="#slide4" className=" btn btn-xs text-white border bg-transparent">
                4
              </a>
             
              <a href="#slide5" className=" btn btn-xs text-white border bg-transparent">
                5
              </a>
            </div>
          </div>
    </div>
  );
};

export default Test;
