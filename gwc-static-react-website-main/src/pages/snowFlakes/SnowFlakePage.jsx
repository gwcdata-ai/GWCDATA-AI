import React, { useEffect } from "react";
import { CommonSectionBanner } from "../../commoncomponents/banner/CommonBanner";
import { SnowBannerData, SnowList } from "../../components/snowflake/data";
import Platform from "../../components/snowflake/Platform";
import OfferingCard from "../../components/snowflake/OfferingCard";
import Collaberation from "../../components/snowflake/Collaberation";
import SnowOverflow from "../../components/snowflake/SnowOverflow";
import { DataGovernanceList } from "../../components/solutions/dataGovernancelist/DataGovernanceList";
import ServiceHead from "../../components/snowflake/ServiceHead";
import SnowflakeBanner from "./SnowflakeBanner";

const SnowFlakePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => { };
  }, []);

  return (
    <>
      {/* <CommonSectionBanner commonSectionBannerContent={SnowBannerData} /> */}
      <SnowflakeBanner />
      <Platform />
      <OfferingCard />
      {/* <Collaberation /> */}
      <SnowOverflow />
      <ServiceHead />
      <DataGovernanceList dataList={SnowList} />
    </>
  );
};

export default SnowFlakePage;
