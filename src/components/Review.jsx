// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
const Card = ({ name, image, title, description }) => {
  return (
    <div className="card h-64 md:w-96 border-2 shadow-2xl shadow-black p-5 my-10 text-white bg-gradient-to-tr from-blue-950 to-green-700">
      <div className="avatar flex items-center justify-evenly">
        <div className="w-20 rounded-full mx-2">
          <img src={image} />
        </div>
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
      <div className="mt-5 p-2">
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="font- text-xl">{description}</p>
      </div>
    </div>
  );
};

export default function Review() {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          720: {
            slidesPerView: 2,
          },

          // when window width is >= 1024px
          1025: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={20}
        autoplay={true}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper px-10 flex-wrap"
      >
        <SwiperSlide>
          <Card
            name="Dilshad Sharma"
            image="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            description="Reliable and fast charging, a game-changer for EV owners."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Sushant singh"
            image="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            description="Excellent service and fast charging, highly recommended."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Ayush Chauhan"
            image="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            description="Great location and fast charging, a lifesaver for EV users."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Riya Rajput"
            image="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            description="Highly convenient, fast charging, excellent service."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
