import React, { useEffect } from "react";
import BoomiBanner from "../../components/boomi/BoomiBanner";
import BoomiWhat from "../../components/boomi/BoomiWhat";
import BoomiTabs from "../../components/boomi/BoomiTabs";
import BoomiSolutions from "../../components/boomi/boomiSolutions";
import { BoomiListData } from "../../components/boomi/boomiData";
import BoomiCustomers from "../../components/boomi/BoomiCustomers";
import BoomiFaq from "../../components/boomi/BoomiFaq";
import BoomiHeading from "../../components/boomi/BoomiHeading";
import { Helmet } from "react-helmet-async";

const BoomiPage = () => {
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
        {/* <meta
          name="keywords"
          content="DOMO,domo,Domo tools,data,data tools,Data Ai,AI tools,cloud solutions,data solutions,Big data"
        /> */}
        <title>{"GWC DATA.AI - Boomi"}</title>
        <meta
          name="description"
          content="Boomi's Analytics and Workflow Automation solutions provide a comprehensive way to improve decisions and control costs by using data-driven insights."
        ></meta>
      </Helmet>
      <BoomiBanner />
      <BoomiWhat />
      <BoomiFaq />
      <BoomiTabs />
      <BoomiCustomers />
      <BoomiHeading />
      <BoomiSolutions dataLists={BoomiListData} />
    </>
  );
};

export default BoomiPage;
