const LocationMob = ({id}) => {
  const locations = [
    {
      image: "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Vasant Vihar, Outer Ring Road",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/g2GegxK6Vz6kPQUr8",
    },
    {
      image: "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Adchini, Saket",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/GL1AqMNRVocaR7rV9",
    },
    {
      image: "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "RK Puram Sangam Cinema",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/EJRZbjJE8BeQHN4G8",
    },
    {
      image: "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Andheriya Mod",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/wxpypV1NzYkuWtzz5",
    },
    {
      image: "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Siri Fort Auditorium",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/1D92Lrj6W7RFbsTt5",
    },
    {
      image: "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Near GK 1 Nala",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/p4syWB1b2kCuotr19",
    },
    {
      image: "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Saket, Select City Walk",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/NCrf7Y3dtpW87aGBA",
    },
    {
      image: "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Qutub minar",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/ACDsmNpAUdZu3sKaA",
    },
    {
      image: "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "Khel Gaon, Malviya Nagar",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/ciF8HHpj2nKZ5FgZ6",
    },
    {
      image: "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "LSR College",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/BjyNLwqDahkoyAyr5",
    },
    {
      image: "https://i.ibb.co/fDRc89d/Screenshot-2023-10-17-at-12-43-21-PM.png",
      address: "RTR Marg",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/KoeA6nH2YgAcdKbo9",
    },
    // Add more location objects as needed
  ];
  

  return (
    <div
      id={id}
      className="flex items-center justify-center h-screen md:hidden my-24"
    >
      <div  className="flex-col items-center justify-center rounded-3xl bg-[url('https://i.ibb.co/qdbqgWq/imgonline-com-ua-Replace-Color-y-EYGrp-Rd-Q4ja-Sp.png')] bg-cover bg-center py-10 text-center font-poppins ">
        <h1 className="pb-10 text-4xl font-bold text-white">
          CHARJKARO STATION LOCATION
        </h1>
        <p className="px-10 text-left text-base md:text-center text-white">
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
              <div className="card-body text-center">
                <h2 className="card-title text-2xl font-bold text-blue-500">
                  {location.address}
                </h2>
                <p className="text-xl font-bold text-green-500">
                  {location.stations}
                </p>
                <div className="card-actions justify-center">
                  <a href={location.link} target="_blank" rel="noreferrer" className="btn btn-primary" >Find Out</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">

          <img src="https://i.ibb.co/JF9FFwy/swipe.png" alt="" className="w-20 invert" />
        </div>
      </div>
    </div>
  );
};

export default LocationMob;
