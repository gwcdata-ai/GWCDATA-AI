import React, { useState, useEffect } from "react";
import AOS from "aos";
// COMPONENTS
import { CommonSectionBanner } from "../../commoncomponents/banner/CommonBanner";
import { CommonLeftImageComponent } from "../../commoncomponents/leftSideImageSection/LestSideImageComponent";
import { CommonRightImageComponent } from "../../commoncomponents/rightSideImageSection/rightSideImageComponent";
import { OurStrengths } from "../../components/about/ourStrengths/ourStrengths";
import { WhyChooseGwc } from "../../components/about/whyChooseGwc/whyChooseGwc";
import { WorkFromHomeBanner } from "../../components/about/workFromHome/WorkFromHomeBanner";
import { CommonRightSideImgWIthBannerBg } from "../../commoncomponents/rightSideImgWithBanner/RightSideImgWithBanner";
import { OurFuture } from "../../components/about/ourFuture/OurFuture";
import { AboutRecognitions } from "../../components/about/recognitions/Recognitions";

import styles from "../../commoncss/Home.module.css";
import Cricket_Poster from "../../assets/images/Banner/cricket.png";

// JSON DATA
import {
  AboutBannerData,
  AboutOverViewData,
  AboutWorkingWithGWCData,
  AboutLeadershipData,
  AboutOurStrengthData,
  AboutWhyChooseGwc,
  AboutWhyChooseGwcEmployees,
  AboutWorkFromHomeData,
  AboutOurCulture,
  AboutOurFutureData,
  AboutRecognitionsData,
} from "../../components/about/data";
import News from "../../components/about/News/News";
import WorkCulture from "../../components/about/workCulture/WorkCulture";
import NewsNewSection from "../../components/about/News/NewsNewSection";
import { Helmet } from "react-helmet-async";
import useMedia from "../../hooks/useMedia";

