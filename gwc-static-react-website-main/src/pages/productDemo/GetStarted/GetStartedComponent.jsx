import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';


const GetStartedComponent = () => {
  return (
    <Container>
      <Row className='mt-5 ml-auto mr-auto '>
        <Col className='getStarted__container'>
          <Row>
            <h4 className='getStarted__title'>Get the full product</h4>
          </Row>
          <Row>
            <h5>
              Fully Featured. Unlimited number of Users. Only pay for what you
              use
            </h5>
          </Row>
          <Row>
            <Col>
              <div className='btn_Wrapper'>
                <Link
                  to='https://www.domo.com/start/freemium?utm_source=referral_gwc&utm_medium=organic&orgid=100000770&utm_campid=701f2000001C6UOAA0%20Start%20Free%20|%20Domo'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='create_btn'>
                    Create Your Free Account
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GetStartedComponent;
