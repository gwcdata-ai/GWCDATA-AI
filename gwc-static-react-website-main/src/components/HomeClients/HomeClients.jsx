import React from "react";

import styles from "../../commoncss/home.module.css";

import client1 from "../../assets/images/homeClient/Client1.svg";
import client2 from "../../assets/images/homeClient/Client2.svg";
import client3 from "../../assets/images/homeClient/Client3.svg";
import client4 from "../../assets/images/homeClient/Client4.svg";
import { Col, Row } from "react-bootstrap";
import useMedia from "../../hooks/useMedia";

import AOS from "aos";
AOS.init({
  duration: 1500,
});

const HomeClients = () => {
  const isMobile = useMedia("(max-width:600px)");
  const isMiniLap = useMedia("(max-width:1200px)");

  return (
    <div className={styles.frameParent}>
      <Row
        className=""
        style={{ width: isMobile ? "100%" : isMiniLap ? "100%" : "75%" }}
      >
        <Col xs={6} md={3} className="mb-md-0 mb-2">
          <div className={styles.groupParent} data-aos="fade-left">
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon8} alt="" src={client1} />
              {/* <img className={styles.archiveIcon1} alt="" src="/archive@2x.png" /> */}
            </div>
            <div className={styles.div}>20 +</div>
            <div className={styles.happyClients}>Happy Clients</div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-md-0 mb-2">
          <div className={styles.groupParent1} data-aos="fade-right">
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon8} alt="" src={client2} />
            </div>
            <div className={styles.div}>120 +</div>
            <div className={styles.happyClients}>Certified Experts</div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className={styles.groupParent2} data-aos="fade-left">
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon8} alt="" src={client3} />
            </div>
            <div className={styles.div}>80 +</div>
            <div className={styles.happyClients}>Solutions Provided</div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className={styles.groupParent3} data-aos="fade-right">
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon8} alt="" src={client4} />
            </div>
            <div className={styles.div}>8 </div>
            <div className={styles.happyClients}>Locations</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeClients;
