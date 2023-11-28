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
  <div data-aos="fade-down" className="card w-80   my-10">
    <figure>
      <img src={imageSrc} alt="car!" className="h-80 w-80" />
    </figure>
    <div className=" bg-transparent my-5">
      <h2 className="text-2xl my-2 font-semibold">{title}</h2>
      <p className="text-[1.11rem] my-2 font-medium text-white">
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
      <div className="relative md:flex hidden">
        <img
          src="https://i.ibb.co/fdVmkD4/shutterstock-1154629684.jpg"
          alt=""
          className="w-[25rem] h-[25rem] relative -right-80  z-10"
        />
        <img
          src="https://i.ibb.co/Jtqtj7P/stock-photo-new-indian-currency-rupees-notes-for-background-2327818595.jpg"
          alt=""
          className="w-[20rem]  h-[20rem] absolute right-[3rem] bottom-9 z-30 "
        />
        <img
          src="https://i.ibb.co/drXd0mp/shutterstock-354369467.jpg"
          alt=""
          className="w-[15rem]  h-[15rem] absolute -right-[5rem] -bottom-20 z-40"
        />
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
    <div className="font-poppins">
      <Navbar />

      <Test />

      <div
        data-aos="fade-up"
        className=" my- text-center  md:p-20 font-poppins "
      >
        <h1 className="pb-10 text-4xl font-bold text-blue-600">
          SUSTAINABILITY – THE NEW BUZZ WORD
        </h1>
        <p className="px-10 text-left text-xl md:text-center">
          At CharjKaro, we're at the forefront of the Electric Vehicle (EV)
          Revolution, offering a one-stop solution for all your EV charging
          needs. Our mission is to make electric mobility accessible,
          convenient, and affordable for everyone. Whether you're a seasoned EV
          driver or new to the world of electric vehicles, CharjKaro has you
          covered.
        </p>
      </div>
      <LocationInfo />
      <LocationMob id="location" />

      <div
        data-aos="fade-up"
        className="rounded-3xl font-poppins  py-10 text-center  text-white md:p-10 bg-[url('https://i.ibb.co/0qBZwqg/ground.png')] bg-cover"
      >
        <h1 className=" pb-10 text-4xl font-bold">CHARJKARO APP</h1>
        <p className="px-10 text-xl">
          Download our Mobile App. and get started. Make your payments and book
          your Station Bay in advance.
        </p>
        <div className=" m-10 flex justify-center gap-5 text-black">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
            alt=""
            className="md:w-44 w-32"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png"
            alt=""
            className="md:w-44 w-32"
          />
        </div>
      </div>
      <AppAdvantages />
      <div
        id="technology"
        data-aos="fade-up"
        className="flex-col items-center font-poppins justify-center rounded-3xl   py-10   md:p-20 bg-[#36aa4a] text-white "
      >
        <h1 className="pb-2 text-center text-4xl font-bold text-white ">
          What We Offer
        </h1>
        <div className="mx-5  justify-evenly gap-6 flex flex-wrap">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <div id="partner" className="text-center pb-20 ">
        <h1 className="text-4xl text-gray-400 py-10 p-5">Our Partners</h1>

        <div className="flex justify-center md:gap-20 gap-10 flex-wrap grayscale opacity-75 ">
          <img
            src="https://mcdonline.nic.in/sdmcportal/static/images/SDMC/Dairy/smcd.png"
            alt=""
            className="md:h-32 w-auto h-20"
          />
          <img
            src="https://technosolent.com/uploads/media/9.png"
            alt=""
            className="md:h-32 w-auto h-20"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/63d13e0c40f3902347869bee/04f18a3f-1959-4b27-84ec-915661d804c2/crest+3d_white+logo.png?format=1500w"
            alt=""
            className="md:h-32 w-auto invert h-20"
          />
          <img
            src="https://path24x7.com/1413914p@th24x7@dmin/post_images/1645291697-BECIL.png"
            alt=""
            className="md:h-32 w-auto h-20"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
