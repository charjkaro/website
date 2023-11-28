import Hero from "../components/Hero";
import MobileHero from "../components/MobileHero";

const Test = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Hero />
          <MobileHero />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className=" btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert "
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Hero />
          <MobileHero />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Hero />
          <MobileHero />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-glass text-6xl bg-transparent border-0 hover:bg-transparent invert"
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
              <a href="#slide1" className=" btn btn-xs text-white border bg-transparent">
                4
              </a>
            </div>
          </div>
    </div>
  );
};

export default Test;
