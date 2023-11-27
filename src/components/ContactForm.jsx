

const ContactForm = () => {
  return (
    <div>
      <div className="form p-10 md:p-20 bg-blue-600 rounded-3xl m-2">
        <h1 className="py-10 text-center font-custom text-6xl font-semibold text-white ">
          Contact us
        </h1>
        <form action="" className=" ">
          <div className="flex-wrap items-center justify-center gap-5 md:flex">
            <input
              type="text"
              placeholder="Name"
              className="mb-4  w-[100%]  rounded-xl border-2 border-gray-600 p-3 md:w-[40%]"
            />
            <input
              type="text"
              placeholder="Email"
              className="mb-4 w-[100%] rounded-xl border-2 border-gray-600 p-3 md:w-[40%]"
            />
            <input
              type="text"
              placeholder="Phone no"
              className="mb-4 w-[100%] rounded-xl border-2 border-gray-600 p-3 md:w-[40%]"
            />
            <input
              type="text"
              placeholder="Company name"
              className="mb-4 w-[100%] rounded-xl border-2 border-gray-600 p-3 md:w-[40%]"
            />
            <textarea
              name=""
              placeholder="Message"
              id=""
              cols="30"
              rows="6"
              className="mb-4 w-[100%] rounded-xl border-2 border-gray-600 p-3 md:w-[80%]"
            ></textarea>
          </div>
          <div className="my-10 text-center">
            <button className="rounded-full  bg-blue-600 border-2 p-4 px-16 text-xl text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
