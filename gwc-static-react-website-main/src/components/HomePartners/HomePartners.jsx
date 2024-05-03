import React, { useEffect, useRef, useState } from "react";
import styles from "../../commoncss/Home.module.css";

import partner1 from "../../assets/images/HomePartner/Partner1.svg";
import partner2 from "../../assets/images/HomePartner/Partner2.svg";
import partner3 from "../../assets/images/HomePartner/Partner3.svg";
import partner4 from "../../assets/images/HomePartner/Partner4.png";
import partner5 from "../../assets/images/HomePartner/Partner5.png";
import partner6 from "../../assets/images/HomePartner/Partner6.png";
import partner7 from "../../assets/images/HomePartner/Partner7.png";
import partner8 from "../../assets/images/HomePartner/Partner8.png";
import partner9 from "../../assets/images/HomePartner/Partner9.png";
import partner10 from "../../assets/images/HomePartner/Partner10.png";
import partner11 from "../../assets/images/HomePartner/Partner11.png";

import { Form } from "react-bootstrap";
import { HomePartnersData } from "./HomePartnersData";

const HomePartners = () => {
  const [selectedOption, setSelectedOption] = useState("domo");
  const [allowScroll, setAllowScroll] = useState(false);
  const partnersSectionRef = useRef(null);
  console.log("selectedOption", selectedOption);

  //  useEffect(() => {
  //   const handleScroll = () => {
  //     const partnersSection = partnersSectionRef.current;
  //     const partnersSectionTop = partnersSection.offsetTop;

  //     const scrollPosition = window.scrollY;

  //     if (scrollPosition >= partnersSectionTop && selectedOption !== "boomi") {


  //       window.scrollTo({ top: partnersSectionTop, behavior: 'smooth' });

  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);


  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [selectedOption]);









  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.featuresSection3}>
      <div className={styles.content2} ref={partnersSectionRef}>
        <div className={styles.headingAndSupportingText10}>
          <div className={styles.headingAndSubheading7}>
            {/* <div className={`text-white ${styles.subheading}`}>
              Our Partners
            </div> */}
            <div className={`${styles.heading4} text-white`}>
              <span
                className={styles.whoAreWith}
              >{` Our Trusted Network of Partners `}</span>
            </div>
          </div>
          {/* <div className={`${styles.supportingText36}`} style={{color:"#"}}>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </div> */}
        </div>
      </div>
      {/* <div className={styles.container4}>
        
        <div className={styles.checkboxGroupItemParent}>
          <div
            className={styles.checkboxGroupItem9}
            style={{
              backgroundColor: selectedOption === "domo" ? "#6e2b8b" : "white",
              color: selectedOption === "domo" ? "white" : "black",
            }}
            onClick={() => setSelectedOption("domo")}
            onMouseEnter={() => setSelectedOption("domo")}
            onMouseLeave={() => setSelectedOption("domo")}
          >
            <div className={styles.content6}>
              <div className={styles.rectangleParent10}>
                <div className={styles.groupChild} />
                <img className={styles.vectorIcon26} alt="" src={partner1} />
              </div>
              <div className={styles.text152}>Domo</div>
            </div>
           

            <Form.Check
              type="radio"
              label=""
              name="radioGroup"
              className="radio-button"
              id="option1"
              value="domo"
              checked={selectedOption === "domo"}
              onChange={handleOptionChange}
            />
          </div>
          <div

            className={styles.checkboxGroupItem10}
            style={{
              backgroundColor: selectedOption === "gcp" ? "#6e2b8b" : "white",
              color: selectedOption === "gcp" ? "white" : "black",
            }}
            onClick={() => setSelectedOption("gcp")}
            onMouseEnter={() => setSelectedOption("gcp")}
            onMouseLeave={() => setSelectedOption("gcp")}
          >
            <div className={styles.content6}>
              <div className={styles.logoSnowflakeBlue6}>
                <img
                  className={styles.logoSnowflakeBlueChild}
                  alt=""
                  src={partner2}
                />
              </div>
              <div className={styles.text152}>GCP</div>
            </div>
            <Form.Check
              type="radio"
              label=""
              name="radioGroup"
              className="radio-button"
              id="option1"
              value="gcp"
              checked={selectedOption === "gcp"}
              onChange={handleOptionChange}
            />
          </div>

          <div
            className={styles.checkboxGroupItem10}
            style={{
              backgroundColor:
                selectedOption === "snowflake" ? "#6e2b8b" : "white",
              color: selectedOption === "snowflake" ? "white" : "black",
            }}
            onClick={() => setSelectedOption("snowflake")}
            onMouseEnter={() => setSelectedOption("snowflake")}
            onMouseLeave={() => setSelectedOption("snowflake")}
          >
            <div className={styles.content6}>
              <div className={styles.logoSnowflakeBlue6}>
                <img className={styles.layerIcon1} alt="" src={partner3} />
              </div>
              <div className={styles.text152}>Snowflake</div>
            </div>
            <Form.Check
              type="radio"
              label=""
              name="radioGroup"
              className="radio-button"
              id="option4"
              value="snowflake"
              checked={selectedOption === "snowflake"}
              onChange={handleOptionChange}
            />
          </div>
          <div className={styles.checkboxGroupItem10} style={{ backgroundColor: selectedOption === 'salesforce' ? '#6e2b8b' : 'white', color: selectedOption === 'salesforce' ? 'white' : 'black' }}
            onClick={() => setSelectedOption("salesforce")}
            onMouseEnter={() => setSelectedOption("salesforce")}
            onMouseLeave={() => setSelectedOption("salesforce")}
          >
            <div className={styles.content6}>
              <div className={styles.contentInner1}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.logoSnowflakeBlue7} />
                  <img
                    className={styles.bfe41ee83cdeb74f01a7e8612dab1Icon1}
                    alt=""
                    src={partner4}
                  />
                </div>
              </div>
              <div className={styles.text152}>Salesforce</div>
            </div>
            <Form.Check
              type="radio"
              label=""
              name="radioGroup"
              className="radio-button"
              id="option5"
              value="salesforce"
              checked={selectedOption === "salesforce"}
              onChange={handleOptionChange}
            />
          </div>
          <div className={styles.checkboxGroupItem10} style={{ backgroundColor: selectedOption === 'fivetran' ? '#6e2b8b' : 'white', color: selectedOption === 'fivetran' ? 'white' : 'black' }}
            onClick={() => setSelectedOption("fivetran")}
            onMouseEnter={() => setSelectedOption("fivetran")}
            onMouseLeave={() => setSelectedOption("fivetran")}
          >
            <div className={styles.content6}>
              <div className={styles.contentInner1}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.logoSnowflakeBlue7} />
                  <img className={styles.fivetranIcon1} alt="" src={partner5} />
                </div>
              </div>
              <div className={styles.text152}>Fivetran</div>
            </div>
            <Form.Check
              type="radio"
              label=""
              name="radioGroup"
              className="radio-button"
              id="option9"
              value="fivetran"
              checked={selectedOption === "fivetran"}
              onChange={handleOptionChange}
            />
          </div>
        
          <div className={styles.checkboxGroupItem10} style={{ backgroundColor: selectedOption === 'dbt' ? '#6e2b8b' : 'white', color: selectedOption === 'dbt' ? 'white' : 'black' }}
            onClick={() => setSelectedOption("dbt")}
            onMouseEnter={() => setSelectedOption("dbt")}
            onMouseLeave={() => setSelectedOption("dbt")}
          >
            <div className={styles.content6}>
              <div className={styles.contentInner1}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.logoSnowflakeBlue7} />
                  <img
                    className={styles.dbtSeeklogocom1Icon}
                    alt=""
                    src={partner7}
                  />
                </div>
              </div>
              <div className={styles.text152}>DBT</div>
            </div>
            <Form.Check
              type="radio"
              label=""
              name="radioGroup"
              className="radio-button"
              id="option7"
              value="dbt"
              checked={selectedOption === "dbt"}
              onChange={handleOptionChange}
            />
          </div>
          <div className={styles.checkboxGroupItem10} style={{ backgroundColor: selectedOption === 'looker' ? '#6e2b8b' : 'white', color: selectedOption === 'looker' ? 'white' : 'black' }}
            onClick={() => setSelectedOption("looker")}
            onMouseEnter={() => setSelectedOption("looker")}
            onMouseLeave={() => setSelectedOption("looker")}
          >
            <div className={styles.content6}>
              <div className={styles.contentInner1}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.logoSnowflakeBlue7} />
                  <img className={styles.groupIcon6} alt="" src={partner8} />
                </div>
              </div>
              <div className={styles.text152}>Looker</div>
            </div>
            <Form.Check
              type="radio"
              label=""
              name="radioGroup"
              className="radio-button"
              id="option3"
              value="looker"
              checked={selectedOption === "looker"}
              onChange={handleOptionChange}
            />
          </div>
          <div className={styles.checkboxGroupItem10} style={{ backgroundColor: selectedOption === 'alation' ? '#6e2b8b' : 'white', color: selectedOption === 'alation' ? 'white' : 'black' }}
            onClick={() => setSelectedOption("alation")}
            onMouseEnter={() => setSelectedOption("alation")}
            onMouseLeave={() => setSelectedOption("alation")}
          >
            <div className={styles.content6}>
              <div className={styles.contentInner1}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.logoSnowflakeBlue7} />
                  <img className={styles.groupIcon6} alt="" src={partner9} />
                </div>
              </div>
              <div className={styles.text152}>Alation</div>
            </div>
            <Form.Check
              type="radio"
              label=""
              name="radioGroup"
              className="radio-button"
              id="option3"
              value="looker"
              checked={selectedOption === "alation"}
              onChange={handleOptionChange}
            />
          </div>

          <div className={styles.checkboxGroupItem10} style={{ backgroundColor: selectedOption === 'tableau' ? '#6e2b8b' : 'white', color: selectedOption === 'tableau' ? 'white' : 'black' }}
            onClick={() => setSelectedOption("tableau")}
            onMouseEnter={() => setSelectedOption("tableau")}
            onMouseLeave={() => setSelectedOption("tableau")}
          >
            <div className={styles.content6}>
              <div className={styles.contentInner1}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.logoSnowflakeBlue7} />
                  <img className={styles.groupIcon6} alt="" src={partner10} />
                </div>
              </div>
              <div className={styles.text152}>Tableau</div>
            </div>
            <Form.Check
              type="radio"
              label=""
              name="radioGroup"
              className="radio-button"
              id="option3"
              value="looker"
              checked={selectedOption === "tableau"}
              onChange={handleOptionChange}
            />
          </div>
          <div className={styles.checkboxGroupItem10} style={{ backgroundColor: selectedOption === 'boomi' ? '#6e2b8b' : 'white', color: selectedOption === 'boomi' ? 'white' : 'black' }}
            onClick={() => setSelectedOption("boomi")}
            onMouseEnter={() => setSelectedOption("boomi")}
            onMouseLeave={() => setSelectedOption("boomi")}
          >
            <div className={styles.content6}>
              <div className={styles.contentInner1}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.logoSnowflakeBlue7} />
                  <img
                    className={styles.boomiLogosIdeiuWjde1Icon}
                    alt=""
                    src={partner11}
                  />
                </div>
              </div>
              <div className={styles.text152}>Boomi</div>
            </div>
            <Form.Check
              type="radio"
              label=""
              name="radioGroup"
              className="radio-button"
              id="option8"
              value="boomi"
              checked={selectedOption === "boomi"}
              onChange={handleOptionChange}
            />
          </div>

        </div>
        <div
          className={`${styles.textAndSupportingTextParent6} ${styles.mobileTop}`}
        >
          
          {HomePartnersData.map(function (data) {
            return (
              data.connect === selectedOption && (
                <div className={`${styles.textAndSupportingText24}`}>
                  <div className={styles.text161}>{data?.name}</div>
                  <div className={styles.supportingTextPartners} style={{ color: 'black' }}>{data?.desc}</div>
                </div>
              )
            );
          })}
          <div className={styles.textAndSupportingText47}>
            <div className={`${styles.text162} mb-4`}>Capabilities</div>
            
            {HomePartnersData.map((value, index) => {
              return (
                <div key={index}>
                  <div className={styles.badgeParent}>
                    {value.capabilities.map((data, index) => {
                      return (
                        value?.connect === selectedOption && (
                          <div className={styles.badge}>
                            <div className={styles.badgeBase}>
                              <div className={styles.text163}>
                                {data?.title}
                              </div>
                            </div>
                          </div>
                        )
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePartners;
