/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LocationInfo from "../components/LocationInfo";
import Test from "./Test";
import LocationMob from "../components/LocationMob";
import { Helmet } from "react-helmet";

const advantages = [
  {
    title: "Green Mobility",
    description: "CharjKaro promotes eco-friendly EV adoption",
  },
  {
    title: "EXTENSIVE NETWORK",
    description: "CharjKaro offers a wide network of charging stations.",
  },
  {
    title: "COST-EFFECTIVE CHARGING",
    description:
      "CharjKaro provides a budget-friendly solution for recharging electric vehicles.",
  },
  {
    title: "ALLEVIATING RANGE ANXIETY",
    description:
      "CharjKaro helps users find nearby charging stations, reducing range anxiety.",
  },
  {
    title: "USER FRIENDLY",
    description:
      " The app simplifies EV charging for all drivers. 6. 24/7 Support: Customer assistance around the clock.",
  },
  {
    title: "REAL TIME UPDATE",
    description: "Users check station availability through the App",
  },
];

const Advantage = ({ title, description }) => (
  <li data-aos="fade-left" className="py-2">
    <h1 className="text-xl font-semibold text-blue-600">{title}</h1>
    <p className="text-lg text-gray-600">{description}</p>
  </li>
);

const cards = [
  {
    imageSrc:
      "https://i.ibb.co/QvpMzqn/stock-photo-new-delhi-india-june-indian-government-owned-electric-cars-are-being-charged-at-the-1993.jpg",
    title: "DC001 CHARGER",
    description:
      "These chargers are perfect for fast charging all CCS2/S1, GB/T compatible vehicles, including Log9 batteries, Mahindra e-verito, Tata ACE, and Tata Tigor. They are available in single and dual gun floor-mounted models, so you can choose the one that best suits your needs.",
  },
  {
    title: "AC TYPE 2 CHARGER",
    imageSrc: "https://i.ibb.co/1ZyY6J8/download.jpg",
    description:
      "These chargers are available in a variety of power ratings (from 3.3kW to 22kW), are OCPP compatible, and easy to install, making them ideal for residential apartments, workplaces, and commercial purposes",
  },
  {
    imageSrc:
      "https://i.ibb.co/R7M92Ct/stock-photo-new-delhi-india-june-electric-auto-rickshaws-or-e-auto-rickshaws-at-charging-station-in.jpg",
    title: "AC001 CHARGER",
    description:
      "This Charger comes with 3 industrial sockets of 3.3kW each and is suitable for charging 2-wheelers, 3-wheelers & 4-wheelers. This charger is certified by ARAI, OCPP compatible and best suitable for fleet (triple socket) charging.",
  },
  //... more cards
];

const Card = ({ imageSrc, title, description }) => (
  <div data-aos="fade-down" className="card w-80   my-5">
    <figure>
      <img src={imageSrc} alt="car!" className="h-80 w-80 rounded-b-xl" />
    </figure>
    <div className=" bg-transparent my-5">
      <h2 className="text-2xl my-2 font-semibold">{title}</h2>
      <p className="text-md text-justify my-2 font-medium text-white">
        {description}
      </p>
    </div>
  </div>
);

