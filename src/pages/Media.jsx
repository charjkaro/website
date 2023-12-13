/* eslint-disable react/prop-types */
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Blog from "../components/Blog";
import { Helmet } from "react-helmet";
import Appbanner from "../components/Appbanner";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const CardM = ({ day, title, para, img1, img2, img3, img4, colour }) => {
  return (
    <div
      className={`flex items-center text-${colour} mx-auto h-full w-full justify-center font-poppins lg:w-2/3`}
    >
      <div data-aos="fade-up" className="">
        <div className="m-2 mb-2  w-full md:flex">
          <div className="w-[100%] pr-2 md:w-1/2">
            <h1 className="text-xl font-bold uppercase">[{day}]</h1>
            <h1 className="py-2 text-xl font-bold uppercase">{title}</h1>
            <p className="text-base">{para}</p>
          </div>
          <div className="bg-[{`url(${img1})`}] my-8 h-56 w-[95%] overflow-hidden md:w-1/2">
            <img src={img1} alt="" className="object-cover" />
          </div>
        </div>
        <div data-aos="fade-down" className="m-2 hidden w-full gap-4 md:flex ">
          <div className="h-52 w-full  md:w-1/3 ">
            <img src={img2} alt="" className="h-[100%] w-[100%] object-cover" />
          </div>
          <div className="h-52 w-full  md:w-1/3">
            <img src={img3} alt="" className="h-[100%] w-[100%] object-cover" />
          </div>
          <div className="h-52 w-full  md:w-1/3">
            <img src={img4} alt="" className="h-[100%] w-[100%] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Media = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Media Gallery | CharjKaro</title>
        <meta
          name="description"
          content="Explore CharjKaro's media hub for the latest in EV charging innovation, news, events, and breakthroughs shaping sustainable mobility's future."
        />
        <meta
          name="keywords"
          content="ev charging station,
ev charging station near me,
ev car charging station,
ev charging station india,
ev vehicle charging station,
fast charging station for ev,
charging station near me ev,
ev charging station locator,
charjkaro, charge karo, "
        />
        <link rel="canonical" href="https://charjkaro.com/media" />
        <meta property="og:title" content="Media Gallery | CharjKaro" />
        <meta
          property="og:description"
          content="Explore CharjKaro's media hub for the latest in EV charging innovation, news, events, and breakthroughs shaping sustainable mobility's future."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/chSxRVS/no-bg-logo.png"
        />
        <meta property="og:url" content="https://charjkaro.com/media" />
      </Helmet>
      <div>
        {/* <Navbar /> */}
        {/* ///////////////////////// */}
        <h1 className="my-4 text-center font-poppins text-5xl font-bold text-blue-600">
          CHARJKARO AT REEVE 2023
        </h1>
        <div className="carousel w-full overflow-hidden">
          <div id="slide1" className="carousel-item relative w-full">
            <div
              data-aos="fade-left"
              className="m- flex-col items-center justify-center rounded-xl bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/ground.png?alt=media&token=4ad5b176-5662-4baa-80cd-9e59af8f20cb')] bg-cover py-10"
            >
              <CardM
                colour="white"
                img1="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/13.jpg?alt=media&token=ca2aff3e-68c5-4258-9e77-40a70f0ee2c0"
                img2="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/5.jpg?alt=media&token=9b6ef9da-dbcb-4834-a0bf-d56e7357810e"
                img3="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/8.jpg?alt=media&token=22bb87a2-02bc-4242-8d27-ae01a6a22030"
                img4="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/7.jpg?alt=media&token=8c14261f-8f94-4b15-bbec-5be95a3c9a9a"
                day="day 1"
                title="Driving Sustainable Change!"
                para="CharjKaro showcased our EV charging solutions at REEVE 2023 in Chandigarh. It was a reiteration of a committed to a greener future. 
         The team had an Inspirational discussion on sustainable development with Hon’ble Home Secretary, Mr. Nitin Yadav.
         "
              />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div
              data-aos="fade-left"
              className="my-10 flex items-center justify-center"
            >
              <CardM
                img1="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/1.jpg?alt=media&token=745c36be-5f46-4209-81b1-9d7c7db43fd7"
                img2="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/3.jpg?alt=media&token=f3a13e85-d5f3-4556-bbfc-e69ff21af80f"
                img3="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/2.jpg?alt=media&token=f74a1587-9ded-49fd-94d9-997fae02e0bc"
                img4="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/12.jpg?alt=media&token=df54b0dd-ed30-4f9a-8cdb-b933217a5e42"
                day="day 2"
                title="A step towards the future"
                para="Our team at Charjkaro proudly showcased the cutting-edge EV charging station solutions. We were honored to host Mr. Dharampal, the government advisor to the administrator, who shared insights on how EV infrastructure is shaping the future of a greener New Bharat.
          Together, we're charging ahead toward a sustainable tomorrow!
          "
              />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div
              data-aos="fade-left"
              className="m- flex items-center justify-center   rounded-3xl bg-[#36aa4a]  bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/imgonline-com-ua-ReplaceColor-yEYGrpRdQ4jaSp.png?alt=media&token=e9a4fa71-8283-4592-9f71-a7f0debb7a41')] bg-cover bg-center text-white py-10"
            >
              <CardM
                img1="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/9.jpg?alt=media&token=67b1cc41-5448-4175-9ab0-f8a1f1277408"
                img2="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/10.jpg?alt=media&token=aac80da2-569c-47af-b452-4a1a24278303"
                img3="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/11.jpg?alt=media&token=29910d04-dc10-43b8-9b32-a7b7c5d93675"
                img4="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/4.jpg?alt=media&token=f340b64a-84df-4f9f-a8a4-c7c603f0bf98"
                colour=""
                day="day 3"
                title="Gateway to the Future"
                para="Honoured to have Mr. Vijay Zade Finance Secretary of Chandigarh, visit our booth and engage in insightful discussions on how EVs are transforming budget-friendly travel and boosting Bharat's economy.
         Together, we're electrifying India, one charge at a time.
         
         "
              />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        {/* ///////////////// */}

        <h1 className="mt-10 text-center font-poppins text-5xl font-bold text-blue-600">
          Blogs
        </h1>
        {/* blog */}
        <div className="md:p-20 p-5 py-5">
          <Blog
            title="Unveiling the Potential: Electric Vehicle Opportunities in India
            "
            link="/blog1"
            para="As a major player in the global automobile market, India's nationwide shift to electric vehicles is poised to be a pivotal moment on a global scale and within the country. Fueled by the Indian government's commitment to sustainable transportation, increasing consumer interest in cutting-edge technologies, and the involvement of private entities investing in electric vehicle technology, the outlook for electric vehicles in India appears optimistic.
            "
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/Cover%20image%201.png?alt=media&token=ea89f0ef-5658-4df2-acde-3514c8d981a1"
          />
          <Blog
            title="Transforming EV Range Anxiety into Range Confidence
            "
            link="/blog2"
            para="
            Understanding EV Range Anxiety and Range Confidence:
            EV Range Anxiety is the worry of running out of power and being stranded, while Range Confidence is the assurance of ample battery capacity.
            Modern EVs require less frequent charging with increased battery capacity.
            Expanded EV charging infrastructure at home, work, and on-the-go enhances range confidence.
            Level 2 charging facilitates home and work charging, while DCFC supports fleets and road trips.
            The EV market is a present reality.
            

          "
            img="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/Transforming%20EV%20Range%20Anxiety%20into%20Range%20Confidence.png?alt=media&token=ad2cc1c3-7cb8-462d-81c2-fd8d810adbed"
          />
        </div>

        {/* <Footer /> */}
      </div>
      <Appbanner />
    </>
  );
};

export default Media;
