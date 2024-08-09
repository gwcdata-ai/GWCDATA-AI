import React, { useEffect } from "react";
import styles from "../../commoncss/ContactUs.module.css";
import ContactUsBanner from "../../components/ContactUs/ContactUsBanner/ContactUsBanner";
import Location from "../../components/ContactUs/Location/Location";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {};
  }, []);
  return (
    <div className={styles.contactUs}>
      <Helmet>
        <meta
          name="keywords"
          content="Contact Us, Feedback, Inquiry, Contact Form, USA Office, Bengaluru Office, Chennai Office, Coimbatore Office, Hosur Office, Dharmapuri Office, Salem Office, Tirupattur Office, Office Locations"
        />
        <meta
          name="description"
          content="Get in touch with us by filling out the contact form for inquiries or feedback. Find our office locations in the USA and various cities across India including Bengaluru, Chennai, Coimbatore, Hosur, Dharmapuri, Salem, and Tirupattur."
        />
      </Helmet>
      <ContactUsBanner />
      <Location />
    </div>
  );
};

export default Contact;
