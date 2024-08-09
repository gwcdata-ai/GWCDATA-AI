import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./case.module.css";

import { Link } from "react-router-dom";

const CaseStudy = ({ caseAllData }) => {
  return (
    <Container fluid>
      <Container>
        <Row>
          <div className="mt-5">
            <p className={` ${styles.case_title} `}>Curated Reads</p>
          </div>
        </Row>
        <Row>
          <Col md={12}>
            <Row>
              {caseAllData.map((data) => {
                const { id, date, heading, days, views, img } = data;
                return (
                  <Col md={4} key={id}>
                    <Link to={`/case-studies/${data?.slug}`}>
                      <Card className={` ${styles.card_bg} mb-5`}>
                        <Card.Img variant="top" alt={heading} src={img} />
                        <Card.Text>
                          <div className={` ${styles?.text_section} `}>
                            <h6 className={` ${styles?.main_para} mb-0`}>
                              {heading}
                            </h6>
                          </div>
                        </Card.Text>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CaseStudy;
