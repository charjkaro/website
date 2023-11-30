/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Blog from "../components/Blog";
import { Helmet } from "react-helmet";

const CardM = ({ day, title, para, img1, img2, img3, img4, colour }) => {
  return (
    <div
      className={`flex items-center text-${colour} mx-auto h-full w-full justify-center font-poppins md:w-2/3`}
    >
      <div data-aos="fade-up" className="">
        <div className="m-2 mb-2  w-full md:flex">
          <div className="w-[100%] pr-2 md:w-1/2">
            <h1 className="text-xl font-bold uppercase">[{day}]</h1>
            <h1 className="py-2 text-xl font-bold uppercase">{title}</h1>
            <p className="text-base">{para}</p>
          </div>
          <div className="bg-[{`url(${img1})`}] my-8 h-56 w-[95%] overflow-hidden bg-red-700 md:w-1/2">
            <img src={img1} alt="" className="" />
          </div>
        </div>
        <div data-aos="fade-down" className="m-2 hidden w-full gap-4 md:flex ">
          <div className="h-52 w-full bg-red-700 md:w-1/3 ">
            <img src={img2} alt="" className="h-[100%] w-[100%]" />
          </div>
          <div className="h-52 w-full bg-red-700 md:w-1/3">
            <img src={img3} alt="" className="h-[100%] w-[100%]" />
          </div>
          <div className="h-52 w-full bg-red-700 md:w-1/3">
            <img src={img4} alt="" className="h-[100%] w-[100%]" />
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
        <title>CharjKaro</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="https://charjkaro.com/media" />

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
              img1="https://i.ibb.co/yWFPbvX/13.jpg"
              img2="https://i.ibb.co/k5Wmn2y/5.jpg"
              img3="https://i.ibb.co/RQqb1x3/8.jpg"
              img4="https://i.ibb.co/GsY2XwC/7.jpg"
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
              img1="https://i.ibb.co/gjP431v/1.jpg"
              img2="https://i.ibb.co/80hbNx7/3.jpg"
              img3="https://i.ibb.co/zns7jXY/2.jpg"
              img4="https://i.ibb.co/hBQ8GxF/12.jpg"
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
              img1="https://i.ibb.co/wJRNh7K/9.jpg"
              img2="https://i.ibb.co/5xV9R27/10.jpg"
              img3="https://i.ibb.co/tPVRvk0/11.jpg"
              img4="https://i.ibb.co/1mFtyfw/4.jpg"
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

      <h1 className="mt-10 text-center font-poppins text-5xl font-bold text-blue-600">Blogs</h1>
      {/* blog */}
      <div className="md:p-20 p-5 py-5">
        <Blog
          title="Everything You Need to Know About EV Plug Types"
          link="https://www.evconnect.com/blog/guide-to-ev-plug-types"
          para="If you’re filling up a car that has an internal combustion engine (ICE), you only need to distinguish between the gas and diesel pump. For drivers of electric vehicles (EVs), however, there are more options to choose from. That’s because on the one hand, the nascent EV sector is still on a path to standardization, and on the other because different charging speeds and power loads require more than one type of EV plug. Here’s how to identify the right EV plug for the three types of electric vehicles (EVs) that require a plug-in charger, namely plug-in hybrids (PHEVs), battery electric vehicles (BEVs), and cars using proprietary chargers."
          img="https://images.squarespace-cdn.com/content/v1/5f3b08d4515c242514c95656/1695853014014-KGZVNFPX8U61JD0J6RV9/Everything+You+Need+to+Know+about+EV+Plug+Types+_+EV+Connect.jpg?format=2500w"
        />
         <Blog
          title="How Much Does it Cost to Charge an Electric Car at a Public Charging Station?"
          link="https://www.evconnect.com/blog/ev-charging-costs-at-public-stations"
          para="The 60% surge in new electric vehicle (EV) registrations in Q1 2022 shows that drivers are hungry for change, provided that somewhere to charge is on the menu. For most drivers, home is still where the charge is. It’s where 80% of Tesla drivers refuel, for example. However, domestic Level 1 charging won’t sustain a national shift to EVs. We can’t expect the market to move en masse towards electric until the public recharging network matches the landscape for petrol-powered vehicles. 

          "
          img="https://images.squarespace-cdn.com/content/v1/5f3b08d4515c242514c95656/3c455949-4d1a-4d46-93c4-e70a702e9dde/Picture1.jpg?format=1500w"
        />
      </div>
      <div className="md:p-20 p-5 py-5">
       
      </div>

      {/* <Footer /> */}
    </div>
    </>
  );
};

export default Media;
