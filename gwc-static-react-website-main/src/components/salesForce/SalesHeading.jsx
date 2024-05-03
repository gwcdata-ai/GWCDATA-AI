import React from 'react'
import styles from "./sales.module.css";
import { Col, Container, Row } from 'react-bootstrap';

const SalesHeading = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col md={12}>
                    <h3 className={styles.title_head}> Adapt to Evolving Market Demands with Salesforce</h3>
                    <p className={` ${styles.para} mb-5 `}>GWC’s dedicated team ensures that Salesforce aligns seamlessly with your evolving business needs, driving efficiency, innovation, and a customer-centric approach.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default SalesHeading
