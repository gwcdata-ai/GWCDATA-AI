import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// CSS
import styles from "./ProductCompany.module.css";
import useMedia from "../../../hooks/useMedia";



import img1 from "../../../../src/assets/images/ProductDemo/domoredomo1.gif";
import img2 from "../../../../src/assets/images/ProductDemo/domoredomo2.gif";
import img3 from "../../../../src/assets/images/ProductDemo/domoredomo3.gif";
import img4 from "../../../../src/assets/images/ProductDemo/domoredomo4.gif";
import { Link } from "react-router-dom";

const DoMoreWithDomo = [
  {
    id: 1,
    className:'first',
    name: "Domo App Studio",
    description_title: "Unlock the power of date immersion with Domo's App Studio - now available for all customers !",
    description_list: [
      "Empower users to build immersive data experiences effortlessly.",
      "Explore the revamped Forms Edit Modal for intuitive form-building.",
      "Now available for all customers,democratizing app creation without technical skills.",
      "Seamlessly embed App Studio content with Domo Everywhere Embed for versatile"

    ],
    image: img1,
    learnMore:'https://www.domo.com/product/new-features#domopalooza-2024-app-studio'
  },
  {
    id: 2,
    className:'second',
    name: "Domo Workflows",
    description_title: "Simplify and streamline data-driven processes effortlessly",
    description_list: [
      "Reduce time spent on complex tasks with low-code logic-building.",
      "Orchestrate steps and actions across enterprise SaaS platforms outside Domo.",
      "Access queue and task capabilities on-the-go for enhanced productivity.",
      "Simplify task management with Domo's Task center app, available on the Apple and Google Play stores."

    ],
    image: img2,
    learnMore:'https://www.domo.com/product/new-features#domopalooza-2024-domo-workflows'

  },
  {
    id: 3,
    className:'third',
    name: "Domo.AI",
    description_title:
      "Unleash the potential of AI with Domo's Advanced Solutions",
      description_list: [
        "Seamlessly intergrate AI and ML models into yours business processes with Domo's user-friendly platform.",
        "Manage your own models serverlessly, integrate external models, and continuously refine and optimize performance for peak efficiency",
        "Empower decision-making with Domo's AI chat feature, offering personalized insights and guiding conversations within your workflow."
        
  
      ],
    image: img3,
    learnMore:'https://www.domo.com/product/new-features#domopalooza-2024-domo-ai-model-management'

  },
  {
    id: 4,
    className:'fourth',
    name: "Cloud Amplifier",
    description_title: "Seamless Integration & Effortless Transformation to Unlock Data Potential with Cloud Amplifier",
    description_list: [
      "Domo Cloud Amplifier integrates effortlessly with existing cloud and data infrastructure, enabling Domo's data experience platform usage without data movements.",
      "Customers can now customize how often Domo checks for updated data,ensuring data freshness and reliablity.",
      "Sreamline data connections, empowering data architects to optimize each data source while ensuring intelligent, governed, and speedy transformations directly where data resides."
    

    ],
    image: img4,
    learnMore:'https://www.domo.com/product/new-features#domopalooza-2024-domo-cloud-amplifier'

  }
];

export const ProductCompany = () => {
  const isMobile = useMedia("(max-width:600px)");

  const [selectedItem, setSelectedItem] = useState({});
  const tbs =  document.querySelectorAll('.tb');
  const tbsMobile =  document.querySelectorAll('.tbm');

  // console.log('tabsss',tbsMobile);
  // tbs[0].classList.add('active')
  const funSelectedlist =  (item,seltab) => {
    console.log('this is ', seltab);
if(isMobile)
  {
    
   tbsMobile[0].classList[5]=='activeMobile'? tbsMobile[0].classList.remove('activeMobile'):null;
    
    tbsMobile.forEach(elem => {
      console.log('foreach',elem.classList);
    elem.classList[1]=='tbm'? elem.classList.remove('activeMobile'):null;

  
    
   });
   seltab.classList.add('activeMobile')
  }
  else{
  // for desktop
  tbs[0].classList[1]=='active'? tbs[0].classList.remove('active'):null;
   tbs.forEach(tb => {
    tb.classList[2]=='tb'? tb.classList.remove('active'):null;

    console.log('foreach',tb.classList);
    
   });
   seltab.classList.add('active')
  }

  setSelectedItem(item);
    
  };

  useEffect(() => {
    setSelectedItem(DoMoreWithDomo[0]);
    // tbs[0].classList.add('active')
    

  }, []);
  // console.log('DoMoreWithDomo',DoMoreWithDomo);
  return (
    <Container fluid className="pt-1 pb-10 mt-4" >
            {isMobile ? <p className={styles?.title} style={{paddingLeft:'13px',paddingBottom:'10px'}}>Do more with Domo</p> :null}  

      <section className="">
        <Container className={`${styles.DataGovernanceListCards}`}>
          
          
          {isMobile ? (
            
            DoMoreWithDomo?.map((item, index) => {
              return (
                
                <div
                  key={index}
                  className={`w-100 mb-md-0 mb-2 `}
                  
                  style={{cursor:"pointer"}}
                >
                  
                  <div onClick={(event) => {funSelectedlist(item,event.currentTarget)}} 
                  className={`px-1 ${item.className === 'first' ? `` : ''} tbm  ${styles.list}  mb-md-3 mb-1`}>
                    {" "}
                    <div className= {`  px-1 `}> {item?.name} </div>{" "}
                  </div>
                </div>
              );
            })
          ) : (
            <Row className="">
              <p className={styles?.title} style={{padding:'13px'}} >Do more with Domo</p>
              {DoMoreWithDomo?.map((item, index) => {
                return (
                  <Col md={3} key={index} className={`mb-md-0 mb-2  `}>
                    
                    <div onClick={(event) => {
                        funSelectedlist(item,event.currentTarget);
                      }} style={{cursor:"pointer"}}
                      className={`px-1 ${item.className === 'first' ? `active` : ''} ${styles.list} tb mb-md-3 mb-1`}
                     
                    >
                      {" "}
                      <div className="px-1"> {item?.name} </div>{" "}
                    </div>
                  </Col>
                );
              })}
            </Row>
          )}
        </Container>
      </section>
      <Container className="my-4"  >
        <Row  className="d-flex align-items-center justify-content-center ">
          <Col lg={6} md={7} className="px-md-0 pt-md-2 " >
            <img
              src={selectedItem?.image}
              alt=""
              className="w-100 rounded-4"
            />
          </Col>
          <Col lg={6} md={6} className="ps-md-5 pt-md-0  ">
            <div className="" style={{padding:'25px 10px 0px 10px',display:'flex',flexDirection:'column',height:'49vh',justifyContent:'space-evenly'}}  >
              

              <p style={{fontWeight:'700'}}>{selectedItem?.description_title}</p>
             
            <ul>
          {selectedItem?.description_list ? (
          selectedItem.description_list.map((item, index) => (
            <li key={index}>
            {item}
            </li>
            ))
            ) : (
            <li>No items to display</li>
            )}
            </ul>
            <Link to={selectedItem.learnMore} target="_blank">
        <div 
          className={`${styles.url_card} `}
          style={{ color: "black",fontWeight:'700' }}
        >
          {" "}
          Learn More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M4.16699 10.1488H15.8337M15.8337 10.1488L10.0003 4.31543M15.8337 10.1488L10.0003 15.9821"
              stroke={"black"}
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </Link>


            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
