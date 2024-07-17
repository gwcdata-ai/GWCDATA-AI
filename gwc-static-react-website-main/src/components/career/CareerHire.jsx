import React from "react";
import { Col, Container, Row, Form, Card, Button } from "react-bootstrap";
import styles from "./jobpost.module.css";
import ccc from "../../assets/images/career/ccc.png";
import useMedia from "../../hooks/useMedia";

const CareerHire = () => {
  const isMobile = useMedia("(max-width:600px)");

  return (
    <Container className="">
      <Row>
        <div className="div">
          <h2 className={` ${styles?.title2} mt-5`}>How We Hire</h2>
          <p className={` ${styles?.card_para_title2} mt-2 mb-0`}>
            Empower your career journey. At GWC, we seek skilled individuals who
            are ready to enrich their abilities with our expertise.
          </p>
        </div>

        <Col lg={6} md={12} className="mt-2">
          <Card className={` ${styles?.step_card} mt-5`}>
            <div className={` ${styles?.step_inside} `}>
              <div>
                <Button className={` ${styles?.step_btn}`}>Step 1</Button>
              </div>
              <h3 className={` ${styles?.step_para} mb-0`}>
                Job Opportunities & Application Submission
              </h3>
            </div>
          </Card>

          <Card className={` ${styles?.step_card} my-4`}>
            <div className={` ${styles?.step_inside} `}>
              <div>
                <Button className={` ${styles?.step_btn}`}>Step 2</Button>
              </div>
              <h3 className={` ${styles?.step_para} mb-0`}>Shortlisting</h3>
            </div>
          </Card>
          <Card className={` ${styles?.step_card} my-4`}>
            <div className={` ${styles?.step_inside} `}>
              <div>
                <Button className={` ${styles?.step_btn}`}>Step 3</Button>
              </div>
              <h3 className={` ${styles?.step_para} mb-0`}>
                Business/Technical Interview
              </h3>
            </div>
          </Card>
          <Card className={` ${styles?.step_card} my-4`}>
            <div className={` ${styles?.step_inside} `}>
              <div>
                <Button className={` ${styles?.step_btn}`}>Step 4</Button>
              </div>
              <h3 className={` ${styles?.step_para} mb-0`}>HR Interview</h3>
            </div>
          </Card>
          <Card className={` ${styles?.step_card} my-4`}>
            <div className={` ${styles?.step_inside} `}>
              <div>
                <Button className={` ${styles?.step_btn}`}>Step 5</Button>
              </div>
              <h3 className={` ${styles?.step_para} mb-0`}>Decision & Offer</h3>
            </div>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className={` ${styles?.step_card2} mt-5`}>
            <div className={` ${styles?.card_inside} `}>
              <div>
                <img src={ccc} alt="" width="90%" />
              </div>
              <p className={` ${styles?.img_para} my-3`}>
                A Recruiter/Technical panel will screen your application. We
                will contact you for further details if your credentials match
                our requirements.
              </p>
              {/* <Button className={` ${styles?.banner_button2}`}>Explore Job Opportunities
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M5 12.6206H19M19 12.6206L12 5.62061M19 12.6206L12 19.6206" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Button> */}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CareerHire;
