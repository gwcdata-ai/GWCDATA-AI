import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./commonBanner.module.css";

export const CommonSectionBanner = ({ commonSectionBannerContent }) => {
  // console.log("commonSectionBannerContent", commonSectionBannerContent);
  return (
    <Container
      fluid
      className={`${commonStyles.banner_container_img2} py-lg-5 py-md-5 py-sm-5 mt-lg-5 `}
      style={{
        backgroundImage: `url(${commonSectionBannerContent?.bannerBg})`,
      }}
    >
      <section className="py-lg-4">
        <Container className="py-4 mt-md-0 mt-4">
          <Row className="d-flex">
            <Col lg={6} className="py-lg-5">
              <p className={`${styles.breadcrumbs} mb-4`}>
                {commonSectionBannerContent?.breadcrumbs && (
                  <>
                    {commonSectionBannerContent?.breadcrumbs?.map(
                      (item, index) => (
                        <span key={index}>
                          {item?.url ? (
                            <a
                              href={item?.url}
                              className={`${styles.breadcrumbs} mb-4`}
                            >
                              {" "}
                              {item?.text}
                            </a>
                          ) : (
                            <p className={`${styles.breadcrumbs_h1}`}>
                              {item?.text}
                            </p>
                          )}
                          {index !==
                            commonSectionBannerContent?.breadcrumbs?.length -
                              1 && <span> / </span>}
                        </span>
                      )
                    )}
                  </>
                )}
              </p>

              {/* <h1 className={`${styles.banner_title} mb-4`}> */}
              {/* {commonSectionBannerContent?.title} */}
              <h2
                className={`${styles.banner_title} mb-4`}
                dangerouslySetInnerHTML={{
                  __html: commonSectionBannerContent?.title.replace(/\n/g, ""),
                }}
              />
              {/* </h1> */}
              <p className={`${styles.banner_para} mb-4`}>
                {commonSectionBannerContent?.para}
              </p>
              {commonSectionBannerContent?.buttontext && (
                <Link to={commonSectionBannerContent?.url}>
                  <Button className={`${styles.banner_button}`}>
                    {" "}
                    {commonSectionBannerContent?.buttontext}{" "}
                  </Button>
                </Link>
              )}
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
