import React, { useEffect } from "react";
import AtlanBanner from "../../components/atlanPatners/AtlanBanner";
import CatalogAlation from "../../components/alation/catalogalation/CatalogAlation";
import AlationTab from "../../components/alation/alationTab/AlationTab";
import AlationCards from "../../components/alation/alationCard/AlationCards";
import AlationPurpose from "../../components/alation/alationPurposes/AlationPurpose";
import AlationSlider from "../../components/alation/alationSliders/AlationSlider";
import { PuttingDataToWork } from "../../components/solutions/puttingDataToWork/PuttingDataToWork";
import {
  AlationSolutionsData,
  AlationWhyChoose,
} from "../../components/alation/alationSliders/alationSliderData";
import AlationSolutionHeading from "../../components/alation/alationsolitionHeading/AlationSolutionHeading";
import DbtSoulutions from "../../components/dbtPatner/dbtSolutionsButton/DbtSoulutions";
import AlationBanner from "../../components/alation/alationBanner/AlationBanner";
import { Helmet } from "react-helmet-async";

const AlationsPage = () => {
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
          content="Distributed Databases, Big Data Processing Frameworks, In-Memory Computing, API Management, Backend Technologies, Manage Workflows, Monitor Workflows, Get Slack Alerts, Active Data Governance, AI & ML, Cloud Data Migration, Data Quality, Privacy, Risk, Compliance, From Data Deluge to Data Delight, Decision Confidence, Frictionless Collaboration, Compliance Management, Alation, Strategic Growth"
        />

        <title>{" GWC DATA.AI - Alation"}</title>
        <meta
          name="description"
          content="Lead your business fearlessly with data using Alation's industry-leading data intelligence platform. Discover, understand, & trust your data like never before."
        ></meta>
      </Helmet>

      <AlationBanner />
      <CatalogAlation />
      <AlationTab />
      <AlationCards />
      <AlationPurpose />
      <AlationSolutionHeading />
      <DbtSoulutions dataLists={AlationSolutionsData} />
      <PuttingDataToWork puttingDataSectionContent={AlationWhyChoose} />
      {/* <AlationSlider /> */}
    </>
  );
};

export default AlationsPage;
