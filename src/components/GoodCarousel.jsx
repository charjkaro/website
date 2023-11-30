// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hero from "./Hero";
import MobileHero from "./MobileHero";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Hero
            Title="CharjKaro. It is the new Charge Brigade"
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/shutterstock-750610873.jpg?alt=media&token=6d7356e4-fd27-49e2-a363-0418cfaa9b54"
          />
          <MobileHero
            Title="CharjKaro. It is the new Charge Brigade
            "
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/shutterstock-750610873.jpg?alt=media&token=6d7356e4-fd27-49e2-a363-0418cfaa9b54"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            Title="Steering toward a Greener Future
            "
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/shutterstock-750610873.jpg?alt=media&token=6d7356e4-fd27-49e2-a363-0418cfaa9b54"
          />
          <MobileHero
            Title="Steering toward a Greener Future
            "
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/shutterstock-750610873.jpg?alt=media&token=6d7356e4-fd27-49e2-a363-0418cfaa9b54"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            Title="The New Face Of Sustainability!"
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/shutterstock-750610873.jpg?alt=media&token=6d7356e4-fd27-49e2-a363-0418cfaa9b54"
          />
          <MobileHero
            Title="The New Face Of Sustainability!"
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/shutterstock-750610873.jpg?alt=media&token=6d7356e4-fd27-49e2-a363-0418cfaa9b54"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            Title="Live the Green Mobility"
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/shutterstock-750610873.jpg?alt=media&token=6d7356e4-fd27-49e2-a363-0418cfaa9b54"
          />
          <MobileHero
            Title="Live the Green Mobility"
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/shutterstock-750610873.jpg?alt=media&token=6d7356e4-fd27-49e2-a363-0418cfaa9b54"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            Title="Charge Ahead with CharjKaro
            "
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/shutterstock-750610873.jpg?alt=media&token=6d7356e4-fd27-49e2-a363-0418cfaa9b54"
          />
          <MobileHero
            Title="Charge Ahead with CharjKaro
            "
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/shutterstock-750610873.jpg?alt=media&token=6d7356e4-fd27-49e2-a363-0418cfaa9b54"
          />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
