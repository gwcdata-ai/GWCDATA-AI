import React, { useEffect } from 'react'
import AtlanBanner from '../../components/atlanPatners/AtlanBanner'
import CatalogAlation from '../../components/alation/catalogalation/CatalogAlation';
import AlationTab from '../../components/alation/alationTab/AlationTab';
import AlationCards from '../../components/alation/alationCard/AlationCards';
import AlationPurpose from '../../components/alation/alationPurposes/AlationPurpose';
import AlationSlider from '../../components/alation/alationSliders/AlationSlider';
import { PuttingDataToWork } from '../../components/solutions/puttingDataToWork/PuttingDataToWork';
import { AlationSolutionsData, AlationWhyChoose } from '../../components/alation/alationSliders/alationSliderData';
import AlationSolutionHeading from '../../components/alation/alationsolitionHeading/AlationSolutionHeading';
import DbtSoulutions from '../../components/dbtPatner/dbtSolutionsButton/DbtSoulutions';
import AlationBanner from '../../components/alation/alationBanner/AlationBanner';


const AlationsPage = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        return () => { };
    }, []);

    return (
        <>
            <AlationBanner />
            <CatalogAlation />
            <AlationTab />
            <AlationCards />
            <AlationPurpose />
            <AlationSolutionHeading />
            <DbtSoulutions dataLists={AlationSolutionsData} />
            <PuttingDataToWork
                puttingDataSectionContent={AlationWhyChoose}
            />
            {/* <AlationSlider /> */}
        </>
    )
}

export default AlationsPage
