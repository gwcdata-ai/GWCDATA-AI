import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import styles from "../../commoncss/Home.module.css";
import Logo from "../../assets/icons/logo.svg";
import ChevronDown from "../../assets/icons/chevrondown.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { headerIcons } from "./headericon";
import useMedia from "../../hooks/useMedia";

import "./Header.css";
export const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMedia("(max-width:600px)");
  const isTab = useMedia("(max-width:950px)");
  const [activeItem, setActiveItem] = useState("aboutus#vision-mission");
  const [expanded, setexpanded] = useState(false);
  console.log("activeItem", activeItem);

  const location = useLocation();
  const findPath = location.pathname;

  const [showAboutDropDown, setShowAboutDropDown] = useState(false);
  const [showSolutionsDropDown, setShowSolutionsDropDown] = useState(false);
  const [showPartnersDropDown, setShowPartnersDropDown] = useState(false);

  const [showProfile, setShowProfile] = useState(false);

  const [showDomoDropDown, setShowDomoDropDown] = useState(false);

  const handleMouseEnterAbout = () => {
    setShowAboutDropDown(true);
  };

  const handleMouseLeaveAbout = () => {
    setShowAboutDropDown(false);
  };

  const handleAboutClick = () => {
    setShowAboutDropDown(!showAboutDropDown);
  };

  const handleMouseEnterSolution = () => {
    setShowSolutionsDropDown(true);
  };

  const handleMouseLeaveSolution = () => {
    setShowSolutionsDropDown(false);
  };

  const handleSolutionClick = () => {
    setShowSolutionsDropDown(!showSolutionsDropDown);
  };

  const handleMouseEnterPartner = () => {
    setShowPartnersDropDown(true);
  };

  const handleMouseLeavePartner = () => {
    setShowPartnersDropDown(false);
  };

  const handlePartnerClick = () => {
    setShowPartnersDropDown(!showPartnersDropDown);
  };

  const handleShowfun = (item) => {
    setShowProfile(!showProfile);
    setActiveItem(item);
    setexpanded(false);
  };

  const handleNavItemClick = (item) => {
    const section = document.getElementById(item);
    console.log("item------------------>", item);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
    setActiveItem(item);
    setexpanded(false);
    console.log("neww");
    setShowProfile(false);
  };

  useEffect(() => {
    handleNavItemClick("home"); // Assuming "home" is the initial value you want to set for activeItem
  }, [activeItem]);

  const handleMouseEnterDomo = () => {
    setShowDomoDropDown(true);
  };

  const handleMouseLeaveDomo = () => {
    setShowDomoDropDown(false);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) element.scrollIntoView();
    }
  }, []);
  return (
    <>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        className="nav_bg p-0 mb-2 fixedHeader pb-md-2 pb-0"
        expanded={expanded}
      >
        <Container className="nav_container header_nav">
          <Navbar.Brand>
            <a
              href="/"
              active={activeItem === "home"}
              onClick={() => {
                handleNavItemClick("home");
              }}
            >
              <img
                alt="Company Logo"
                src={Logo}
                style={{ height: 100, width: 250, marginTop: -5 }}
              />
            </a>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setexpanded(expanded ? false : true)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-element">
              <a
                href="/"
                active={activeItem === "home"}
                onClick={() => handleNavItemClick("home")}
              >
                Home
              </a>

              <NavDropdown
                title="Company"
                id="basic-nav-dropdown"
                style={{ marginTop: "-8px" }}
                show={showAboutDropDown}
                onMouseEnter={handleMouseEnterAbout}
                onMouseLeave={handleMouseLeaveAbout}
                onClick={handleAboutClick}
              >
                {" "}
                <NavDropdown.Item
                  href="/about-gwc"
                  eventKey="4.1"
                  onClick={() => {
                    handleNavItemClick("aboutus");
                    navigate("/about-gwc");
                  }}
                >
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/about-gwc#vision-mission"
                  // onClick={() => navigate("/about-gwc#vision-mission")}
                  eventKey="4.2"
                >
                  Vision & Mission
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/about-gwc#our-work-culture"
                  eventKey="4.3"
                  onClick={() => handleNavItemClick("aboutus#our-work-culture")}
                >
                  Work Culture
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/about-gwc#leadership"
                  eventKey="4.4"
                  onClick={() => handleNavItemClick("aboutus#leadership")}
                >
                  Leadership
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/about-gwc#recognitions"
                  eventKey="4.5"
                  onClick={() => handleNavItemClick("aboutus#recognitions")}
                >
                  Recognitions
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/wfh"
                  eventKey="4.5"
                  onClick={() => handleNavItemClick("wfh")}
                >
                  Work From Hometown
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Solutions"
                id="basic-nav-dropdown"
                style={{ marginTop: "-8px" }}
                show={showSolutionsDropDown}
                onMouseEnter={handleMouseEnterSolution}
                onMouseLeave={handleMouseLeaveSolution}
                onClick={handleSolutionClick}
                className="solution-mega-menu"
              >
                {" "}
                {isMobile ? (
                  <Row
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "100%",
                      height: "400px",
                      marginLeft: 2,
                      overflowY: "auto",
                    }}
                    onMouseLeave={handleMouseLeaveSolution}
                  >
                    <Col sm={12} md={3} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/data-strategy"
                        eventKey="4.1"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon1}</Col>
                          <Col xs={10} className={isMobile ? "px-3" : ""}>
                            {" "}
                            <span> Data Strategy & Engineering</span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col sm={12} md={3} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/data-governance"
                        eventKey="4.4"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon4}</Col>
                          <Col xs={10} className={isMobile ? "px-4" : ""}>
                            {" "}
                            <span> Data Governance </span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/business-intelligence-and-analytics"
                        eventKey="4.2"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon2}</Col>
                          <Col xs={10} className={isMobile ? "px-2" : ""}>
                            {" "}
                            <span> Business Intelligence & Analytics </span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/bimigration-and-modernization"
                        eventKey="4.5"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon5}</Col>
                          <Col xs={10} className={isMobile ? "px-2" : ""}>
                            <span> BI Migration & Modernization</span>{" "}
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/cloud-transformation"
                        eventKey="4.6"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon3}</Col>
                          <Col xs={10} className={isMobile ? "px-3" : "px-4"}>
                            {" "}
                            <span> Cloud Transformation </span>{" "}
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/artificial-intelligence"
                        eventKey="4.8"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon8}</Col>
                          <Col xs={10} className={isMobile ? "px-3" : ""}>
                            {" "}
                            <span> Artificial Intelligence </span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/industrial-internet-of-things"
                        eventKey="4.7"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon7}</Col>
                          <Col xs={10} className={isMobile ? "px-4" : "px-5"}>
                            {" "}
                            <span className={isMobile ? "px-0" : ""}>
                              Industrial IoT
                            </span>{" "}
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/salesforce"
                        eventKey="4.3"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon6}</Col>
                          <Col xs={10} className={isMobile ? "px-2 " : ""}>
                            {" "}
                            {/* <span> Salesforce Implementation </span> */}
                            <span className={isMobile ? "px-0" : ""}>
                              Salesforce Implementation
                            </span>{" "}
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                ) : isTab ? (
                  <Row
                    className="d-flex align-items-center justify-content-center"
                    style={{ width: "100%", marginLeft: 2, overflowY: "auto" }}
                    onMouseLeave={handleMouseLeaveSolution}
                  >
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/data-strategy"
                        eventKey="4.1"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={3}>{headerIcons.icon1}</Col>
                          <Col xs={9} className="px-3 sizetitle">
                            {" "}
                            <span> Data Strategy & Engineering</span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/data-governance"
                        eventKey="4.4"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={3}>{headerIcons.icon4}</Col>
                          <Col
                            xs={9}
                            className={isMobile ? "px-4" : "sizetitle"}
                          >
                            {" "}
                            <span className=""> Data Governance </span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/business-intelligence-and-analytics"
                        eventKey="4.2"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={3}>{headerIcons.icon2}</Col>
                          <Col
                            xs={9}
                            className={isMobile ? "px-2" : "px-3 sizetitle"}
                          >
                            {" "}
                            <span className="">
                              {" "}
                              Business Intelligence & Analytics{" "}
                            </span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/bimigration-and-modernization"
                        eventKey="4.5"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={3}>{headerIcons.icon5}</Col>
                          <Col xs={9} className="px-3 sizetitle">
                            <span className="">
                              {" "}
                              BI Migration & Modernization
                            </span>{" "}
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/cloud-transformation"
                        eventKey="4.6"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={3}>{headerIcons.icon3}</Col>
                          <Col
                            xs={9}
                            className={isMobile ? "px-4" : "px-3 sizetitle"}
                          >
                            {" "}
                            <span className="">
                              {" "}
                              Cloud Transformation{" "}
                            </span>{" "}
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/artificial-intelligence"
                        eventKey="4.8"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={3}>{headerIcons.icon8}</Col>
                          <Col
                            xs={9}
                            className={isMobile ? "px-4" : "px-3 sizetitle"}
                          >
                            {" "}
                            <span className="sizetitle">
                              {" "}
                              Artificial Intelligence{" "}
                            </span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/industrial-internet-of-things"
                        eventKey="4.7"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={3}>{headerIcons.icon7}</Col>
                          <Col
                            xs={9}
                            className={isMobile ? "px-4" : "px-3 sizetitle"}
                          >
                            {" "}
                            <span className={isMobile ? "px-1" : ""}>
                              Industrial IoT
                            </span>{" "}
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/salesforce"
                        eventKey="4.3"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={3}>{headerIcons.icon6}</Col>
                          <Col
                            xs={9}
                            className={isMobile ? "px-4" : "px-4 sizetitle"}
                          >
                            {" "}
                            <span className="">
                              {" "}
                              Salesforce Implementation{" "}
                            </span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                ) : (
                  <Row
                    className="d-flex align-items-center justify-content-center"
                    style={{ width: "100%", marginLeft: 2, overflowY: "auto" }}
                    onMouseLeave={handleMouseLeaveSolution}
                  >
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/data-strategy"
                        eventKey="4.1"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon1}</Col>
                          <Col xs={10} className="px-2">
                            {" "}
                            <span className="sizetitle">
                              {" "}
                              Data Strategy & Engineering
                            </span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/data-governance"
                        eventKey="4.4"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon4}</Col>
                          <Col xs={10} className={isMobile ? "px-4" : ""}>
                            {" "}
                            <span className="sizetitle"> Data Governance </span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/business-intelligence-and-analytics"
                        eventKey="4.2"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon2}</Col>
                          <Col xs={10} className={isMobile ? "px-2" : ""}>
                            {" "}
                            <span className="sizetitle">
                              {" "}
                              Business Intelligence & Analytics{" "}
                            </span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/bimigration-and-modernization"
                        eventKey="4.5"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon5}</Col>
                          <Col xs={10} className="px-1">
                            <span className="sizetitle">
                              {" "}
                              BI Migration & Modernization
                            </span>{" "}
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/cloud-transformation"
                        eventKey="4.6"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon3}</Col>
                          <Col xs={10} className={isMobile ? "px-4" : ""}>
                            {" "}
                            <span className="sizetitle">
                              {" "}
                              Cloud Transformation{" "}
                            </span>{" "}
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/artificial-intelligence"
                        eventKey="4.8"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon8}</Col>
                          <Col xs={10} className={isMobile ? "px-4" : ""}>
                            {" "}
                            <span className="sizetitle">
                              {" "}
                              Artificial Intelligence{" "}
                            </span>
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/industrial-internet-of-things"
                        eventKey="4.7"
                      >
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon7}</Col>
                          <Col xs={10} className={isMobile ? "px-4" : "px-3"}>
                            {" "}
                            <span
                              className={isMobile ? "px-1" : "px-2 sizetitle"}
                            >
                              Industrial IoT
                            </span>{" "}
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                      <NavDropdown.Item
                        href="/solutions/salesforce"
                        eventKey="4.3"
                      >
                        {/* <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon6}</Col>
                          <Col xs={10} className={isMobile ? "px-4" : "px-4"}>
                            {" "}
                            <span className="sizetitle"> Salesforce Implementation </span>
                          </Col>
                        </Row> */}
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col xs={2}>{headerIcons.icon6}</Col>
                          <Col xs={10} className="px-1">
                            <span className="sizetitle">
                              {" "}
                              Salesforce Implementation
                            </span>{" "}
                          </Col>
                        </Row>
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                )}
              </NavDropdown>

              <NavDropdown
                title="Partners"
                id="basic-nav-dropdown"
                style={{ marginTop: "-8px" }}
                show={showPartnersDropDown}
                onMouseEnter={handleMouseEnterPartner}
                onMouseLeave={handleMouseLeavePartner}
                onClick={handlePartnerClick}
              >
                <NavDropdown.Item href="/domo-consulting" eventKey="8.1">
                  Domo
                </NavDropdown.Item>
                <NavDropdown.Item href="/gcp-implementation" eventKey="8.2">
                  <p className="mb-0">
                    {" "}
                    GCP
                    {/* <span className="px-3">{headerIcons.icon3}</span> */}
                  </p>
                </NavDropdown.Item>
                <NavDropdown.Item href="/solutions/salesforce" eventKey="8.3">
                  Salesforce
                </NavDropdown.Item>

                <NavDropdown.Item href="/snowflake" eventKey="4.4">
                  Snowflake
                </NavDropdown.Item>
                <NavDropdown.Item href="/fivetran" eventKey="8.5">
                  Fivetran
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="/atlan" eventKey="8.6">
                  Atlan
                </NavDropdown.Item> */}
                <NavDropdown.Item href="/dbt" eventKey="8.7">
                  DBT
                </NavDropdown.Item>
                <NavDropdown.Item href="/boomi" eventKey="8.8">
                  Boomi
                </NavDropdown.Item>
                <NavDropdown.Item href="/looker" eventKey="8.9">
                  Looker
                </NavDropdown.Item>
                <NavDropdown.Item href="/tableau" eventKey="8.10">
                  Tableau
                </NavDropdown.Item>
                <NavDropdown.Item href="/alation" eventKey="8.11">
                  Alation
                </NavDropdown.Item>
              </NavDropdown>

              {/* <Link
                to="/domo-consulting"
                active={activeItem === "domo"}
                // onClick={() => handleNavItemClick("domo")}
                onClick={() => handleShowfun()}
              >
                Domo
              </Link> */}

              <NavDropdown
                title="Domo Solutions"
                id="basic-nav-dropdown"
                active={activeItem === "domo"}
                style={{ marginTop: "-8px" }}
                show={showDomoDropDown}
                onMouseEnter={handleMouseEnterDomo}
                onMouseLeave={handleMouseLeaveDomo}
                // onClick={handleShowfun}
              >
                <NavDropdown.Item
                  href="/domo-consulting#domo-capabilities"
                  eventKey="4.12"
                  onClick={() => {
                    handleNavItemClick("domo-consulting#domo-capabilities");
                    // navigate("/domo-consulting#domo-capabilities");
                  }}
                >
                  Domo Capabilities
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="/domo-consulting#domo-pricing"
                  eventKey="4.13"
                  onClick={() => {
                    handleNavItemClick("domo-consulting#domo-pricing");
                    // navigate("/domo-consulting#domo-pricing");
                  }}
                >
                  Domo Pricing
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/domo-consulting#domo-dashboards"
                  eventKey="4.14"
                  onClick={() => {
                    handleNavItemClick("domo-consulting#domo-dashboards");
                    // navigate("/domo-consulting#domo-dashboards");
                  }}
                >
                  Domo Dashboards
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/domo-consulting#domo-freeaccount"
                  eventKey="4.15"
                  onClick={() => {
                    handleNavItemClick("domo-consulting#domo-freeaccount");
                    // navigate("/domo-consulting#domo-freeaccount");
                  }}
                >
                  Domo Free Account
                </NavDropdown.Item>
              </NavDropdown>

              <Link
                to="/career"
                active={activeItem === "career"}
                onClick={() => handleNavItemClick("career")}
              >
                Careers
              </Link>

              {/* <Link href="/">
                <img src={search_Icon} alt="search_Icon" />
              </Link> */}
            </Nav>
            {isMobile ? (
              <Nav className="nav-buttons my-md-0 my-3">
                {showProfile ? (
                  <div className={styles.button4}>
                    <div
                      className={styles.buttonBase4}
                      style={{ marginTop: "0px" }}
                    >
                      <div className={styles.text114}>
                        <a href="#home_section">Domo Free Account</a>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className={styles.button4}>
                  <div
                    className={styles.buttonBase4}
                    style={{ marginTop: "3px" }}
                  >
                    <div className={styles.text114}>
                      <a href="/contact-us">Contact Us</a>
                    </div>
                  </div>
                </div>
              </Nav>
            ) : isTab ? (
              <Nav className="nav-buttons my-md-0 my-3">
                {showProfile ? (
                  <div className={styles.button4}>
                    <div
                      className={styles.buttonBase4}
                      style={{ marginTop: "-10px" }}
                    >
                      <div className={styles.text114}>
                        <a href="#home_section">Domo Free Account</a>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className={styles.button4}>
                  <div
                    className={styles.buttonBase4}
                    style={{ marginTop: "10px" }}
                  >
                    <div className={styles.text114}>
                      <a href="/contact-us">Contact Us</a>
                    </div>
                  </div>
                </div>
              </Nav>
            ) : (
              <>
                <Nav className="nav-buttons my-md-0 my-3">
                  {showProfile ? (
                    <div className={styles.button4}>
                      <div
                        className={styles.buttonBase4}
                        style={{ marginTop: "-10px" }}
                      >
                        <div className={styles.text114}>
                          <a href="#home_section">Domo Free Account</a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className={styles.button4}>
                    <div
                      className={styles.buttonBase4}
                      style={{ marginTop: "-10px" }}
                    >
                      <div className={styles.text114}>
                        <a href="/contact-us">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
