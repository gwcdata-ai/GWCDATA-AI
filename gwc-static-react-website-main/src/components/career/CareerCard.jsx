import React from "react";
import { Col, Container, Row, Form, Card, Button } from "react-bootstrap";
import styles from "./jobpost.module.css";
import img1 from "../../assets/images/career/img1.png";
import img2 from "../../assets/images/career/img2.png";
import img3 from "../../assets/images/career/img3.png";
import img4 from "../../assets/images/career/img4.png";

const CareerCard = () => {
  return (
    <>
      <Container fluid>
        <Container className="">
          <Row>
            <div className="div">
              <h1 className={` ${styles?.title2} mt-5`}>Find Your Best Path</h1>
            </div>

            {/* <Col md={4} className='mb-5'>
                            <Card className={` ${styles?.home_card} mt-3 h-100` }>
                                <Card.Img variant="top" src={img1} className='p-3' />
                                <div className='p-3'>
                                    <p className={` ${styles?.card_title} `}>High school graduates</p>
                                    <p className={` ${styles?.card_para_title} mt-2 mb-0`}>College isn’t for everyone. For those looking to dive right into a new world of opportunity, our TechBee program after Class XII might be right for you.</p>
                                </div>
                            </Card>
                        </Col> */}
            <Col md={4} className="mb-5">
              <Card className={` ${styles?.home_card} mt-3 h-100`}>
                <Card.Img
                  variant="top"
                  src={img2}
                  alt="College Graduates"
                  className="p-3"
                />
                <div className="p-3">
                  <h2 className={` ${styles?.card_title} `}>
                    College Graduates
                  </h2>
                  <p className={` ${styles?.card_para_title} mt-2 mb-0`}>
                    Advance into a career built on your terms and discover all
                    we can offer, including learning opportunities, global
                    projects, and the freedom to explore.
                  </p>
                </div>
              </Card>
            </Col>
            <Col md={4} className="mb-5">
              <Card className={` ${styles?.home_card} mt-3 h-100`}>
                <Card.Img
                  variant="top"
                  alt="Experienced Professionals"
                  src={img3}
                  className="p-3"
                />
                <div className="p-3">
                  <h2 className={` ${styles?.card_title} `}>
                    Experienced Professionals
                  </h2>
                  <p className={` ${styles?.card_para_title} mt-2 mb-0`}>
                    If you’re looking for new opportunities to ignite or
                    reignite your career, your experience matters here. Discover
                    how you can begin to make a difference.
                  </p>
                </div>
              </Card>
            </Col>
            <Col md={4} className="mb-5">
              <Card className={` ${styles?.home_card} mt-3 h-100`}>
                <Card.Img
                  variant="top"
                  alt="Career Restart"
                  src={img4}
                  className="p-3"
                />
                <div className="p-3">
                  <h2 className={` ${styles?.card_title} `}> Career Restart</h2>
                  <p className={` ${styles?.card_para_title} mt-2 mb-0`}>
                    Going back to work after taking a break can be overwhelming,
                    our Career Restart program help you feel self-assured while
                    pursuing your professional aspirations.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default CareerCard;
