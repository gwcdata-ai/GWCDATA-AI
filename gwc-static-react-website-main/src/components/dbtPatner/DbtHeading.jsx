import React from 'react'
import styles from "./dbt.module.css";
import { Col, Container, Row } from 'react-bootstrap';

const DbtHeading = () => {
  return (
    <Container className='mt-5 mb-2'>
      <Row>
        <Col md={12}>
          <div className="mt-5">
            <p className={`mt-2 ${styles?.title7}`}>
              Solutions
            </p >
            <p className={` ${styles?.title8}`}>
              Unleash the capabilities of your data through a cloud-based platform engineered to expedite production.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default DbtHeading

