
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const SalesHeader = () => {
  return (
    <Container className='mt-5'>
            <Row>
                <Col md={12}>
                    <p className="sale_heading" >Skill set</p>
                    {/* <p className={` ${styles.para} mb-5`}>Streamline data architectures and forge a connected future using Snowflake.</p> */}
                </Col>
            </Row>
        </Container>
  )
}

export default SalesHeader