import Appbanner from "../components/Appbanner";
import ContactForm from "../components/ContactForm";

import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title> Contact CharjKaro | Your EV Charging Solutions</title>
        <meta
          name="description"
          content="Connect with us for inquiries and support on innovative EV charging solutions. Your path to sustainable mobility starts here.
"
        />
        <meta
          name="keywords"
          content="ev charging station,
ev charging station near me,
ev car charging station,
ev charging station india,
ev vehicle charging station,
fast charging station for ev,
charging station near me ev,
ev charging station locator,
charjkaro, charge karo, "
        />
        <link rel="canonical" href="https://charjkaro.com/contact" />
      </Helmet>
      <div>
        {/* <Navbar /> */}

        <ContactForm />

        <Appbanner />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Contact;
