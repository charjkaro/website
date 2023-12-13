

const Appbanner = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        className=" font-poppins my-2 rounded-2xl  py-10 text-center  text-white md:p-10 bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/ground.png?alt=media&token=4ad5b176-5662-4baa-80cd-9e59af8f20cb')] bg-cover bg-center"
      >
        <h1 className=" pb-10 text-4xl font-bold">CHARJKARO APP</h1>
        <p className="px-10 text-xl">
          Download our Mobile App. and get started. Make your payments and book
          your Station Bay in advance.
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
              className="md:w-44 shadow-2xl shadow-black w-32 transition-transform transform hover:translate-x-3 hover:translate-y-3 hover:scale-90 "
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
              className="md:w-44 w-32 shadow-2xl shadow-black transition-transform transform hover:translate-x-3 hover:translate-y-3 hover:scale-90"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Appbanner;
