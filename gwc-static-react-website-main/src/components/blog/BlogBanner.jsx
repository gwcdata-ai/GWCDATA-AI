import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import BannerBgImg from "../../assets/images/Blog/bannerBlog.png";


// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "../../commoncomponents/banner/commonBanner.module.css";

export const BlogBanner = () => {
  return (
    <Container
      fluid
      className={`${commonStyles.banner_container_img} py-lg-5 mt-5`}
      style={{
        backgroundImage: `url(${BannerBgImg})`,
      }}
    >
      <section className="py-4">
        <Container className="py-4 mt-md-0 mt-4">
          <Row className="d-flex">
            <Col lg={12} className="py-lg-5">
              <p className={`${styles.breadcrumbs} mb-4`}>

                <span>

                  <a
                    href='/'
                    className={`${styles.breadcrumbs} mb-3`}
                  >
                    Home
                  </a>

                  <span> / </span>
                </span>
                Blog
              </p>
             

              <h1 className={`${styles.banner_title} mb-4`} />
              <p className={`${styles.banner_title} mb-4`} >
                Blogs
              </p>
              <p className={`${styles.banner_sub_title} mb-4`} >
              Explore latest industry insights. Find blogs curated according to your needs!
                            </p>
              <div className="div">
                <Form.Control type="search" placeholder="Search" className={  `${styles.search_logo} w-50  `}  />
              </div>
          

            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};