import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import tryimg from "../../assets/images/salesforce/tryImg.png";
import styles from "./sales.module.css";

const Salestry = () => {
    return (
        <Container style={{ backgroundColor: '#FFF' }} className='my-5'>
            <Row>
                <Col md={6}>
                    <img src={tryimg} alt="imgae" className={styles.left_img} />
                </Col>
                <Col md={6}>
                    <div className={`${styles.leftSection} mt-5`}>
                        <h5 className={`${styles.heading}`}> See what GWC can Do for you, your Customers & Partners!</h5>
                        <Button className={`${styles.get_btn} mt-3 `}>
                            Get In Touch
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Salestry
