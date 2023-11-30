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
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/3-656847aa004a9.webp?alt=media&token=748933b3-f58a-4896-beb0-ed080bc53d9f"
          />
          <MobileHero
            Title="Steering toward a Greener Future
            "
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/3-656847aa004a9.webp?alt=media&token=748933b3-f58a-4896-beb0-ed080bc53d9f"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            Title="The New Face Of Sustainability!"
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/4-656847ac334ac.webp?alt=media&token=7b552599-3421-450b-9d14-a80a20a34491"
          />
          <MobileHero
            Title="The New Face Of Sustainability!"
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/4-656847ac334ac.webp?alt=media&token=7b552599-3421-450b-9d14-a80a20a34491"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            Title="Live the Green Mobility"
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/5-656847ae63d29.webp?alt=media&token=c3beba4c-a923-4d15-ac1e-f6ae0e5bc052"
          />
          <MobileHero
            Title="Live the Green Mobility"
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/5-656847ae63d29.webp?alt=media&token=c3beba4c-a923-4d15-ac1e-f6ae0e5bc052"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            Title="Charge Ahead with CharjKaro
            "
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/1.webp?alt=media&token=e9769cd1-137e-49d8-925c-9461e820baee"
          />
          <MobileHero
            Title="Charge Ahead with CharjKaro
            "
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/1.webp?alt=media&token=e9769cd1-137e-49d8-925c-9461e820baee"
          />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
