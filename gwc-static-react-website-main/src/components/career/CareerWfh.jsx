import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./jobpost.module.css";

import bannerImg from "../../assets/images/career/backbanner.png";
import image2 from "../../assets/images/career/careerwfh.png";

import AOS from "aos";
import { Link } from "react-router-dom";
AOS.init({
    duration: 1500,
});

const CareerWfh = () => {
    return (
        <Container
            fluid
            // className="pt-2 pb-5"
            className={`${commonStyles.banner_container_img}  py-lg-5`}
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <section className="">
                <Container className="">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col lg={6} md={6} className="py-md-0 py-5" data-aos="fade-right">
                            <div className="">

                                <p className={styles?.text2}>
                                    Bringing Offices to Your HomeTowns
                                </p>
                                <p className={styles?.text1}>
                                    Work From HomeTown
                                </p>
                              
                                <Link to="/wfh" >
                                    <Button className={`${commonStyles.banner_button}`}>
                                        More Details
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6} md={6} className="pb-md-0 pb-5 d-flex justify-content-center" data-aos="fade-left">
                            <img src={image2} alt="" className=" mx-lg-5" width="70%" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default CareerWfh
