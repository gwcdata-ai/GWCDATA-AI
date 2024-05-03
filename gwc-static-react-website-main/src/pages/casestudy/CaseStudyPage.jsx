import React, { useEffect } from 'react'
import CaseStudy from '../../components/caseStudy/CaseStudy'
import CaseStudyBanner from '../../components/caseStudy/CaseStudyBanner'
import { CaseListData } from '../../components/caseStudy/caseData'

const CaseStudyPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => { };
  }, []);
  return (
    <>
      <CaseStudyBanner />
      <CaseStudy caseAllData={CaseListData} />
    </>
  )
}

export default CaseStudyPage
