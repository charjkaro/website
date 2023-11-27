import  { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const CardM = ({ day, title, para, img1, img2, img3, img4, colour }) => {
  return (
    <div
      className={`flex items-center text-${colour} mx-auto h-full w-full justify-center font-custom md:w-2/3`}
    >
      <div  data-aos="fade-up" className="">
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
        <div  data-aos="fade-down" className="m-2 hidden w-full gap-4 md:flex ">
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
    <div>
      <Navbar />
      <div
        data-aos="fade-left"
        className="m-2 flex-col items-center justify-center rounded-3xl bg-blue-500 py-10"
      >
        <h1 className="my-4 text-center font-custom text-5xl font-bold text-white">
          CHARJKARO AT REEVE 2023
        </h1>
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
      <div  data-aos="fade-left" className="my-10 flex items-center justify-center">
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
      <div  data-aos="fade-left" className="m-2 flex items-center justify-center   rounded-3xl bg-slate-200 py-10">
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
      <Footer />
    </div>
  );
};

export default Media;
