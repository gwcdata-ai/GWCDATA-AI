import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import ArrowRight from "../../assets/icons/ArrowRight.png";
import AOS from "aos";
import useMedia from "../../hooks/useMedia";
import styles from "../../commoncss/Home.module.css";
import { HomeSolutiondata, HomeSolutiondataMobile } from "./HomeSoltionsData";
import { Col, Container, Row } from "react-bootstrap";
import CustomArrow from "../../ReusableUI/ReusableSvg/ReusableSvg";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

AOS.init({
  duration: 1500,
});

const HomeSolutionsCard = ({ id, data, highlightCard }) => {
  const [hover, setHover] = useState(false);
  const [btnhover, setBtnHover] = useState(false);
  const isLaptop = useMedia("(max-width:1352px)");
  const isMiniLapTop = useMedia("(max-width:1180px)");

  const handleMouseEnter = () => {
    setHover(true);
    highlightCard(id);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleBtnMouseEnter = () => {
    setBtnHover(true);
  };

  const handleBtnMouseLeave = () => {
    setBtnHover(false);
  };

  return (
    <div
      style={{ width: "auto" }}
      className={`${styles.SolutionCard}`}
      data-aos="zoom-in"
    >
      <div
        className={styles.featureText}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: hover ? data?.hoverColor : data?.backgroundColor,
          height: isLaptop ? 350 : isMiniLapTop ? 400 : 320,
        }}
      >
        <div className={styles.icon}>
          <img className={styles.vectorIcon} alt="" src={data?.image} />
        </div>
        <div className={styles.textAndSupportingTextParent}>
          <div className={styles.textAndSupportingText24}>
            <h3
              className={styles.text121}
              style={{ color: hover ? "white" : "black" }}
            >
              {data?.title}
            </h3>

            <div
              className={styles.supportingText37}
              style={{ color: hover ? "white" : "black" }}
            >
              {data?.description}
            </div>
          </div>
          <div
            className={styles.button7}
            onMouseEnter={handleBtnMouseEnter}
            onMouseLeave={handleBtnMouseLeave}
          >
            <div
              className={styles.buttonBase1}
              // style={{ backgroundColor : btnhover ? data?.backgroundColor : 'transparent', padding : btnhover ? "10px" : '', borderRadius : btnhover ? '8px' : '0px' }}
              style={{ color: btnhover ? "white" : "black" }}
            >
              <Link to={data?.link}>
                <div
                  className={styles.text114}
                  style={{ color: btnhover ? "white" : "black" }}
                >
                  Learn more
                </div>
              </Link>
              <CustomArrow color={btnhover ? data?.backgroundColor : "black"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeSolutionsCardMobile = ({ id, data, highlightCard }) => {
  const [hover, setHover] = useState(false);
  const [btnhover, setBtnHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
    highlightCard(id);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleBtnMouseEnter = () => {
    setBtnHover(true);
  };

  const handleBtnMouseLeave = () => {
    setBtnHover(false);
  };

  return (
    <div
      style={{ width: "inherit" }}
      className={styles.SolutionCard}
      data-aos="zoom-in"
    >
      <div
        className={styles.featureText}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: hover ? data?.hoverColor : data?.backgroundColor,
        }}
      >
        <div className={`${styles.icon}`}>
          <img className={styles.vectorIcon} alt="" src={data?.image} />
        </div>
        <div className={styles.textAndSupportingTextParent}>
          <div className={styles.textAndSupportingText24}>
            <div
              className={styles.text121}
              style={{ color: hover ? "white" : "black", textAlign: "center" }}
            >
              {data?.title}
            </div>
            <div
              className={styles.button7}
              onMouseEnter={handleBtnMouseEnter}
              onMouseLeave={handleBtnMouseLeave}
            >
              <div style={{ color: btnhover ? "white" : "black" }}>
                <Link to={data?.link}>
                  <div
                    // className={styles.text114}
                    style={{
                      color: btnhover ? "white" : "black",
                      textAlign: "center",
                    }}
                  >
                    Learn more{" "}
                  </div>
                </Link>

                {/* <CustomArrow color={btnhover ? data?.backgroundColor : "black"} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeSolutions = () => {
  const sliderRef = useRef(null); //slideref for slider arrow

  const isMobile = useMedia("(max-width:1024px)");

  const [highlightedCard, setHighlightedCard] = useState(null);

  const highlightCard = (id) => {
    setHighlightedCard(id);
  };

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const solutionsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#our-solutions" && solutionsRef.current) {
      solutionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  const settings = {
    slidesToScroll: 2, // Number of slides to scroll
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    rows: 2, // Number of rows
    dots: true,
    slidesToShow: 2,
    infinite: true,
    // slidesToScroll: 1,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom mt-5">
        <div className="loading" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
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
          rows: 2,
          dots: true,
          arrows: true,
          infinite: false, // Disable infinite looping
          mobileFirst: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1, // Number of slides to scroll
          speed: 500,
          rows: 1, // Number of rows
          dots: true,
          slidesToShow: 1,
          mobileFirst: true,
          infinite: false, // Disable infinite looping
        },
      },
    ],
  };

  // slider arrow code
  const previous = () => {
    // console.log("Previous button clicked");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const next = () => {
    // console.log("Next button clicked");
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <Container
        fluid
        className="HomeSolutions"
        ref={solutionsRef}
        id="our-solutions"
      >
        <div className={`${styles.featuresSection} ${hover ? "hover" : ""}`}>
          <div className={styles.content2}>
            <div className={styles.headingAndSupportingText10}>
              <div className={`${styles.headingAndSubheading7} mt-5`}>
                {/* <div className={`${styles.subheading} mt-sm-4`}>
                  Our Solutions
                </div> */}
                <Container>
                  <h2
                    className={`${styles.meetOurLeadershipContainer} mb-4 mt-md-5 mt-5 mx-lg-5 px-lg-5 px-3 mx-3`}
                  >
                    Fast-Track The Integration of AI Throughout Your Entire
                    business Value Chain
                  </h2>
                </Container>
              </div>
              {/* <div className={`mb-4 ${styles.supportingText36}`}>
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </div> */}
            </div>
          </div>
          {isMobile ? (
            HomeSolutiondataMobile.map((data) => (
              <HomeSolutionsCardMobile
                key={data.id}
                id={data.id}
                data={data}
                highlightCard={highlightCard}
                isHighlighted={highlightedCard === data.id}
              />
            ))
          ) : (
            // <Slider ref={sliderRef} {...settings}>
            <Container>
              <Row className="">
                {HomeSolutiondata.map((data) => (
                  <Col md={6}>
                    <HomeSolutionsCard
                      key={data.id}
                      id={data.id}
                      data={data}
                      highlightCard={highlightCard}
                      isHighlighted={highlightedCard === data.id}
                    />
                  </Col>
                ))}
              </Row>
            </Container>

            // </Slider>
          )}
        </div>
      </Container>
    </>
  );
};

export default HomeSolutions;
