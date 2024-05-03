import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "./snow.module.css";
import img1 from "../../assets/images/snowFlake/collab (1).png";
import img2 from "../../assets/images/snowFlake/collab (2).png";
import img3 from "../../assets/images/snowFlake/collab (3).png";

const Collaberation = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col md={12}>
                    <h3 className={styles.title}> Capabilities of Snowflake</h3>
                    <p className={` ${styles.para} mb-5`}>Snowflake allows you to securely share and access governed data, tools, applications, and other technologies, all while maintaining privacy.</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <img src={img2} alt="image" className='w-100'/>
                </Col>
                <Col md={6}>
                    <h6 className={` ${styles.title} mt-3`}>Elasticity and Scalability</h6>
                    <p className={styles.para}>Snowflake's architecture is designed for elasticity and scalability, allowing users to easily scale their computing resources up or down based on demand. This helps organizations efficiently manage varying workloads and optimize costs.</p>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col md={6}>
                    <img src={img3} alt="image" className='w-100'/>
                </Col>
                <Col md={6}>
                    <h6 className={` ${styles.title} mt-3`}>Multi-Cloud and Cross-Region Support</h6>
                    <p className={styles.para}>Snowflake is available on multiple cloud platforms (AWS, Azure, Google Cloud), providing users with flexibility and avoiding vendor lock-in. Additionally, Snowflake supports data replication and processing across different regions for improved data availability and performance. </p>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col md={6}>
                    <img src={img1} alt="image"  className='w-100'/>
                </Col>
                <Col md={6}>
                    <h6 className={` ${styles.title} mt-3`}>Separation of Storage and Compute</h6>
                    <p className={styles.para}>Snowflake's unique architecture separates storage and compute resources, allowing organizations to scale these components independently. This separation contributes to cost efficiency and enables users to pay only for the resources they consume. </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Collaberation
