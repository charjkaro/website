import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

const Footer = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const todoRef = collection(db, "newsletter");
    await addDoc(todoRef, {
      item: event.target.email.value, // Corrected here
    });
    event.target.reset();
    alert("Thank you for signing up for newsletter");
  };

  return (
    <div className="  bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/ground.png?alt=media&token=4ad5b176-5662-4baa-80cd-9e59af8f20cb')] bg-cover bg-center">
      <div className="md:px-30 justify-between rounded-3xl rounded-b-none bg-[url('')] bg-cover bg-no-repeat p-10 font-poppins text-white md:flex">

        <img
          src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/logowhite-removebg-preview.png?alt=media&token=2f63e764-5a4c-474a-a081-5c234e2bf01d"
          alt=""
          className="  md:w-[15rem ] md:h-[15rem] "
        />
        <div className="flex flex-col items-start">
          <p className="py-2 text-3xl font-bold">Contact info</p>

          <div className="py-2">
            <p className="text-2xl font-bold">Call us</p>
            <a href="tel:+91112345678">+91-11-234-5678</a> <br />
            <a href="tel:+91112345678">+91-11-234-5678</a>
          </div>
          <div className="py-2">
            <p className="text-2xl font-bold">Email</p>
            <a href="mailto:info@charjkaro.com">
              <p>info@charjkaro.com</p>
            </a>
          </div>

          <div className="py-2">
            <p className="text-2xl font-bold">Location</p>
            SoHo 930 New Delhi, India
          </div>
        </div>
        <div className="md:w-1/4">
          <p className=" text-2xl font-bold">Newsletter signup</p>
          <form onSubmit={handleSubmit} className="md:w-48 w-full">
            <input
              type="text"
              placeholder="Email"
              name="email"
              required
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
            <a
              href=" https://www.facebook.com/profile.php?id=100093408431168"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png"
                className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                alt=""
              />
            </a>
            <a
              href=" https://www.instagram.com/_charjkaro_/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png"
                className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                alt=""
              />
            </a>
            <a
              href=" https://www.linkedin.com/company/96009890/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-512.png"
                className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/charjkaro"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-256.png"
                className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                alt=""
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCUDXyzulIrLaMbV6v9_iJyA"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-256.png"
                className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} CharjKaro. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
