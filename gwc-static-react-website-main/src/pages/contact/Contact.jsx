import React, { useEffect, useState } from "react";
// import styles from "../../commoncss/ContactUs.module.css";
import ContactUsBanner from "../../components/ContactUs/ContactUsBanner/ContactUsBanner";
import Location from "../../components/ContactUs/Location/Location";
import { Helmet } from "react-helmet-async";

import styles from "../../commoncss/Home.module.css";
import Cricket_Poster from "../../assets/images/Banner/cricket.png";
import useMedia from "../../hooks/useMedia";

const Contact = () => {
  const isMobile = useMedia("(max-width:500px)"); // Mobile Banner
  const [isVisible, setIsVisible] = useState(false);
  // console.log("state", isVisible);
  const toggleVisibility = (e) => {
    setIsVisible(!isVisible);
    // console.log("clicked");
  };
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
      {!isVisible && (
        <section>
          <div
            className={`${
              isMobile
                ? styles.poster_section_div_mobile
                : styles.poster_section_div
            }`}
          >
            <div
              onClick={(e) => toggleVisibility(e)}
              className={`${
                isMobile
                  ? styles.poster_svg_parent_mobile
                  : styles.poster_svg_parent
              }`}
            >
              <div
                style={{
                  cursor: "pointer",
                  zIndex: 1,
                  // border: "2px solid blue",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="20"
                  height="19"
                  style={{
                    cursor: "pointer",
                    zIndex: 1,
                  }} // Ensure cursor pointer is applied
                >
                  <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`${
                isMobile
                  ? styles.poster_image_outer_div_mobile
                  : styles.poster_image_outer_div
              }`}
            >
              <img
                src={Cricket_Poster}
                alt="Cricket_Poster"
                className={`${
                  isMobile ? styles.poster_image_mobile : styles.poster_image
                }`}
              />
            </div>
            <div className={`${styles.poster_button_outer_div}`}>
              <button
                className={`${
                  isMobile
                    ? styles.poster_button_div_mobile
                    : styles.poster_button_div
                }`}
              >
                <a
                  href="https://events.mhealth.ai/domo/domo-cxo-cricket-league"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "unset", textDecoration: "none" }} // Ensure link is styled correctly
                >
                  Register Now
                </a>
              </button>
            </div>
          </div>
        </section>
      )}
      <ContactUsBanner />
      <Location />
    </div>
  );
};

export default Contact;
