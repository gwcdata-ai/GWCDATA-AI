import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DomoWhyChooseGwc } from "../../../pages/productDemo/DomoProductionPage/domoData";
import styles from "../../about/whyChooseGwc/whyChooseGwc.module.css";
const DomoNewCards = () => {
  return (
    <Container className="mt-5" id="domo-pricing">
      <Row className="d-flex align-items-center justify-content-center mb-4">
        <Col md={12} className="">
          <h2 className={styles.title}> Domo Execution Credits</h2>
          <p className={styles.card_para} style={{ fontSize: 18 }}>
            {" "}
            Unlock the full power of Domo's comprehensive BI platform with our
            Executive Credits model. With pay-as-you-go pricing, your team gains
            access to unlimited users and all features without the hassle{" "}
          </p>
        </Col>
      </Row>
      <Row className="mx-2">
        {DomoWhyChooseGwc?.map((item, index) => (
          <Col
            md={6}
            lg={4}
            key={index}
            className={` mb-md-0 mb-3 g-3`}
            data-aos="fade-up"
            // data-aos-duration="900"
          >
            <div className={`${styles.card_section1}`}>
              {/* <img
                                src={item?.img}
                                style={{ width: "72px", height: "72px" }}
                                alt=""
                            /> */}
              <h3 className={`${styles.card_title5} my-4  mt-0 px-0`}>
                {" "}
                {item?.title}
              </h3>
              <div className="px-3 my-4">
                <p className={`${styles.card_title2} mb-0`}> {item?.title2}</p>
                <p className={`${styles.card_para1} mb-3 mt-2`}>
                  {" "}
                  {item?.description}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DomoNewCards;
