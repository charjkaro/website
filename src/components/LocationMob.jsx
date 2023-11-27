const LocationMob = () => {
  const locations = [
    {
      image:
        "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Vasant Vihar, Outer Ring Road",
      stations: "300+ EV Charging Stations",
    },
    {
      image:
        "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Adchini",
      stations: "300+ EV Charging Stations",
    },
    {
      image:
        "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "RK Puram Sangam Cinema",
      stations: "300+ EV Charging Stations",
    },
    {
      image:
        "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Andheriya Mod",
      stations: "300+ EV Charging Stations",
    },
    {
      image:
        "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Siri Fort Auditorium",
      stations: "300+ EV Charging Stations",
    },
    {
      image:
        "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Near GK 1 Nala",
      stations: "300+ EV Charging Stations",
    },
    {
      image:
        "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Saket, Select City Walk",
      stations: "300+ EV Charging Stations",
    },
    {
      image:
        "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Qutub minar",
      stations: "300+ EV Charging Stations",
    },
    {
      image:
        "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Khel Gaon, Malviya Nagar",
      stations: "300+ EV Charging Stations",
    },
    {
      image:
        "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "LSR College",
      stations: "300+ EV Charging Stations",
    },
    {
      image:
        "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "RTR Marg",
      stations: "300+ EV Charging Stations",
    },
    // Add more location objects as needed
  ];

  return (
    <div
      id="location"
      className="flex items-center justify-center h-screen md:hidden my-10"
    >
      <div className="flex-col items-center justify-center rounded-3xl bg-[#e2eed1] py-10 text-center font-custom ">
        <h1 className="pb-10 text-4xl font-bold text-blue-600">
          CHARJKARO STATION LOCATION
        </h1>
        <p className="px-10 text-left text-base md:text-center">
          CharjKaro has a network of 300+ EV Charging Stations spread across
          Delhi. Presenting a chain of reliable charging options in Delhi
        </p>
        <div className="flex items-center my-10 carousel carousel-center max-w-md px-32 space-x-4 rounded-box w-[100vw] ">
          {locations.map((location, index) => (
            <div
              key={index}
              className=" card lg:card-side bg-base-100 shadow-xl mx-auto carousel-item -20 h-[28rem] w-[90vw]"
            >
              <figure>
                <div
                  className="w-full h-60  bg-contain"
                  style={{ backgroundImage: `url(${location.image})` }}
                ></div>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-blue-500">
                  {location.address}
                </h2>
                <p className="text-xl font-bold text-green-500">
                  {location.stations}
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Check Out</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationMob;
