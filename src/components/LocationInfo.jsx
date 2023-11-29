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
        className="hidden lg:flex flex-col items-center justify-center rounded-3xl bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/imgonline-com-ua-ReplaceColor-yEYGrpRdQ4jaSp.png?alt=media&token=e9a4fa71-8283-4592-9f71-a7f0debb7a41')] bg-cover bg-center bg-[#36aa4a] py-10 text-center font-poppins " loading="lazy"
      >
        <h1 className="pb-2 pt-10 md:text-4xl text-2xl  font-bold text-white">
          CHARJKARO STATION LOCATION
        </h1>
        <p className="px-10 text-left text-lg md:text-center text-white">
          CharjKaro has a network of 300+ EV Charging Stations spread across
          Delhi. Presenting a chain of reliable charging options in Delhi
        </p>
        <div className="flex justify-center items-center px-36 my-10">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/delhi-city-maps.jpg?alt=media&token=e2f7f3c3-2a73-4218-a56e-dfe84f604101"
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
                    src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/images.png?alt=media&token=ec004657-e762-42a3-8d59-892f24f50b2a"
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
