import React, { useEffect } from "react";
import { CommonSectionBanner } from "../../commoncomponents/banner/CommonBanner";
import { FiveBannerData } from "../../components/fiveTran/data";
import FivePlatform from "../../components/fiveTran/FivePlatform";
import FiveInsights from "../../components/fiveTran/FiveINsights";
import FiveStrategy from "../../components/fiveTran/FiveStrategy";
import FiveTabs from "../../components/fiveTran/fivetabs/FiveTabs";
import FiveOperations from "../../components/fiveTran/fiveoperation/FiveOperations";
import FivetranBanner from "./FivetranBanner";
import { Helmet } from "react-helmet-async";

const FiveTranPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {};
  }, []);

  return (
    <>
      {/* <CommonSectionBanner commonSectionBannerContent={FiveBannerData} /> */}
      <Helmet>
        {/* <meta
          name="keywords"
          content="DOMO,domo,Domo tools,data,data tools,Data Ai,AI tools,cloud solutions,data solutions,Big data"
        /> */}
        <meta
          name="description"
          content="Effortlessly centralize all the data you need so your team can deliver better insights, faster. Start for free."
        />

        <title>GWC DATA.AI - Fivetran | Automated data movement platform</title>
      </Helmet>
      <FivetranBanner />
      <FivePlatform />
      <FiveTabs />
      <FiveOperations />
      {/* <FiveInsights /> */}
      <FiveStrategy />
    </>
  );
};

export default FiveTranPage;
