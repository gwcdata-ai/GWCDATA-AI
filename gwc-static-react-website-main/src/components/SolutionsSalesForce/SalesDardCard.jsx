import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import styles from "./slider.module.css";
import commonStyles from "../../commoncss/common.module.css";
import img1 from "../../assets/images/wfh/h1.png";
import img2 from "../../assets/images/wfh/h2.png";
import img3 from "../../assets/images/wfh/h3.png";
import img4 from "../../assets/images/wfh/h4.png";
import bannerImg from "../../assets/images/about/ourCultureBg.webp";

const SalesDardCard = () => {
    return (
        <Container
            fluid
            className={`${commonStyles.banner_container_img}  py-lg-5`}
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <Container className="" >
                <Row>
                    <div className="div">
                        <h3 className={` ${styles?.title3   } mt-0`}>Sloution SalesForce</h3>
                    </div>

                    <Col md={3} className='mb-5'>
                        <Card className={` ${styles?.home_card2} mt-3 h-100`}>
                            <Card.Img variant="top" src={img1} className='p-3' />
                            <div className='p-3'>
                                <p className={` ${styles?.card_title2} `}>Lorem Ipsum is simply</p>
                                <p className={` ${styles?.card_para_title2} mt-2 mb-0`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='mb-5'>
                        <Card className={` ${styles?.home_card2} mt-3 h-100`}>
                            <Card.Img variant="top" src={img2} className='p-3' />
                            <div className='p-3'>
                                <p className={` ${styles?.card_title2} `}>Lorem Ipsum is simply</p>
                                <p className={` ${styles?.card_para_title2} mt-2 mb-0`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='mb-5'>
                        <Card className={` ${styles?.home_card2} mt-3 h-100`}>
                            <Card.Img variant="top" src={img3} className='p-3' />
                            <div className='p-3'>
                                <p className={` ${styles?.card_title2} `}>Lorem Ipsum is simply</p>
                                <p className={` ${styles?.card_para_title2} mt-2 mb-0`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className='mb-5'>
                        <Card className={` ${styles?.home_card2} mt-3 h-100`}>
                            <Card.Img variant="top" src={img4} className='p-3' />
                            <div className='p-3'>
                                <p className={` ${styles?.card_title2} `}>Lorem Ipsum is simply</p>
                                <p className={` ${styles?.card_para_title2} mt-2 mb-0`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the    </p>
                            </div>
                        </Card>
                    </Col>



                </Row>
            </Container>
        </Container>
    )
}

export default SalesDardCard
