import React, { useState, useEffect } from "react";
import DeviceIcon from "../../assets/images/footer/device-mobile.svg";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Form,
  Button,
} from "react-bootstrap";

// CSS
import styles from "./footer.module.css";
import commonStyles from "../../commoncss/common.module.css";
import AOS from "aos";
AOS.init({
  duration: 1000,
});

// JSON
import {
  FooterContentLeft,
  FooterQuickLinks,
  FooterProductLinks,
  FooterResourcesLinks,
  FooterContactUs,
} from "./data";

import { SubscribeForm } from "./Form";
import { Link } from "react-router-dom";

export const FooterComponent = () => {
  // console.log("footerContent", FooterQuickLinks);
  return (
    <Container
      fluid
      className={`${styles.banner_container_img} py-5`}
      style={{
        backgroundImage: `url(${FooterContentLeft?.footerBg})`,
      }}
    >
      <section className="">
        <Container className="">
          <Row className="px-0">
            <Col lg={3}>
              <Row>
                <Col xs={12}>
                  <Image
                    src={FooterContentLeft?.footerLogo}
                    alt=""
                    style={{ width: "237.8px", height: "66px" }}
                  />
                  <p className={`${styles.footer_left_text} my-4`}>
                    {" "}
                    {FooterContentLeft?.description}
                  </p>
                </Col>
                <Col xs={12} md={3}>
                  <div className="footer_brand_img">
                    <div>
                      <Image
                        src={FooterContentLeft?.certifiedImg}
                        alt={FooterContentLeft?.certifiedImgAlt}
                        style={{ width: "81px", height: "140px" }}
                      />
                    </div>
                    <div className="mt-2">
                      <Image
                        src={FooterContentLeft?.nasscomImg}
                        alt={FooterContentLeft?.nasscomImgAlt}
                        className="nasscomImg"
                      />
                    </div>
                  </div>
                </Col>
                {/* <Col xs={12} md={9} className={styles.ImgPadding}>
                <Image
                    src={FooterContentLeft?.nasscomImg}
                    alt=""
                    className="w-75"
                  />
                </Col> */}
              </Row>
            </Col>
            <Col lg={6} className="mt-lg-0">
              <Row className="px-0">
                <Col lg={3} xs={6} className="">
                  <p
                    className={`${styles.footer_links_heading} mt-lg-0 mt-3 mb-4`}
                  >
                    {" "}
                    {FooterQuickLinks?.title}{" "}
                  </p>
                  {FooterQuickLinks?.links?.map((item, index) => {
                    return (
                      <p className="mb-2" key={index}>
                        <a
                          href={item?.url}
                          className={`${styles.footer_links}`}
                        >
                          {" "}
                          {item?.menu}{" "}
                        </a>
                      </p>
                    );
                  })}
                  {/* <p className={`${styles.footer_links_heading} mt-5`}>
                    {" "}
                    {FooterResourcesLinks?.title}{" "}
                  </p>
                  {FooterResourcesLinks?.links?.map((item, index) => {
                    return (
                      <p>
                        <a
                          href={item?.url}
                          className={`${styles.footer_links}`}
                        >
                          {" "}
                          {item?.menu}{" "}
                        </a>
                      </p>
                    );
                  })} */}
                </Col>
                <Col lg={3} xs={6} className="">
                  <p
                    className={`${styles.footer_links_heading} mt-lg-0 mt-3 mb-4 `}
                  >
                    {" "}
                    {FooterResourcesLinks?.title}{" "}
                  </p>
                  {FooterResourcesLinks?.links?.map((item, index) => {
                    return (
                      <p className="mb-2" key={index}>
                        <a
                          href={item?.url}
                          className={`${styles.footer_links}`}
                        >
                          {" "}
                          {item?.menu}{" "}
                        </a>
                      </p>
                    );
                  })}
                </Col>

                <Col lg={6} xs={12} className="mt-lg-0">
                  <p className={`${styles.footer_links_heading} mb-4`}>
                    {" "}
                    {FooterProductLinks?.title}{" "}
                  </p>
                  {FooterProductLinks?.links?.map((item, index) => {
                    return (
                      <p className="mb-2" key={index}>
                        <a
                          href={item?.url}
                          className={`${styles.footer_links} `}
                        >
                          {" "}
                          {item?.menu}{" "}
                        </a>
                      </p>
                    );
                  })}
                </Col>
                {/* <Col lg={4} xs={12} className="mt-lg-0 mt-4">
                  <p className={`${styles.footer_links_heading}`}>
                    {" "}
                    {FooterResourcesLinks?.title}{" "}
                  </p>
                  {FooterResourcesLinks?.links?.map((item, index) => {
                    return (
                      <p>
                        <a
                          href={item?.url}
                          className={`${styles.footer_links}`}
                        >
                          {" "}
                          {item?.menu}{" "}
                        </a>
                      </p>
                    );
                  })}
                </Col> */}
              </Row>
            </Col>
            <Col lg={3} className="">
              <Row className="px-0">
                <Col xs={12} className="mt-lg-0 mt-4 p-0">
                  <p className={`${styles.footer_links_heading} mb-4`}>
                    {" "}
                    {FooterContactUs?.title}{" "}
                  </p>
                </Col>
                {FooterContactUs?.links?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Col xs={1} className=" p-0 m-0">
                        <Image src={item?.icon} alt="" className="" />
                      </Col>
                      <Col xs={11} className="">
                        <p
                          className={`${styles.footer_links} ${
                            item.icon === DeviceIcon && styles.phone_number
                          }`}
                        >
                          {item?.info}
                        </p>
                      </Col>
                    </div>
                  );
                })}
              </Row>
            </Col>
          </Row>

          <Row className="px-0 d-flex align-items-center justify-content-center">
            <Col lg={6}>
              <p className="my-4">
                {" "}
                <span className={`${styles.footer_left_social_text}`}>
                  {" "}
                  {FooterContentLeft?.socialmediatext}{" "}
                </span>
                {FooterContentLeft?.socialmedia?.map((item, index) => (
                  <span>
                    {" "}
                    <a
                      key={index}
                      href={item?.url}
                      target="_blank"
                      className={styles.socialmediacss}
                    >
                      {" "}
                      <Image className="mx-2" src={item?.icon} alt="" />{" "}
                    </a>
                  </span>
                ))}
              </p>
            </Col>
            <Col lg={6}>
              {/* <SubscribeForm />className="border rounded-4 py-2" */}
            </Col>
          </Row>
          <hr style={{ color: "#D0D5DD", height: "3px" }} />
          <Row className="px-0">
            <Col lg={6}>
              <p className={styles.footer_bottom}>
                {" "}
                © 2023 GWC. All rights reserved.{" "}
              </p>
            </Col>
            <Col lg={6} className="text-end">
              <p className={styles.footer_bottom}>
                {" "}
                {/* <Link to={"/privacy&policy"} className={styles.footer_bottom}> */}{" "}
                Privacy {/* </Link>{" "} */}
                {/* |{" "} */}
                {/* <a href="" className={styles.footer_bottom}>
                  {" "}
                  Cookies{" "}
                </a>{" "} */}
                |{" "}
                {/* <Link to={"/privacy&policy"} className={styles.footer_bottom}> */}{" "}
                Terms & Conditions {/* </Link> */}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
