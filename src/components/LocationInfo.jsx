const LocationInfo = () => {
  const locations = [
    {
      address: "Vasant Vihar, Outer Ring Road",
      location: "https://maps.app.goo.gl/g2GegxK6Vz6kPQUr8",
    },
    {
      address: "Adchini",
      location: "https://maps.app.goo.gl/GL1AqMNRVocaR7rV9",
    },
    {
      address: "RK Puram Sangam Cinema",
      location: "https://maps.app.goo.gl/EJRZbjJE8BeQHN4G8",
    },
    {
      address: "Andheriya Mod",
      location: "https://maps.app.goo.gl/wxpypV1NzYkuWtzz5",
    },
    {
      address: "Siri Fort Auditorium",
      location: "https://maps.app.goo.gl/1D92Lrj6W7RFbsTt5",
    },
    {
      address: "Near GK 1 Nala",
      location: "https://maps.app.goo.gl/p4syWB1b2kCuotr19",
    },
    {
      address: "Saket, Select City Walk",
      location: "https://maps.app.goo.gl/NCrf7Y3dtpW87aGBA",
    },
    {
      address: "Qutub minar",
      location: "https://maps.app.goo.gl/ACDsmNpAUdZu3sKaA",
    },
    {
      address: "Khel Gaon, Malviya Nagar",
      location: "https://maps.app.goo.gl/ciF8HHpj2nKZ5FgZ6",
    },
    {
      address: "LSR College",
      location: "https://maps.app.goo.gl/BjyNLwqDahkoyAyr5",
    },
    {
      address: "RTR Marg",
      location: "https://maps.app.goo.gl/KoeA6nH2YgAcdKbo9",
    },
    // Add more location objects as needed
  ];

  return (
    <div>
      
      <div
        id="location"
        className="hidden md:flex flex-col items-center justify-center rounded-3xl bg-[url('https://i.ibb.co/qdbqgWq/imgonline-com-ua-Replace-Color-y-EYGrp-Rd-Q4ja-Sp.png')] bg-cover bg-center bg-[#36aa4a] py-10 text-center font-poppins " loading="lazy"
      >
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
            loading="lazy"
          />
          <div className="w-96 carousel rounded-box">
            {locations.map((locations, index) => (
              <div
                key={index}
                className="card h-[30rem]  bg-base-100 shadow-xl carousel-item w-full"
              >
                <figure className="px- pt-10">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg49p1ch1U08LqvkvJ_EyKTg30KXe0XgUfRg&usqp=CAU"
                    alt="Shoes"
                    className="rounded-xl h-32"
                  />
                </figure>

                <div className="card-body items-center text-center relative">
                  <h1 className="absolute right-1 text-4xl bottom-48"> →</h1>
                  <h2 className="card-title text-blue-500">
                    {" "}
                    <span className="text-4xl"> {locations.address} </span>
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
                    <a
                      className="btn btn-primary hover:bg-blue-700"
                      href={locations.location}
                      target="_blank" // Opens the link in a new tab
                      rel="noopener noreferrer" // Recommended for security reasons
                    >
                      Find Out
                    </a>
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
