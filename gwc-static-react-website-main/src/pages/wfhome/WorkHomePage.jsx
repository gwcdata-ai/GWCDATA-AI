import React, { useEffect } from 'react'
// import WorkBanner from '../../components/workhome/WorkBanner'
import { WfhBannerData, WfhTeamData } from '../../components/career/data'
import { CommonSectionBanner } from '../../commoncomponents/banner/CommonBanner'
import { CommonLeftImageComponent } from '../../commoncomponents/leftSideImageSection/LestSideImageComponent'
import WorksCard from '../../components/workhome/WorksCard'
import HometownCard from '../../components/workhome/HometownCard'

const WorkHomePage = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        return () => { };
    }, []);


    return (
        <>
            <CommonSectionBanner commonSectionBannerContent={WfhBannerData} />
            <CommonLeftImageComponent commonLeftSectionContent={WfhTeamData} />
            <WorksCard />
            <HometownCard />
        </>
    )
}

export default WorkHomePage
