import React from "react";
import { Col, Container, Row, Form, Card, Button } from "react-bootstrap";
import styles from "./work.module.css";
import { HomecardData } from "./data";

const HometownCard = () => {
  return (
    <>
      <Container fluid>
        <Container className="">
          <Row>
            <div className="div">
              <h2 className={` ${styles?.title2} mt-5`}>
                Why Work from Hometown ?​
              </h2>
            </div>
            {HomecardData.map((data) => {
              const { id, img, para, head, alt } = data;
              return (
                <Col md={4} key={id} className="mb-5">
                  <Card className={` ${styles?.home_card} mt-3`}>
                    <Card.Img variant="top" src={img} alt={alt} className="" />
                    <div>
                      <h3 className={` ${styles?.card_title} `}>{head}</h3>
                      <p className={` ${styles?.card_para_title} mt-2 mb-0`}>
                        {para}
                      </p>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default HometownCard;