export const AboutPage = () => {
  const isMobile = useMedia("(max-width:500px)"); // Mobile Banner
  const [isVisible, setIsVisible] = useState(false);
  // console.log("state", isVisible);
  const toggleVisibility = (e) => {
    setIsVisible(!isVisible);
    // console.log("clicked");
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {};
  }, []);
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content=" Benefits of joining NASSCOM for tech companies, Easy ways to understand data analytics for business, How AI is changing technology today, What makes a CEO a good leader?, Tips for COOs to improve company operations, What does a CTO do in a company?, Simple ways to manage data effectively, How CIOs innovate with technology, What does a VP of Data-Engineering work on?, Advice from Associate Directors on company strategy, HR tips for a better workplace, How to measure success in business, Stories of innovative companies, Why workplace culture is important at GWC Data.AI, Success stories of young CEOs, What innovative startups are doing today, Why join NASSCOM as a tech company?, Using data for better business decisions, How AI is transforming industries, Leadership tips for CEOs, Introduction to data analytics for beginners, Impact of AI on everyday life, Qualities of effective COOs, Technology trends led by CTOs, Importance of data governance in businesses, Innovations in IT by CIOs, Career path of a VP of Data Engineering, Strategic planning tips for Associate Directors, HR practices that boost employee morale, Business metrics for measuring success, Insights into industry leaders, Creating a positive workplace culture, Challenges faced by young CEOs, Startup success stories, NASSCOM benefits for tech startups, Using data to drive business growth, AI applications in various industries, CEO leadership qualities to emulate, Data analytics made simple, Future of technology and innovation, Proud NASSCOM membership, NASSCOM affiliation, NASSCOM member company, NASSCOM technology partner, Advanced data analytics solutions, Data analytics expertise, Innovating with data analytics, Data-driven insights, AI innovation leaders, AI solutions provider, Harnessing AI technologies, AI-driven advancements, Tailored solutions provider, Innovative solution consulting, Solutions that drive success, Business technology solutions, Visionary founder CEO, CEO leadership insights, Founding CEO perspective, CEO innovation strategies, COO operational leadership, Strategic COO role, COO management expertise, Chief Operating Officer insights, CTO technology leadership, CTO innovation strategies, Chief Technology Officer insights, CTO technological vision, CDO data strategy, Chief Data Officer role, Leading CDO insights, CDO data governance, CIO innovation strategies, Chief Innovation Officer insights, CIO technology innovation, Leading CIO perspectives, Data engineering VP leadership, VP Data-Engineering role, Leading VP insights, Data engineering VP strategies, Associate Director role, Strategic associate director, Leadership insights AD, Associate Director perspective, People operations leadership, Head of HR insights, Leading people operations, HR strategies and insights, Demonstrated ROI success, ROI-driven solutions, Achieving ROI goals, Proven return on investment, Innovation pioneers, Leading innovation strategies, Pioneering industry innovation, Innovation trailblazers, Great Place to Work certified, GWC Data.AI workplace culture, Employee satisfaction GWC Data.AI, Work-life balance GWC Data.AI, Recognized CEO under 40, Top young CEO achievements, CEO accolades under 40, Leading young CEO recognition, Top Data AI startups, Recognized AI startups, Innovative data startups, Leading AI startup achievements,NASSCOM member,data analytics, artificial intelligence, solution matters,GWC Data.AI founder & CEO,GWC  COO,GWC  Chief Technology Officer, 
          GWC CTO,GWC Chief Data Officer,GWC CDO,GWC Chief Innovation Officer,GWC CIO, VP, data-engineering,GWC associate director, 
          GWC Head of People Operations,proven ROI, pioneering innovation, Great Place to Work 2024 , Top 10 CEO under 40, 
          10 Best Data & AI Startups,GWC DATA.AI, about us, data solutions, data analytics, company mission, technology innovation, our values, team, leadership, data-driven insights"
        />
        <meta
          name="description"
          content="Learn about GWC DATA.AI, a leader in data solutions and analytics. Discover our mission, values, and the innovative team driving our success in transforming data into actionable insights."
        />

        <title>GWC DATA.AI - About Us</title>
      </Helmet>
      {!isVisible && (
        <section>
          <div
            className={`${
              isMobile
                ? styles.poster_section_div_mobile
                : styles.poster_section_div
            }`}
          >
            <div
              onClick={(e) => toggleVisibility(e)}
              className={`${
                isMobile
                  ? styles.poster_svg_parent_mobile
                  : styles.poster_svg_parent
              }`}
            >
              <div
                style={{
                  cursor: "pointer",
                  zIndex: 1,
                  // border: "2px solid blue",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="20"
                  height="19"
                  style={{
                    cursor: "pointer",
                    zIndex: 1,
                  }} // Ensure cursor pointer is applied
                >
                  <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`${
                isMobile
                  ? styles.poster_image_outer_div_mobile
                  : styles.poster_image_outer_div
              }`}
            >
              <img
                src={Cricket_Poster}
                alt="Cricket_Poster"
                className={`${
                  isMobile ? styles.poster_image_mobile : styles.poster_image
                }`}
              />
            </div>
            <div className={`${styles.poster_button_outer_div}`}>
              <button
                className={`${
                  isMobile
                    ? styles.poster_button_div_mobile
                    : styles.poster_button_div
                }`}
              >
                <a
                  href="https://events.mhealth.ai/domo/domo-cxo-cricket-league"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "unset", textDecoration: "none" }} // Ensure link is styled correctly
                >
                  Register Now
                </a>
              </button>
            </div>
          </div>
        </section>
      )}
      <CommonSectionBanner commonSectionBannerContent={AboutBannerData} />
      <CommonLeftImageComponent commonLeftSectionContent={AboutOverViewData} />
      <OurFuture ourFutureContent={AboutOurFutureData} />
      <WorkCulture />
      {/* <CommonRightSideImgWIthBannerBg
        rightSideImgwithBgBanner={AboutOurCulture}
      /> */}
      <CommonLeftImageComponent
        commonLeftSectionContent={AboutWorkingWithGWCData}
      />
      {/* <WorkFromHomeBanner workFromHomeBannerContent={AboutWorkFromHomeData} /> */}
      <CommonRightImageComponent
        commonRightSectionContent={AboutLeadershipData}
      />
      <OurStrengths strengthsData={AboutOurStrengthData} />
      <WhyChooseGwc
        dataWhyChooseGwc={AboutWhyChooseGwc}
        dataEmployees={AboutWhyChooseGwcEmployees}
      />
      <AboutRecognitions recognitionsContent={AboutRecognitionsData} />
      <News />
      <NewsNewSection />
    </>
  );
};
