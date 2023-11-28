const LocationInfo = () => {
  const locations = [
    {
      address: "Vasant Vihar, Outer Ring Road",
    },
    {
      address: "Adchini",
    },
    {
      address: "RK Puram Sangam Cinema",
    },
    {
      address: "Andheriya Mod",
    },
    {
      address: "Siri Fort Auditorium",
    },
    {
      address: "Near GK 1 Nala",
    },
    {
      address: "Saket, Select City Walk",
    },
    {
      address: "Qutub minar",
    },
    {
      address: "Khel Gaon, Malviya Nagar",
    },
    {
      address: "LSR College",
    },
    {
      address: "RTR Marg",
    },
    // Add more location objects as needed
  ];

  return (
    <div>
      <div id="location" className="hidden md:flex flex-col items-center justify-center rounded-3xl bg-[#36aa4a] py-10 text-center font-poppins ">
        <h1 className="pb-2 pt-10 text-4xl font-bold text-white">
          CHARJKARO STATION LOCATION
        </h1>
        <p className="px-10 text-left text-lg md:text-center text-white">
          CharjKaro has a network of 300+ EV Charging Stations spread across
          Delhi. Presenting a chain of reliable charging options in Delhi
        </p>
        <div className="flex justify-center items-center px-36 my-10">
          <img
            src="https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png"
            alt=""
            className="mr h-[30rem] w-2/3 rounded-3xl"
          />
          <div className="w-96 carousel rounded-box">
            {locations.map((location, index) => (
              <div
                key={index}
                className="card h-[30rem]  bg-base-100 shadow-xl carousel-item w-full"
              >
                <figure className="px- pt-10">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg49p1ch1U08LqvkvJ_EyKTg30KXe0XgUfRg&usqp=CAU"
                    alt="Shoes"
                    className="rounded-xl h-36"
                  />
                </figure>

                <div className="card-body items-center text-center relative">
                  <h1 className="absolute right-1 text-4xl bottom-48"> →</h1>
                  <h2 className="card-title text-blue-500">
                    {" "}
                    <span className="text-4xl"> {location.address} </span>
                  </h2>

                  <span className="text-xl"> </span>
                  <p className="text-green-400">
                    {" "}
                    <span className="text-4xl font-semibold ">
                      300+ EV
                    </span>{" "}
                    <br /> Charging Stations
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Find Out</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
