import React from "react";
// import { Link } from "react-router-dom";
import commonstyles from "../../commoncss/Home.module.css";
import styles from "./slider.module.css";
import AOS from "aos";
import { Container, Row, Col, Button } from "react-bootstrap";
import CertifiedImg from "../../assets/images/footer/certifiedNew.png";
AOS.init({
  duration: 1500,
});

const SalesBottom = () => {
  return (
    <div className={commonstyles.frameParent9}>
      <div className={commonstyles.frameParent10}>
        <Container data-aos="fade-left">
          <Row className="d-flex">
            <Col lg={7} className="py-5 px-0">
              <h2 className={`${styles.banner_title} mb-4`}>
                A Great Place To Work Certified with an Emphasis on Diversity &
                Empathy
              </h2>
              <p className={`${styles.banner_para} mb-4`}>
                GWC takes pride in being certified as a Great Place To Work,
                underscoring our commitment to fostering an exceptional
                workplace environment. Rooted in empathy and diversity, our
                workplace culture is built upon shared values, beliefs, and
                behaviors that shape our identity as a company and influence our
                operations. Our open organizational culture encourages
                collaboration and embraces innovative ideas. Within our diverse
                community, we promote mutual respect, transparency, inclusion,
                and opportunities for career progression.
              </p>
              {/* <Link to="/contact-us">
                                <Button className={`${styles.banner_button}`}>
                                    {" "}
                                    Get Started{" "}
                                </Button>
                            </Link> */}
            </Col>
            <Col lg={5}>
              <div className="d-flex justify-content-center">
                <img src={CertifiedImg} alt="image" className="w-25" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SalesBottom;
