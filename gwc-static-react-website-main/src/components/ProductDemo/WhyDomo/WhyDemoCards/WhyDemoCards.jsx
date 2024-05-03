import React from "react";

import styles from "../../../../commoncss/home.module.css";
import styles1 from "./WhyDomoCards.module.css";

import client1 from "../../../../assets/images/homeClient/Client1.svg";
import client2 from "../../../../assets/images/homeClient/Client2.svg";
import client3 from "../../../../assets/images/homeClient/Client3.svg";
import client4 from "../../../../assets/images/homeClient/Client4.svg";
import { Col, Row } from "react-bootstrap";
import AOS from "aos";
AOS.init({
  duration: 1500,
});
const WhyDemoCards = () => {
  return (
    <div>
      <Row className=" mb-md-0 mb-5">
        <Col xs={12} md={4} data-aos="fade-right">
          <div className={styles.groupParent}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon8} alt="" src={client1} />
              {/* <img className={styles.archiveIcon1} alt="" src="/archive@2x.png" /> */}
            </div>
            <div className={styles1.domo1cardtitle}>345 %</div>
            <div className={styles1.domo1cardtext}>ROI over 3 years</div>
          </div>
        </Col>
        <Col xs={12} md={4} data-aos="fade-right">
          <div className={styles.groupParent1}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon8} alt="" src={client2} />
            </div>
            <div className={styles1.domo2cardtitle}>Over $ 1M</div>
            <div className={styles1.domo2cardtext}>in increased revenue</div>
          </div>
        </Col>
        <Col xs={12} md={4} data-aos="fade-left">
          <div className={styles.groupParent2}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon8} alt="" src={client3} />
            </div>
            <div className={styles1.domo3cardtitle}> {`< 6 Month`} </div>
            <div className={styles1.domo3cardtext}>payback period</div>
          </div>
        </Col>
        {/* <Col xs={6} md={4} data-aos="fade-left">
          <div className={styles.groupParent3}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon8} alt="" src={client4} />
            </div>
            <div className={styles1.domo4cardtitle}>30 +</div>
            <div className={styles1.domo4cardtext}>ROI over 3 years</div>
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default WhyDemoCards;
