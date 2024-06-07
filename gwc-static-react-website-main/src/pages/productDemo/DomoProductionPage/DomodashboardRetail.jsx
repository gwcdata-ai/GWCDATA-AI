import React, { useEffect } from 'react'
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import commonStyles from "../../../commoncss/common.module.css";
import newStyles from "../../../commoncss/Home.module.css";
import styles from "../../../../src/components/ProductDemo/DomoUse/DomoUse.module.css";
import styles1 from '../../../../src/components/ProductDemo/DomoSolutions/dashboard.module.css';

import { Link, useParams } from "react-router-dom";
import { Retail360Data } from '../../../components/ProductDemo/DomoSolutions/DomoSolutionsData';
import useMedia from '../../../hooks/useMedia';
import AOS from "aos";
AOS.init({
    duration: 300,
});


const DomodashboardRetail = () => {

    const isMobile = useMedia("(max-width:700px)");
    const isTablet = useMedia("(min-width:701px) ") & useMedia("(max-width:850px)");



    useEffect(() => {
        // console.log('data from 360',Retail360Data);
    
        return () => { };
      }, []);

    //   const { iframeUrl } = useParams();
    //   console.log(iframeUrl, "iframeUrl");

  return (
    <>
    <Container fluid id="home_section " 
      className={`${styles.Retail_banner_container_img} `}
    >
      <Container className={`mt-5 pt-3`}>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={12} className="py-md-0 pt-lg-2" >



            <div className={newStyles.content2}>
                    <div className={newStyles.headingAndSubheading7}>
                      
                        <div data-aos="fade-down"    className={`${isMobile ? `${styles.retailHeader_Mobile}` : `${styles.retailHeader} `} text-black text-center`}>
                                Retail 360                        
                        </div>
                    </div>
            </div>
          </Col>
          
          <Col
          xs={12}
          md={6}
          lg={3}
          className={` w-100  ${isMobile ? `${styles.Retail_bgColor_Mobile}` : `${styles.Retail_bgColor}`}`}  >
             <div className={`${styles.section_container}`}>
                 {Retail360Data.map((data,index) => (
                <div
                    className={` ${isMobile ? `${styles.BenefitSectionBox1_Retail_mobile}` : isTablet ? `${styles.BenefitSectionBox1_Retail_Tablet} ` : `${styles.BenefitSectionBox1_Retail} `} `}
                    
                    data-aos="fade-up"                 
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    >
                    <Link key={index} to={data?.url} target="blank" style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}> 
                    <img src={data?.image} alt="Icon" width={'100%'} className={`${styles1.title_card_img}`} />

                    <div className={`${isMobile ? `${styles.retail_title_Mobile}` : isTablet?`${styles.retail_title_Tablet}`:`${styles.retail_title}`} fw-bold text-center`}>

                        {data.title}{" "}
                    </div>
                    </Link>
                </div>
         
               
            ))}
               
              </div>
        </Col>
        </Row>
        
      </Container>
    </Container>
  </>  )
}

export default DomodashboardRetail



//   return (
//     <>
//       <Container fluid id="home_section "
//         className={`${commonStyles.banner_container_img} py-5 mt-5`}
//       >
//         <Container className="mt-3">
//           <Row className="d-flex align-items-center justify-content-center">
//             <Col md={12} className="py-md-0 pt-lg-2">
//               <div >
//                 <iframe src={`https://public.domo.com/embed/pages/${iframeUrl}`} width="100%" height="1620" marginheight="0" marginwidth="0" frameborder="0"></iframe>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//     </>

//   )