const AppAdvantages = () => (
  <div
    id="advantages"
    data-aos="fade-up"
    className="flex-col items-center justify-center p-10 font-avenir md:p-20"
  >
    <h1
      id="advantages"
      className="pb-10 text-center text-4xl font-bold text-blue-600 "
    >
      CHARJKARO – ADVANTAGES
    </h1>
    <div className="flex">
      <div className="list-none flex-col md:w-[40%]  ">
        {advantages.map((advantage, index) => (
          <Advantage key={index} {...advantage} />
        ))}
      </div>
      <div className="relative md:flex hidden" loading="lazy">
        <div className="w-[25rem] h-[25rem] relative -right-80  z-10 bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/CAM%20A8506T01.JPG?alt=media&token=a5d75750-7661-4df1-bcfb-720559672325')] bg-cover bg-center"></div>
        <div className="w-[20rem]  h-[20rem] absolute right-[3rem] bottom-9 z-30 bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/CAM%20A8510T01.JPG?alt=media&token=d5ecb403-549e-48e9-8998-a44772470335')] bg-cover bg-center"></div>
        <div className="w-[15rem]  h-[15rem] absolute -right-[5rem] -bottom-20 z-40 bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/CAM%20A8542T01.JPG?alt=media&token=3ddd7233-7e06-4b36-b390-80883f16d368')] bg-cover bg-center"></div>
      </div>
    </div>
  </div>
);

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash === "#advantages") {
      const element = document.getElementById("advantages");
      element.scrollIntoView({ behavior: "smooth" });
      navigate("/", { replace: true });
    } else if (hash === "#location") {
      const element = document.getElementById("location");
      element.scrollIntoView({ behavior: "smooth" });
      navigate("/", { replace: true });
    } else if (hash === "#technology") {
      const element = document.getElementById("technology");
      element.scrollIntoView({ behavior: "smooth" });
      navigate("/", { replace: true });
    } else if (hash === "#partner") {
      const element = document.getElementById("partner");
      element.scrollIntoView({ behavior: "smooth" });
      navigate("/", { replace: true });
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>EV Charging Stations in India | CharjKaro</title>
        <meta
          name="description"
          content="Revolutionize your EV experience with CharjKaro! Explore seamless power, efficiency, and sustainability in our cutting-edge EV charging stations."
        />
        <meta
          name="keywords"
          content="ev charging station, ev charging station near me, ev car charging station, ev charging station india, ev vehicle charging station, fast charging station for ev, charging station near me ev, ev charging station locator"
        />
        <link rel="canonical" href="https://charjkaro.com/" />
      </Helmet>
      <div className="font-poppins">
        <Navbar />

        <Test />

        <div
          data-aos="fade-up"
          className="  text-center  md:p-20 font-poppins px-5 "
        >
          <h1 className="pb-10 text-3xl md:text-4xl font-bold text-blue-600">
            SUSTAINABILITY – THE NEW BUZZ WORD
          </h1>
          <p className="px-10 text-left md:text-xl text-lg md:text-center">
            At CharjKaro, we're at the forefront of the Electric Vehicle (EV)
            Revolution, offering a one-stop solution for all your EV charging
            needs. Our mission is to make electric mobility accessible,
            convenient, and affordable for everyone. Whether you're a seasoned
            EV driver or new to the world of electric vehicles, CharjKaro has
            you covered.
          </p>
        </div>
        <LocationInfo />
        <LocationMob id="location" />

        <div
          data-aos="fade-up"
          className=" font-poppins  py-10 text-center  text-white md:p-10 bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/ground.png?alt=media&token=4ad5b176-5662-4baa-80cd-9e59af8f20cb')] bg-cover bg-center"
        >
          <h1 className=" pb-10 text-4xl font-bold">CHARJKARO APP</h1>
          <p className="px-10 text-xl">
            Download our Mobile App. and get started. Make your payments and
            book your Station Bay in advance.
          </p>
          <div className=" m-10 flex justify-center gap-5 text-black">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=com.charjkaro&pcampaignid=web_share"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/Google_Play_Store_badge_EN.svg.webp?alt=media&token=f3bc5c3b-27bd-4616-91bb-4adcae92ed07"
                alt=""
                className="md:w-44 w-32 transition-transform transform hover:translate-x-3 hover:translate-y-3 hover:scale-90 "
              />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://apps.apple.com/in/app/charjkaro/id6456938758"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/Download_on_the_App_Store_Badge.svg.png?alt=media&token=f618cd54-3001-4847-8938-e87a4a5c7898"
                alt=""
                className="md:w-44 w-32 transition-transform transform hover:translate-x-3 hover:translate-y-3 hover:scale-90"
              />
            </a>
          </div>
        </div>
        <AppAdvantages />
        <div
          id="technology"
          data-aos="fade-up"
          className="flex-col items-center font-poppins justify-center rounded-3xl   py-10   md:p-20 bg-[#36aa4a] bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/imgonline-com-ua-ReplaceColor-yEYGrpRdQ4jaSp.png?alt=media&token=e9a4fa71-8283-4592-9f71-a7f0debb7a41')] bg-cover bg-center  text-white "
        >
          <h1 className="pb-2 text-center text-4xl font-bold text-white ">
            What We Offer
          </h1>
          <div className="mx-5  justify-evenly md:gap-6 flex flex-wrap">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
        <div id="partner" className="text-center pb-20 ">
          <h1 className="text-4xl text-gray-400 py-10 p-5">Our Partners</h1>

          <div className="flex justify-center md:gap-20 gap-10 flex-wrap ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/smcd.png?alt=media&token=b932c250-9187-4c54-9968-960085894b6e"
              alt=""
              className="md:h-36  h-20"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/crest%2B3d_white%2Blogo.png?alt=media&token=4f3b3ce5-a6ab-4daa-809a-d51a615b9fb1"
              alt=""
              className="md:h-36  invert h-20 "
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/1645291697-BECIL.png?alt=media&token=eaf4e522-7ff7-4de4-b08a-cce8d7694a9b"
              alt=""
              className="md:h-36  h-20 "
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/9.png?alt=media&token=22eff73a-d573-440e-b231-571268e59fd3"
              alt=""
              className="md:h-36 h-20 "
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
