import React, { useState, useEffect, useRef } from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeSolutions from "../../components/HomeSolutions/HomeSolutions";
import styles from "../../commoncss/Home.module.css";
import HomeClients from "../../components/HomeClients/HomeClients";
import HomeApproach from "../../components/HomeApproach/HomeApproach";
import HomeIndustries from "../../components/HomeIndustries/HomeIndustries";
import HomePartners from "../../components/HomePartners/HomePartners";
import HomeBlog from "../../components/HomeBlog/HomeBlog";
import HomeTestimonials from "../../components/HomeTestimonials/HomeTestimonials";
import HomeBottom from "../../components/home/HomeBlog/HomeBottom";
import HomeBannerNew from "../../components/HomeBanner/HomeBannerNew";
import useMedia from "../../hooks/useMedia";
import { Helmet } from "react-helmet-async";
import FixedScroll from "../../components/HomePartners/fixedScroll";
import HomePartners2 from "../../components/HomePartners/PartnersHome";

const HomePage = () => {
  const isMobile = useMedia("(max-width:600px)"); // Mobile Banner

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {};
  }, []);

  return (
    <div className={styles.Home}>
      <Helmet>
        <title>GWC DATA.AI</title>
        <meta name="description" content="GWC DATA.AI." />
        <meta name="keywords" content="Solution Matters" />
      </Helmet>
      {isMobile ? <HomeBanner /> : <HomeBannerNew />}
      <HomeSolutions />
      <HomeClients />
      <HomeApproach />
      <HomeIndustries />
      {/* <HomePartners /> */}
      <HomePartners2 />
      {/* <FixedScroll /> */}
      {/* <HomeBlog /> */}
      <HomeTestimonials />
      <HomeBottom />
    </div>
  );
};

export default HomePage;
