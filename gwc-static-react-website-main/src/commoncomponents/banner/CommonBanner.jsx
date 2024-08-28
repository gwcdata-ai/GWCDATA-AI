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
        {/* <div
          style={{
            height: "55vh",
            border: "2px solid",
            backgroundColor: "red",
            position: "fixed", // Change from absolute to sticky
            top: "100px", // Adjust this value to determine how far from the top the sticky element should stay
            width: "15%",
            borderRadius: "15px",
            right: 0,
            overflow: "hidden",
            float: "right", // Ensure it's aligned to the right side of its container
          }}
        >
          <div style={{ float: "right", cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width="20"
              height="20"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "pink",
              height: "15vh",
              width: "100%",
            }}
          >
            hello 2
          </div>
        </div> */}
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
