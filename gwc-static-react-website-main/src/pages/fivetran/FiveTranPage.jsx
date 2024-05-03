import React, { useEffect } from "react";
import { CommonSectionBanner } from "../../commoncomponents/banner/CommonBanner";
import { FiveBannerData } from "../../components/fiveTran/data";
import FivePlatform from "../../components/fiveTran/FivePlatform";
import FiveInsights from "../../components/fiveTran/FiveINsights";
import FiveStrategy from "../../components/fiveTran/FiveStrategy";
import FiveTabs from "../../components/fiveTran/fivetabs/FiveTabs";
import FiveOperations from "../../components/fiveTran/fiveoperation/FiveOperations";
import FivetranBanner from "./FivetranBanner";

const FiveTranPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => { };
  }, []);

  return (
    <>
      {/* <CommonSectionBanner commonSectionBannerContent={FiveBannerData} /> */}
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
