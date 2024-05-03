import React from 'react'
import styles from "./boomi.module.css";
import { Col, Container, Row } from 'react-bootstrap';

const BoomiHeading = () => {
  return (
      <Container className='mt-5 mb-2' id='solutions-boomi'>
          <Row>
              <Col md={12}>
                  <div className="mt-5">
                      <p className={`mt-2 ${styles?.title7}`}>
                          Solutions
                      </p >
                      <p className={` ${styles?.title8}`}>
                          It involves establishing policies, procedures, and standards to manage data assets, maintain data integrity, and comply with regulations, all while enabling effective decision-making and maximizing the value of data.
                      </p>
                  </div>
              </Col>
          </Row>
      </Container>
  )
}

export default BoomiHeading
