import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../../commoncss/common.module.css";
import styles from "./ProductGCPBanner.module.css";
// import { AboutBannerData } from "./ProductBannerData";
import image1 from "../../../assets/images/ProductGCP/gcp.svg";

export const ProductGCPBanner = ({ allData }) => {
  return (
    <Container
      fluid
      className={`${commonStyles.banner_container_img} py-lg-5 pb-md-0 pb-4 mt-5`}
      style={{
        backgroundImage: `url(${allData?.bannerBg})`,
        // height:"495px"
      }}
    >
      <section className="py-4 py-lg-0">
        <Container className="py-1 mt-md-0 mt-4">
          <Row className="d-flex">
            <Col lg={7} className="py-lg-5">
              <p className={`${styles.breadcrumbs} mb-4`}>
                {allData?.breadcrumbs && (
                  <>
                    {allData?.breadcrumbs?.map((item, index) => (
                      <span key={index}>
                        {item?.url ? (
                          <a
                            href={item?.url}
                            className={`${styles.breadcrumbs} mb-4`}
                          >
                            {" "}
                            {item?.text}{" "}
                          </a>
                        ) : (
                          <span>{item?.text}</span>
                        )}
                        {index !== allData?.breadcrumbs?.length - 1 && (
                          <span> / </span>
                        )}
                      </span>
                    ))}
                  </>
                )}
              </p>

              <p className={`${styles.banner_title} mb-4`}>{allData?.title}</p>
              <p className={`${styles.banner_para} mb-4`}>{allData?.para}</p>
              {allData?.buttontext && (
                <>
                  <Button className={`${styles.banner_button} me-4`}>
                    {" "}
                    {allData?.buttontext}{" "}
                  </Button>
                  <Button
                    className={`${styles.banner_button} ${styles.banner_button2}`}
                  >
                    {" "}
                    {allData?.buttontext2}{" "}
                  </Button>
                </>
              )}
            </Col>
            <Col lg={5}>
              <Image src={image1} className={`${styles.GcpImg} w-100`} />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
