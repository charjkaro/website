const Footer = () => {
  return (
    <div className=" bg-black bg-[url('https://images.pngnice.com/download/2007/Graphic-Elements-Transparent-Background.png')] bg-cover">
      <div className="md:px-30 justify-between rounded-3xl rounded-b-none bg-[url('')] bg-cover bg-no-repeat p-10 font-poppins text-white md:flex">
        <img
          src="https://i.ibb.co/chSxRVS/no-bg-logo.png"
          alt=""
          className="  md:w-[15rem ] md:h-[15rem]"
        />
        <div className="flex flex-col items-start">
          <p className="py-2 text-3xl font-bold">Contact info</p>

          <div className="py-2">
            <p className="text-2xl font-bold">Call us</p>
            <p>
              +91-11-234-5678 <br /> +91-11-234-5678
            </p>
          </div>
          <div className="py-2">
            <p className="text-2xl font-bold">Email</p>
            <p>info@charjkaro.com</p>
          </div>

          <div className="py-2">
            <p className="text-2xl font-bold">Location</p>
            SoHo 930 New Delhi, India
          </div>
        </div>
        <div className="md:w-1/4">
          <p className="my-5 text-2xl font-bold">Newsletter signup</p>
          <form action="" className="md:w-48 w-full">
            <input
              type="text"
              placeholder="Email"
              className="block w-[100%] rounded border border-gray-300 bg-transparent p-2"
            />
            <button
              type="submit"
              className="mt-2 w-[100%] rounded bg-green-600 p-2 text-white"
            >
              Submit
            </button>
          </form>
          <p className="my-10">
            Sign up to our monthly newsletter for useful articles, tips and
            tricks
          </p>
          <div className="flex gap-2 invert">
            <img
              src="https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png"
              className="w-8 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png"
              className="w-8 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-512.png"
              className="w-8 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
            <img
              src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-256.png"
              className="w-8 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-256.png"
              className="w-8 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-sm text-gray-500">
        © 2023 CharjKaro. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
