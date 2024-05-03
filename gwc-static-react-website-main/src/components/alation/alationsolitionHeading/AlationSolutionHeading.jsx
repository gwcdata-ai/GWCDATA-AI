import React from 'react'
import styles from "../../dbtPatner/dbt.module.css";
import { Col, Container, Row } from 'react-bootstrap';

const AlationSolutionHeading = () => {
    return (
        <Container className='mt-5 mb-2'>
            <Row>
                <Col md={12}>
                    <div className="mt-5">
                        <p className={`mt-2 ${styles?.title7}`}>
                            Solutions Offered
                        </p >
                        <p className={` ${styles?.title8}`}>
                            Alation pioneers the modern data catalog and leads its evolution into a platform for data intelligence.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AlationSolutionHeading

