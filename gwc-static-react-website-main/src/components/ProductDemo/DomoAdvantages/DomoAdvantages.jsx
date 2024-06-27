import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import commonStyles from '../../../commoncss/common.module.css';
import styles from '../DomoAnalytics/DomoAnalytics.module.css';
import './DomoAdvantages.css';

import advantage1 from '../../../assets/images/ProductDemo/DomoAdvantage/Img1.png';
import advantage2 from '../../../assets/images/ProductDemo/DomoAdvantage/Img2.png';
import advantage3 from '../../../assets/images/ProductDemo/DomoAdvantage/Img3.png';
import advantage4 from '../../../assets/images/ProductDemo/DomoAdvantage/Img4.png';
import advantage5 from '../../../assets/images/ProductDemo/DomoAdvantage/Img5.png';
import advantage6 from '../../../assets/images/ProductDemo/DomoAdvantage/Img6.png';
import advantage7 from '../../../assets/images/ProductDemo/DomoAdvantage/Img7.png';
import advantage8 from '../../../assets/images/ProductDemo/DomoAdvantage/Img8.png';
import advantage9 from '../../../assets/images/ProductDemo/DomoAdvantage/Img9.png';

import bannerImg from '../../../assets/images/about/ourCultureBg.webp';
import AOS from 'aos';

const DomoAdvantages = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refreshHard();
  }, []);
  return (
    <Container
      fluid
      // className="pt-2 pb-5"
      style={{ backgroundImage: `url(${bannerImg})` }}
      className={`${commonStyles.banner_container_img}  py-lg-5`}
    >
      <section className=''>
        <Container className=''>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col sm={12} className='py-md-0 py-5'>
              <div className=''>
                {/* <p className={styles?.sub_title}>
                  <strong>Analytics</strong>
                </p> */}
                <h2 className={styles?.title}>Top Benefits of Domo </h2>

                <p className={styles?.text}>
                  Domo is renowned for its compelling and visually appealing
                  data representations. The application empowers users to
                  visualize data according to their preferences while retaining
                  complete control. Additionally, the app boasts a distinctive
                  social element that fosters valuable conversations. It
                  seamlessly tracks user behavior and interests, merging this
                  information with other data in a natural and integrated
                  fashion.
                </p>
              </div>
            </Col>
          </Row>
          <div className='grid'>
            <ul id='hexGrid'>
              <li className='hex' data-aos='zoom-in'>
                <div className='hexIn'>
                  <a className='hexLink' style={{ cursor: "default" }}>
                    <div
                      className='img advantage_img'
                      style={{
                        backgroundImage: `url(${advantage1})`,
                      }}
                    ></div>
                  </a>
                </div>
              </li>

              <li
                className='hex'
                data-aos='zoom-in '
                data-aos-offset='200'
                data-aos-easing='ease-in-sine'
                data-aos-duration='600'
              >
                <div className='hexIn'>
                  <a className='hexLink'style={{ cursor: "default" }} >
                    <div
                      className='img security_img'
                      style={{
                        backgroundImage: `url(${advantage2})`,
                        backgroundSize: 'contain',
                      }}
                    ></div>
                    {/* <h1 id="demo1">This is a title</h1> */}
                  </a>
                </div>
              </li>
              <li className='hex' data-aos='zoom-in'>
                <div className='hexIn'>
                  <a className='hexLink ' style={{ cursor: "default" }}>
                    <div
                      className='img analytic_img'
                      style={{
                        backgroundImage: `url(${advantage3})`,
                        backgroundSize: 'contain',
                      }}
                    ></div>
                    {/* <h1 id="demo1">This is a title</h1> */}
                  </a>
                </div>
              </li>
              <li className='hex' data-aos='zoom-in'>
                <div className='hexIn'>
                  <a className='hexLink' style={{ cursor: "default" }}>
                    <div
                      className='img dashboard_img'
                      style={{
                        backgroundImage: `url(${advantage4})`,
                        backgroundSize: 'contain',
                      }}
                    ></div>
                    {/* <h1 id="demo1">This is a title</h1> */}
                  </a>
                </div>
              </li>
              <li className='hex' data-aos='zoom-in'>
                <div className='hexIn'>
                  <a className='hexLink' style={{ cursor: "default" }}>
                    <div
                      className='img advantage_img'
                      style={{
                        backgroundImage: `url(${advantage5})`,
                        backgroundSize: 'contain',
                      }}
                    ></div>
                    {/* <h1 id="demo1">This is a title</h1> */}
                  </a>
                </div>
              </li>
              <li className='hex' data-aos='zoom-in'>
                <div className='hexIn'>
                  <a className='hexLink' style={{ cursor: "default" }}>
                    <div
                      className='img analytic_img'
                      style={{
                        backgroundImage: `url(${advantage6})`,
                        backgroundSize: 'contain',
                      }}
                    ></div>
                    {/* <h1 id="demo1">This is a title</h1> */}
                  </a>
                </div>
              </li>
              <li className='hex' data-aos='zoom-in'>
                <div className='hexIn'>
                  <a className='hexLink' style={{ cursor: "default" }}>
                    <div
                      className='img analytic_img'
                      style={{
                        backgroundImage: `url(${advantage7})`,
                        backgroundSize: 'contain',
                      }}
                    ></div>
                    {/* <h1 id="demo1">This is a title</h1> */}
                  </a>
                </div>
              </li>
              <li className='hex' data-aos='zoom-in'>
                <div className='hexIn'>
                  <a className='hexLink' style={{ cursor: "default" }}>
                    <div
                      className='img security_img'
                      style={{
                        backgroundImage: `url(${advantage8})`,
                        backgroundSize: 'contain',
                      }}
                    ></div>
                    {/* <h1 id="demo1">This is a title</h1> */}
                  </a>
                </div>
              </li>
              <li className='hex' data-aos='zoom-in'>
                <div className='hexIn'>
                  <a className='hexLink' style={{ cursor: "default" }}> 
                    <div
                      className='img dashboard_img'
                      style={{
                        backgroundImage: `url(${advantage9})`,
                        backgroundSize: 'contain',
                      }}
                    ></div>
                    {/* <h1 id="demo1">This is a title</h1> */}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default DomoAdvantages;
