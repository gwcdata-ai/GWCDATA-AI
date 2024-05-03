import React from 'react'
import { Col, Container, Row, Form, Card, Button } from 'react-bootstrap'
import styles from "./work.module.css";
import { WcardData } from './data';

const WorksCard = () => {
    return (
        <Container fluid style={{ backgroundColor: '#6F2B8C' }} >
            <Container className="mt-5" >
                <Row>
                    <div className="div">
                        <h3 className={` ${styles?.title} mt-5`}>How it Works​</h3>
                    </div>
                    {WcardData.map((data) => {
                        const { id, logo, para, head } = data;
                        return (
                            <Col md={4} key={id} className='mb-5'>
                                <Card className={` ${styles?.work_card} mt-3`}>
                                    <Card.Img variant="top" src={logo} className='w-25 mt-2' />
                                    <div>
                                        <p className={` ${styles?.card_title} `}>{head}</p>
                                        <p className={` ${styles?.card_para_title} mt-2 mb-0`}>{para}</p>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        </Container>
    )
}

export default WorksCard
