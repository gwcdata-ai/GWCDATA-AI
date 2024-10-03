import React from "react";
import styles from "../../../commoncss/ContactUs.module.css";

import loc4 from "../../../assets/images/ContactUs/Location/salem.webp";
import loc5 from "../../../assets/images/ContactUs/Location/dharmapuri.webp";
import loc6 from "../../../assets/images/ContactUs/Location/bangalore.webp";
import loc7 from "../../../assets/images/ContactUs/Location/chennai.webp";
import loc8 from "../../../assets/images/ContactUs/Location/usa.webp";
import loc10 from "../../../assets/images/ContactUs/Location/hosur.webp";
import loc9 from "../../../assets/images/ContactUs/Location/coimbatore.webp";
import loc11 from "../../../assets/images/ContactUs/Location/tirupattur.webp";
import loc12 from "../../../assets/images/ContactUs/Location/uk.jpeg";

import locIcon from "../../../assets/images/ContactUs/Location/locationmap.svg";

import AOS from "aos";
AOS.init({
  duration: 500,
});
AOS.refresh();
const Location = () => {
  return (
    <div className={`${styles.frameGroup} ${styles.frameLocationGroup}`}>
      <div className={styles.ourPresenceParent}>
        {/* <div className={styles.ourPresence}>Our Presence</div> */}
        <div className={styles.locations}>Locations</div>
      </div>

      <div className={styles.frameParent1}>
        <a
          href={"https://maps.app.goo.gl/cnjjHjLJLH5UpCUS8"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22211f" }}
        >
          <div className={styles.rectangleContainer} data-aos="zoom-in">
            <img className={styles.rectangleIcon} alt="USA " src={loc8} />
            <div className={styles.frameChild4} />
            <div className={styles.sawmillRoadSuite200Container}>
              <p className={styles.fillOutThis}>
                600 N Broad St 5 3907, Middletown, DE 19709, USA{" "}
              </p>
            </div>

            <div className={styles.ohioUsa}>USA</div>
            <img className={styles.frameChild5} alt="" src={locIcon} />
          </div>
        </a>
        <a
          href={"https://maps.app.goo.gl/CFfLBfXPcx7oQdnJ8"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22211f" }}
        >
          <div className={styles.rectangleContainer} data-aos="zoom-in">
            <img className={styles.rectangleIcon} alt="USA " src={loc12} />
            <div className={styles.frameChild4} />
            <div className={styles.sawmillRoadSuite200Container}>
              <p className={styles.fillOutThis}>
                11 Grove Cl, Rayleigh SS6 8QU, England{" "}
              </p>
              <p className={styles.fillOutThis}></p>
            </div>

            <div className={styles.ohioUsa}>United Kingdom</div>
            <img className={styles.frameChild5} alt="" src={locIcon} />
          </div>
        </a>

        <a
          href={"https://maps.app.goo.gl/qcm95bnkkV6yFUp6A"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22211f" }}
        >
          <div className={styles.rectangleContainer} data-aos="zoom-in">
            <img className={styles.rectangleIcon} src={loc6} alt="Bengaluru" />
            <div className={styles.frameChild7} />
            <div className={styles.sawmillRoadSuite200Container}>
              Novel Tech Park, HSR Extension, Bengaluru - 560068
            </div>
            <div className={styles.ohioUsa}>Bengaluru</div>
            <img className={styles.frameChild5} alt="" src={locIcon} />
          </div>
        </a>
        <a
          href={"https://maps.app.goo.gl/CkCK2Ahh3bCdTtrJ6"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22211f" }}
        >
          <div className={styles.rectangleContainer} data-aos="zoom-in">
            <img className={styles.frameChild9} alt="Chennai" src={loc7} />
            <div className={styles.frameChild10} />
            <div className={styles.plot1113rd3}>
              Siddharth Building, Industrial Estate, Guindy, Chennai - 600032
            </div>
            <div className={styles.ohioUsa}>Chennai</div>
            <img className={styles.frameChild11} alt="" src={locIcon} />
          </div>
        </a>
      </div>

      <div className={styles.frameParent1}>
        <a
          href={"https://maps.app.goo.gl/zeNj7cgJSfoppPBQA"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22211f" }}
        >
          <div className={styles.rectangleContainer} data-aos="zoom-in">
            <img className={styles.rectangleIcon} alt="Coimbatore" src={loc9} />
            <div className={styles.frameChild4} />
            <div className={styles.sawmillRoadSuite200Container}>
              <p className={styles.fillOutThis}>MayFlowerSignature</p>
              <p className={styles.fillOutThis}>
                Near PSG College of Technology, Coimbatore
              </p>
            </div>
            <div className={styles.ohioUsa}>Coimbatore</div>
            <img className={styles.frameChild5} alt="" src={locIcon} />
          </div>
        </a>
        <a
          href={"https://maps.app.goo.gl/kYNQPsHoswsPwydP9"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22211f" }}
        >
          <div className={styles.rectangleContainer} data-aos="zoom-in">
            <img className={styles.rectangleIcon} src={loc10} alt="Hosur" />
            <div className={styles.frameChild7} />
            <div className={styles.sawmillRoadSuite200Container}>
              Opp. 5 Star Petrol Bunk, NH Bangalore Road, Hosur-635109
            </div>
            <div className={styles.ohioUsa}>Hosur</div>
            <img className={styles.frameChild5} alt="" src={locIcon} />
          </div>
        </a>
        <a
          href={"https://maps.app.goo.gl/FDkzJ23dSbMyY3FL6"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22211f" }}
        >
          <div className={styles.rectangleContainer} data-aos="zoom-in">
            <img className={styles.frameChild9} alt="Dharmapuri" src={loc5} />
            <div className={styles.frameChild10} />
            <div className={styles.plot1113rd3}>
              Opp. Hero Showroom, Bharathipuram, Dharmapuri 636705
            </div>

            <div className={styles.ohioUsa}>Dharmapuri</div>
            <img className={styles.frameChild11} alt="" src={locIcon} />
          </div>
        </a>
        <a
          href={"https://maps.app.goo.gl/fozKS19zAijmsMtx7"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22211f" }}
        >
          <div className={styles.rectangleContainer} data-aos="zoom-in">
            <img className={styles.rectangleIcon} alt="Salem" src={loc4} />
            <div className={styles.frameChild4} />
            <div className={styles.sawmillRoadSuite200Container}>
              <p className={styles.fillOutThis}>Kamarajar Nagar Colony , </p>
              <p className={styles.fillOutThis}>Ammapet, Salem 636014</p>
            </div>
            <div className={styles.ohioUsa}>Salem </div>
            <img className={styles.frameChild5} alt="" src={locIcon} />
          </div>
        </a>
      </div>

      <div className={styles.frameParent1}>
        <a
          href={"https://maps.app.goo.gl/RXZm4NzCM2pRm83n9"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22211f" }}
        >
          <div className={styles.rectangleContainer} data-aos="zoom-in">
            <img
              className={styles.rectangleIcon}
              src={loc11}
              alt="Tirupattur"
            />
            <div className={styles.frameChild7} />
            <div className={styles.sawmillRoadSuite200Container}>
              3/6, CKC Road, Tirupattur - 635501
            </div>
            <div className={styles.ohioUsa}>Tirupattur</div>
            <img className={styles.frameChild5} alt="" src={locIcon} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Location;
