import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Endcard from "../components/Endcard";
import { Helmet } from "react-helmet";

const json = {
  FAQs: [
    {
      question: "What does CharjKaro Offer?",
      answer:
        "CharjKaro is a dedicated facility for charging electric vehicles. It has the necessary infrastructure to recharge EV batteries, for smooth and efficient operations.",
    },
    {
      question: "How long does it take to charge an electric vehicle?",
      answer:
        "The charging time varies based on the vehicle's battery capacity. Generally, it can range from a few hours for standard charging to faster charging options that can provide a significant charge in less time.",
    },
    {
      question: "What types of charging connectors are supported at CharjKaro?",
      answer:
        "CharjKaro Stations support a variety of connectors, and ensure compatibility with a wide range of electric vehicles available in the market.",
    },
    {
      question: "Can all electric vehicles be charged at a CharjKaro Station?",
      answer:
        "Yes, CharjKaro stations are designed to be compatible with all electric vehicles that adhere to industry-standard charging protocols. This includes popular electric car models from various manufacturers.",
    },
    {
      question: "How do I locate CharjKaro stations?",
      answer:
        "You can easily find CharjKaro stations through our mobile app, website, or other navigation tools. We provide real-time information on station locations, availability, and compatible connectors.",
    },
    {
      question:
        "Is there a membership or subscription required to use CharjKaro stations?",
      answer:
        "While we offer membership plans for added benefits, our charging stations are also accessible for one-time users. You can pay for your charging session using our app or RFID cards for a hassle-free experience.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept various payment methods, including credit/debit cards and UID mobile payment options. Our user-friendly app provides a secure and convenient way to handle transactions.",
    },
    {
      question: "What safety measures are in place at CharjKaro stations?",
      answer:
        "Safety is the top priority. Our charging stations comply with industry safety standards, and we regularly perform maintenance checks. Additionally, we provide clear usage guidelines to ensure a safe charging experience for all users.",
    },
    {
      question: "Do you offer customer support for any issues?",
      answer:
        "Yes, we have a dedicated customer support team to assist you with any issues. Call us on 9999113211 or use our app for quick assistance.",
    },
  ],
};

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Ask A Question, We Are Ready To Answer Anytime </title>
        <meta
          name="description"
          content="Got questions? Check out CharjKaro's FAQs for simple answers about EV charging. We're here to make your sustainable journey easy!
"
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
        <link rel="canonical" href="https://charjkaro.com/faq" />
        <meta
          property="og:title"
          content="Ask A Question, We Are Ready To Answer Anytime"
        />
        <meta
          property="og:description"
          content="Got questions? Check out CharjKaro's FAQs for simple answers about EV charging. We're here to make your sustainable journey easy!"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/chSxRVS/no-bg-logo.png"
        />
        <meta property="og:url" content="https://charjkaro.com/faq" />
        <meta
          name="keywords"
          content="ev charging station, ev charging station near me, ev car charging station, ev charging station india, ev vehicle charging station, fast charging station for ev, charging station near me ev, ev charging station locator, charjkaro, charge karo, "
        />
        
      </Helmet>
      <div className="">
        {/* <Navbar /> */}
        <div className="container mx-auto px-4">
          <div className="my-10 p-5">
            <h1 className="mb-5 text-4xl font-bold">FAQs</h1>
            {json.FAQs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-gray-300 my-2"
              >
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content text-lg">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Endcard title="Still have a Question ?" location="contact" />

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Faq;
