import React from 'react'
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../dbt.module.css";
import { DbtsliderCardData } from './dbtsliderData';

const DbtSlider = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => (
            <div className="ft-slick__dots--custom mt-4">
                <div className="loading" />
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container className="slider-container mt-4">
            <Slider {...settings}>
                {DbtsliderCardData.map((data) => {
                    const { id, title, description, image } = data;
                    return (
                        <Card key={id} className={`${styles.down_carousel_card} mb-4`} >
                            <Row className="">
                                <Col md={6}>
                                    <img src={image} alt="Icon" className="w-100 h-100" style={{ borderRadius: "20px" }} />
                                </Col>
                                <Col md={6} className="mt-lg-4 px-lg-4 p-lg-5">
                                    <div className={`${styles.title_card} mt-lg-5 mb-3 fw-bold`}>{title}</div>
                                    <div style={{ color: "#667085" }} className={`${styles.description_card}`}>
                                        {description}
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                    )
                })}

            </Slider>
        </Container >
    )
}

export default DbtSlider


// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import styles from "../dbt.module.css";
// import newStyles from "../../../commoncss/Home.module.css";
// import useMedia from "../../../hooks/useMedia";
// import AOS from "aos";
// import { DbtsliderCardData } from "./dbtsliderData";

// const ProductAllCard = ({ data }) => {
//     const isMobile = useMedia("(max-width:600px)");

//     const [hover, setHover] = useState(false);

//     const handleMouseEnter = () => {
//         setHover(true);
//     };

//     const handleMouseLeave = () => {
//         setHover(false);
//     };

//     return (
//         <Row>
//             <div
//                 className={`${isMobile ? styles.BenefitSectionBox1 : styles.BenefitSectionBox
//                     }`}
//                 data-aos="flip-down"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//             >
//                 <Row className="">
//                     <Col md={6}>
//                         <img src={data?.image} alt="Icon" className="" width="90%" />
//                     </Col>
//                     <Col md={6} className="mt-lg-4">
//                         <div className={`${styles.title_card} mt-lg-5 mb-3 fw-bold`}>{data.title}</div>
//                         <div style={{ color: "#667085" }} className={`${styles.description_card}`}>
//                             {data.description}
//                         </div>
//                     </Col>
//                 </Row>

//             </div>

//         </Row>

//     );
// };

// const DbtSlider = () => {
//     const isMobile = useMedia("(max-width:600px)");

//     useEffect(() => {
//         AOS.init({
//             offset: 200,
//             duration: 1500,
//             easing: "ease-in-sine",
//             delay: 100,
//         });
//         AOS.refreshHard();
//     }, []);
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         className: "center",
//         initialSlide: 0,
//         autoplaySpeed: 3000,
//         nextArrow: isMobile ? false : <SampleNextArrow />,
//         prevArrow: isMobile ? false : <SamplePrevArrow />,
//         appendDots: (dots) => <ul>{dots}</ul>,
//         customPaging: (i) => (
//             <div className="ft-slick__dots--custom">
//                 <div className="loading" />
//             </div>
//         ),
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 0,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 0,
//                     dots: true,
//                     arrows: false,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: true,
//                     arrows: false,
//                 },
//             },
//         ],

//     };

//     function SampleNextArrow(props) {
//         const { className, style, onClick } = props;
//         return (
//             <div
//                 className={className}
//                 style={{
//                     ...style,
//                     display: "block",
//                     height: "100%",
//                     fontSize: "0px",
//                     width: "180px",
//                     position: "absolute",
//                     right: "-65px",
//                 }}
//                 onClick={onClick}
//             />
//         );
//     }

//     function SamplePrevArrow(props) {
//         const { className, style, onClick } = props;
//         return (
//             <div
//                 className={className}
//                 style={{
//                     ...style,
//                     display: "block",
//                     height: "30px",
//                     width: "40px",
//                     borderRadius: "50%",
//                     zIndex: "1",
//                 }}
//                 onClick={onClick}
//             />
//         );
//     }

//     return (
//         <div className="mt-5" >
//             <Row className="mt-5">
//                 <Col xs={12} md={12} lg={12} className="w-100 ">
//                     <Slider {...settings} className="m-0 p-0">
//                         {DbtsliderCardData?.map((data) => (
//                             <ProductAllCard data={data} />
//                         ))}
//                     </Slider>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default DbtSlider;

