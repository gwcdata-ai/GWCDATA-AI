import React, { useEffect } from "react";
import DbtBanner from "../../components/dbtPatner/DbtBanner";
import WhatDbt from "../../components/dbtPatner/WhatDbt";
import DbtSoulutions from "../../components/dbtPatner/dbtSolutionsButton/DbtSoulutions";
import { DbtListData, KeyFeaturesDbt } from "../../components/dbtPatner/dbtSolutionsButton/buttonData";
import DbtTab from "../../components/dbtPatner/dbtTabs/DbtTab";
import DbtWorks from "../../components/dbtPatner/DbtWorks";
import DbtCard from "../../components/dbtPatner/dbtcardslider/DbtCard";
import DbtHeading from "../../components/dbtPatner/DbtHeading";
import { OurExpertiseSF } from "../../components/solutions/ourExpertise/ourExpertiseSF";
import { IIOTOurExpertise } from "../solutions/salesforce/data";

const DbtPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {};
  }, []);

  return (
    <>
      <DbtBanner />
      <WhatDbt />
      <OurExpertiseSF ourExpertiseContent={KeyFeaturesDbt} />
      {/* <DbtWorks /> */}
      <DbtTab />
      <DbtCard />
      <DbtHeading />
      <DbtSoulutions dataLists={DbtListData} />
    </>
  );
};

export default DbtPage;
