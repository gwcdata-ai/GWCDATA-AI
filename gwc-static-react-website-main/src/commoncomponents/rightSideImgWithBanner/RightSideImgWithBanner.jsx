import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./rightSideImgWithBanner.module.css";
import AOS from "aos";
AOS.init({
  duration: 1000,

});

export const CommonRightSideImgWIthBannerBg = ({
  rightSideImgwithBgBanner,
}) => {
  console.log("rightSideImgwithBgBanner", rightSideImgwithBgBanner);
  return (
    <Container
      fluid
      // className="pt-2 pb-5"
      className={`${commonStyles.banner_container_img}  py-lg-5`}
      style={{ backgroundImage: `url(${rightSideImgwithBgBanner?.bannerBg})` }}
      id={rightSideImgwithBgBanner?.id}
    >
      <section className="">
        <Container className="">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={8} md={6} className="py-md-0 py-5" data-aos="fade-right">
              <div className="">
                <p className={styles?.sub_title}>
                  <strong>{rightSideImgwithBgBanner?.sub_title}</strong>
                </p>
                <p className={styles?.title}>
                  {rightSideImgwithBgBanner?.title}
                </p>
                {rightSideImgwithBgBanner?.description && (
                  <p className={styles?.text}>
                    {rightSideImgwithBgBanner?.description}
                  </p>
                )}
                {rightSideImgwithBgBanner?.list && (
                  <ul className={styles?.text}>
                    {rightSideImgwithBgBanner?.list?.map((item, index) => (
                      <li className='mb-3' dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, "")}} />
                      //  <li key={index}> {item} </li>
                    ))}
                  </ul>
                )}
              </div>
            </Col>
            <Col lg={4} md={6} className="pb-md-0 pb-5" data-aos="fade-left">
              <img
                src={rightSideImgwithBgBanner?.rightImg}
                alt=""
                className="rounded-4 w-100 mx-lg-3"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
