

import React, { useEffect } from 'react'
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import commonStyles from "../../../commoncss/common.module.css";
import { useParams } from "react-router-dom";

const Domoproductinfo = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => { };
  }, []);

  const { iframeUrl } = useParams();
  // console.log(iframeUrl, "iframeUrl");

  return (
    <>
      <Container fluid id="home_section "
        className={`${commonStyles.banner_container_img} py-5 mt-5`}
      >
        <Container className="mt-3">
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={12} className="py-md-0 pt-lg-2">
              <div >
                <iframe src={`https://public.domo.com/embed/pages/${iframeUrl}`} width="100%" height="1620" marginheight="0" marginwidth="0" frameborder="0"></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>

  )
}

export default Domoproductinfo