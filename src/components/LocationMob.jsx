/* eslint-disable react/prop-types */
const LocationMob = ({ id }) => {
  const locations = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/delhi-city-maps.jpg?alt=media&token=e2f7f3c3-2a73-4218-a56e-dfe84f604101",
      address: "Vasant Vihar, Outer Ring Road",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/g2GegxK6Vz6kPQUr8",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/delhi-city-maps.jpg?alt=media&token=e2f7f3c3-2a73-4218-a56e-dfe84f604101",
      address: "Adchini, Saket, New Delhi",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/GL1AqMNRVocaR7rV9",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/delhi-city-maps.jpg?alt=media&token=e2f7f3c3-2a73-4218-a56e-dfe84f604101",
      address: "RK Puram Sangam Cinema",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/EJRZbjJE8BeQHN4G8",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/delhi-city-maps.jpg?alt=media&token=e2f7f3c3-2a73-4218-a56e-dfe84f604101",
      address: "Andheriya Mod, New Delhi",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/wxpypV1NzYkuWtzz5",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/delhi-city-maps.jpg?alt=media&token=e2f7f3c3-2a73-4218-a56e-dfe84f604101",
      address: "Siri Fort Auditorium",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/1D92Lrj6W7RFbsTt5",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/delhi-city-maps.jpg?alt=media&token=e2f7f3c3-2a73-4218-a56e-dfe84f604101",
      address: "Near GK 1 Nala ,New Delhi",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/p4syWB1b2kCuotr19",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/delhi-city-maps.jpg?alt=media&token=e2f7f3c3-2a73-4218-a56e-dfe84f604101",
      address: "Saket, Select City Walk",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/NCrf7Y3dtpW87aGBA",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/delhi-city-maps.jpg?alt=media&token=e2f7f3c3-2a73-4218-a56e-dfe84f604101",
      address: "Qutub minar, New Delhi",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/ACDsmNpAUdZu3sKaA",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/delhi-city-maps.jpg?alt=media&token=e2f7f3c3-2a73-4218-a56e-dfe84f604101",
      address: "Khel Gaon, Malviya Nagar",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/ciF8HHpj2nKZ5FgZ6",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/delhi-city-maps.jpg?alt=media&token=e2f7f3c3-2a73-4218-a56e-dfe84f604101",
      address: "LSR College, New Delhi",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/BjyNLwqDahkoyAyr5",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/delhi-city-maps.jpg?alt=media&token=e2f7f3c3-2a73-4218-a56e-dfe84f604101",
      address: "RTR Marg, New Delhi",
      stations: "300+ EV Charging Stations",
      link: "https://maps.app.goo.gl/KoeA6nH2YgAcdKbo9",
    },
    // Add more location objects as needed
  ];

  return (
    <div
      id={id}
      className="flex items-center justify-center lg:h-screen lg:hidden lg:my-24"
    >
      <div id="locationadd" className="flex-col items-center justify-center rounded-3xl bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/imgonline-com-ua-ReplaceColor-yEYGrpRdQ4jaSp.png?alt=media&token=e9a4fa71-8283-4592-9f71-a7f0debb7a41')] bg-cover bg-center py-10 text-center font-poppins ">
        <h1 className="pb-10 text-4xl font-bold text-white">
          CHARJKARO STATION LOCATION
        </h1>
        <p className="px-10 text-left text-base md:text-center text-white">
          CharjKaro has a network of 300+ EV Charging Stations spread across
          Delhi. Presenting a chain of reliable charging options in Delhi
        </p>
        <div className="flex items-center my-10 carousel carousel-center px-32 space-x-4 rounded-box w-[100vw] ">
 {locations.map((location, index) => (
  <div
    key={index}
    className="card  shadow-black lg:card-side bg-base-100  mx-auto carousel-item -20 h-[28rem] w-80"
  >
    <figure>
      <div
        className="w-80 h-80 bg-contain"
        style={{ backgroundImage: `url(${location.image})` }}
      ></div>
    </figure>
    <div className="card-body  items-center justify-center text-center grid h-[15rem] p-2 ">
      <div>
        <h2 className="card-title text-xl font-bold text-blue-500">
          {location.address}
        </h2>
        <p className="text-xl font-bold text-green-500">
          {location.stations}
        </p>
        <div className="card-actions justify-center">
          <a
            href={location.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Find Out
          </a>
        </div>
      </div>
    </div>
  </div>
 ))}
</div>

        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/JF9FFwy/swipe.png"
            alt=""
            className="w-20 invert"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationMob;
