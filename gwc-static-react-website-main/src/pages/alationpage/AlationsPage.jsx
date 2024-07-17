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
        {/* <meta
          name="keywords"
          content="DOMO,domo,Domo tools,data,data tools,Data Ai,AI tools,cloud solutions,data solutions,Big data"
        /> */}
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
