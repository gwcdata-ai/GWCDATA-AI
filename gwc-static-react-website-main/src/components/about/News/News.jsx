import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import { newsData } from "./NewsData";

import banner from "../../../assets/images/about/naveen.jpeg";
import banner1 from "../../../assets/images/ceritficate.png";

import commonStyles from "../../../commoncss/common.module.css";
import styles from "./news.module.css";
import useMedia from "../../../hooks/useMedia";
import AOS from "aos";
import { Link } from "react-router-dom";
AOS.init({
  duration: 1500,
});
const News = () => {
  const isMobile = useMedia("(max-width:600px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    // <Container fluid>
    //   <Row className="SliderSection">
    //     {/* <Col md={12}> */}
    //     <Slider {...settings} className="m-0 p-0">
    //     {newsData.map((item, index) => (
    //     <div key={index} style={{ width: index % 2 === 0 ? '70%' : '30%' }}>
    //       {/* You can customize the card content here */}
    //       <div className="card">{item.desc}</div>
    //     </div>
    //   ))}
    //     </Slider>
    //   </Row>
    // </Container>
    <Container fluid className={`${commonStyles.banner_container_img} pt-5`}>
      <section className="newCardsSection">
        <Container className="">
          <Row className="">
            <Col md={9} className="mb-md-0 mb-4">
              <h2 className={`mb-2 ${styles.sub_title}`}> CEO Insights</h2>
              <button className={`mb-2 ${styles.btn_down}`}>
                Top 10 CEO under 40
              </button>
              <h3 className={`mb-4 ${styles.title}`}>
                {" "}
                Naveen Kumar: Thinking Growth For The Society At Large (Work
                From Hometown)
              </h3>
              <p className={`mb-0 ${styles.text}`}>
                {" "}
                India, over the last decade, has transformed into a powerhouse
                of Software and Information Technology capabilities. So much so
                that today India is the third most exciting startup ecosystem in
                the world. Every small town in the country has at least six out
                of 10 youngsters who aspire to be an entrepreneur and dream of
                leading a self-founded organization. Some have it easy, while
                some go the extra mile to build it for themselves.
              </p>
            </Col>
            <Col md={3}>
              <a
                href="https://www.ceoinsightsindia.com/leader/naveen-kumar-thinking-growth-for-the-society-at-large-work-from-hometown-cid-5203.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={banner}
                  className={` ${styles.zoomable_image}`}
                  alt="Description of the image"
                />
              </a>
              <a
                href="https://www.ceoinsightsindia.com/leader/naveen-kumar-thinking-growth-for-the-society-at-large-work-from-hometown-cid-5203.html"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={3}>
              {/* <img
                src={banner1}
                className="w-100"
                alt=""
                style={{ borderRadius: "16px" }}
              /> */}
              <a
                href="https://startup.siliconindia.com/vendor/gwc-dataai-navigating-the-road-to-cloud-data-analytics-ai-beyond-cid-23046.html#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={banner1}
                  className={` ${styles.zoomable_image}`}
                  alt="Description of the image"
                />
              </a>
              <a
                href="https://startup.siliconindia.com/vendor/gwc-dataai-navigating-the-road-to-cloud-data-analytics-ai-beyond-cid-23046.html#"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </Col>
            <Col md={9} className="mb-md-0 mb-4">
              <h2 className={`mb-2 ${styles.sub_title}`}>
                {" "}
                Siliconindia Startup City Magazine
              </h2>
              <button className={`mb-2 ${styles.btn_down}`}>
                10 Best Data & AI Startups
              </button>
              <h3 className={`mb-4 ${styles.title}`}>
                {" "}
                GWC DATA.AI: Navigating the Road to Cloud Data Analytics, AI &
                Beyond
              </h3>
              <p className={`mb-0 ${styles.text}`}>
                {" "}
                The Data Analytics industry stands at the forefront of the
                digital revolution. For startups, this sector offers a vast
                landscape of opportunity, propelled by the demand for actionable
                insights. With innovation and strategic navigation, startups can
                carve a niche and revolutionize businesses across diverse
                domains. Leveraging these opportunities, GWC DATA.AI, an up and
                coming startup in this segment, stands as a leader of innovation
                and progress. The firm’s partnership with Google Cloud and
                accreditation as DOMO APAC Certified Partners epitomizes its
                motivation to leverage cutting edge technology.
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={6}
              lg={3}
              className="w-100 mt-5"
              data-aos="flip-right"
            >
              {/* <Slider {...settings} className='m-0 p-0'>
                {newsData.map((item, index) => (
                  <div key={index} className={`${styles.sliderItem} `}>
                    <Card className={`${styles.card}`}>
                      <div className={styles.imageContainer}>
                        <Card.Img
                          variant='top'
                          className={`${styles.ImageNews}`}
                          src={item.image}
                        />
                        <div className={styles.contentOnImage}>
                          <Card.Text className={`text-start ${styles.newsTag}`}>
                            {item.title}
                          </Card.Text>
                          <Card.Title
                            className={`text-start ${styles.newsDesc}`}
                          >
                            {' '}
                            {isMobile && item?.desc.length > 10
                              ? (item?.desc).substr(0, 50) + '...'
                              : item?.desc}
                          </Card.Title>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </Slider> */}
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default News;
