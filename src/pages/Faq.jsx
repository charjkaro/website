import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Endcard from "../components/Endcard";

const json = {
  FAQs: [
    {
      question: "How does an electric vehicle (EV) charge?",
      answer:
        "Electric vehicles are charged through a charging station that uses an electric outlet to deliver electricity. The charging station connects to the vehicle's battery, which stores the electricity for use when the vehicle is not plugged in.",
    },
    {
      question: "What are the different types of EV charging stations?",
      answer:
        "There are several types of EV charging stations, including Level 1 (120V), Level 2 (240V), and DC Fast Charging (480V or higher). Level 1 and Level 2 stations are commonly used in residential settings, while DC Fast Charging stations are used for long distance travel.",
    },
    {
      question: "How long does it take to charge an EV?",
      answer:
        "The time it takes to charge an EV depends on the type of charging station and the battery capacity of the vehicle. A typical home charging station can charge a small EV in 8 to 10 hours, while a fast charging station can do it in less than an hour.",
    },
    {
      question: "How much does it cost to charge an EV?",
      answer:
        "The cost of charging an EV depends on the type of charging station and the amount of electricity used. On-peak rates are typically higher than off-peak rates, so charging during off-peak hours can be more cost-effective.",
    },
    {
      question: "How can I pay for electric car charging?",
      answer:
        "Many electric vehicle charging stations accept payment methods such as credit cards, mobile payments, or smartphone apps. Some also offer subscription plans for regular users.",
    },
    {
      question: "What powers electric car charging stations?",
      answer:
        "Electric car charging stations are powered by the electrical grid. They use a standard home electrical outlet for Level 1 charging and a special connector for Level 2 and DC Fast Charging.",
    },
    {
      question: "How do I plan a trip with charge stops?",
      answer:
        "Planning a trip with charge stops involves finding charging stations along your route. Many online tools and apps can help you find charging stations and plan your route.",
    },
    {
      question: "What are the different levels of EV charging?",
      answer:
        "There are three levels of EV charging: Level 1 (120V), Level 2 (240V), and DC Fast Charging (480V or higher). Each level offers a different range and charging speed.",
    },
    {
      question: "How do home solar panels work for EV charging?",
      answer:
        "Home solar panels can be used to power an electric vehicle charging station. The solar panels convert sunlight into electricity, which can then be used to charge the vehicle.",
    },
    {
      question: "What should I do if my EV is submerged in a flood?",
      answer:
        "If an electric vehicle is submerged in water, it should be turned off immediately to prevent any potential electrical shorts or damage to the vehicle's battery.",
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
    <div className="">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="my-10 p-5">
          <h1 className="mb-5 text-4xl font-bold">FAQs</h1>
          {json.FAQs.map((faq, index) => (
            <div
            key={index} className="collapse collapse-plus bg-gray-300 my-2">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Endcard title="Still have a Question ?  " />
      <Footer />
    </div>
  );
};

export default Faq;
