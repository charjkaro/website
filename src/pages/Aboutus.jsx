/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="my-10  min-h-[40vh] items-center justify-center gap-5 p-10 md:flex">
          <div data-aos="fade-left" className="]">
            <img
              src="https://i.ibb.co/chSxRVS/no-bg-logo.png"
              className="w-72"
              alt=""
            />
          </div>
          <div className="md:w-1/2">
            <h1
              data-aos="fade-left"
              className="py-5 font-poppins text-3xl font-font-bold text-blue-600"
            >
              THE CHARJKARO STORY
            </h1>
            <p
              data-aos="fade-up"
              className="font-poppins text-lg text-gray-600 "
            >
              CharjKaro is driving a CHANGE. It is an emerging chain of
              state-of-the-art EV Charging Stations that is slated to become the
              most reliable and efficient charging infrastructure. Known for its
              smart and cost-effective EV Charging solutions, it has a
              geographic spread that covers Delhi, Punjab and Uttar Pradesh.
              Having overcome various barriers and challenges in standardization
              of the Charging Management Systems, and scaling of the EV
              business, it has made a mark for itself in the EV Charging domain.
              It is the pathway to emission-free travel and a sustainable
              tomorrow. Supporting the electric vehicle revolution, CharjKaro is
              facilitating an infrastructure to make life simple and ensure an
              enjoyable experience
              <br /> It is an expression of Excellence
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="m- py-20 rounded-3xl bg-blue-600 p-5 text-center text-white md:px-20 bg-[url('https://i.ibb.co/0qBZwqg/ground.png')] bg-cover   "
        >
          <h1 className="mb-5 text-4xl font-font-bold md:text-5xl">
            Our Beliefs
          </h1>
          <div className="mt-10">
            <div className="flex items-center">
              <div className="h-[1px] w-full bg-white"></div>
              <h2 className="mb-2 text-2xl font-semifont-bold px-2">Mission</h2>
              <div className="h-[1px] w-full bg-white"></div>
            </div>
            <p className="text-lg mb-5 mt-2 text-justify md:text-left">
              At CharjKaro, our mission is to accelerate the transition to
              sustainable transportation by providing accessible and convenient
              electric vehicle (EV) charging solutions. We aim to be recognized
              and acknowledged as a smart, new generation leader by creating
              unprecedented value for customers and the ecosystem partners.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex items-center">
              <div className="h-[1px] w-full bg-white"></div>
              <h2 className="mb-2 text-2xl font-semifont-bold px-2">Vision</h2>
              <div className="h-[1px] w-full bg-white"></div>
            </div>
            <p className="text-lg mb-5 mt-2  text-justify md:text-left">
              Our vision at CharjKaro is to become the backbone of
              sustainability in India and lead the charge towards a sustainable
              and electrified future of transportation. We envision a world
              where EV charging is as commonplace and accessible as traditional
              refueling.
            </p>
          </div>
          <div className="mt-10 font-poppins">
            <div className="flex items-center">
              <div className="h-[1px] w-full bg-white"></div>
              <h2 className="mb-2 text-2xl font-semifont-bold px-2">Values</h2>
              <div className="h-[1px] w-full bg-white"></div>
            </div>
            <div className="text-lg mt-2 flex-wrap justify-center text-left  md:flex md:text-left">
              <div className="mx-4">
                <p className="mb-4 ">
                  <span className="font-bold">Sustainability:</span> We're
                  dedicated to eco-friendly transportation.
                </p>
                <p className="mb-4 ">
                  <span className="font-bold">Accessibility:</span> EV charging
                  should be easy and accessible for all
                </p>
                <p className="mb-4 ">
                  <span className="font-bold">Innovation:</span> We lead with
                  technology and forward-thinking
                </p>
                <p className="mb-4 ">
                  <span className="font-bold">User Focus:</span> Our users'
                  needs drive our solutions.
                </p>
                <p className="mb-4 ">
                  <span className="font-bold">Reliability:</span> Users can
                  depend on us for consistent service.
                </p>
              </div>
              <div  className="mx-4">
                <p className="mb-4 ">
                  <span className="font-bold">Transparency:</span> Honesty in
                  operations and pricing is our priority.{" "}
                </p>
                <p className="mb-4 ">
                  <span className="font-bold">Customer Satisfaction:</span> We
                  aim for exceptional customer service.
                </p>
                <p className="mb-4 ">
                  <span className="font-bold">Community Engagement:</span> We
                  actively support local initiatives
                </p>
                <p className="mb-4 ">
                  <span className="font-bold">Safety:</span> Highest safety
                  standards protect users and the environment.
                </p>
                <p className="mb-4 ">
                  <span className="font-bold">Economic Viability:</span> We make
                  electric mobility affordable and viable
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="flex items-center p-5 text-left text-xl text-gray-500 md:p-20 md:px-64 md:text-center md:text-3xl"
      >
        <h1>
          The dynamic Leadership at CharjKaro drives the organisation towards
          excellence. The thinking speaks eloquently of professionalism and the
          futuristic approach to business
        </h1>
      </div>

      <div
        data-aos="fade-up"
        className="rounded-t-3xl bg-[#e3f0d2] p-10 drop-shadow-2xl"
      >
        <h1 className="text-center text-5xl font-semifont-bold text-blue-600">
          Leadership
        </h1>
        <div className="my-10 justify-center gap-5 md:flex items-end">
          <div className="h-56 w-full md:w-44 bg-[url('https://i.ibb.co/3F1PPLf/mr-amit-kapoor.jpg')] bg-cover bg-center md:h-44"></div>
          <div data-aos="fade-left" className="mt-5 md:mt-0 md:w-1/2">
            <h1 className="font-poppins text-xl font-bold text-gray-600 mb-2">
              AMIT KAPOOR
            </h1>
            <p className="font-poppins text-md text-gray-600">
              Amit Kapoor set up US Advertising Agency in the year 2000. The
              company involved itself in the communication for brands across
              sectors such as fashion, media & entertainment, banking &
              financial, automobiles, political, and the Government. He is known
              to be a focused entrepreneur who, in the last 20 years, has been
              able to successfully spearhead a Rs. 500 crore business, which has
              been recognized as the most valuable company in the sphere of OOH
            </p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="my-10 justify-center gap-5 md:flex "
        >
          <div className="h-56 w-full md:w-44 bg-[url('https://i.ibb.co/ZzDKQh7/Screenshot-2023-10-18-at-4-44-31-PM.png')] bg-cover bg-center md:h-44"></div>
          <div className="mt-5 md:mt-0 md:w-1/2">
            <h1 className="font-poppins text-xl font-bold text-gray-600 mb-2">
              RAGHU KHANNA
            </h1>
            <p className="font-poppins text-md text-gray-600">
              A graduate from IIT Guwahati, he delved into transit advertising
              with CASHurDRIVE nine years ago. Specializing in ads on radio
              taxis like Mega, Meru, Easy, Tabcabs, it's a sub-branch of outdoor
              advertising. Today, his company is a recognized name in Transit
              advertising, standing out for its innovative strategies.
            </p>
          </div>
        </div>

       
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;
