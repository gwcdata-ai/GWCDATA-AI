import React, { useEffect } from "react";
import styles from "../../commoncss/ContactUs.module.css";
import ContactUsBanner from "../../components/ContactUs/ContactUsBanner/ContactUsBanner";
import Location from "../../components/ContactUs/Location/Location";

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
      <ContactUsBanner />
      <Location />
    </div>
  );
};

export default Contact;
