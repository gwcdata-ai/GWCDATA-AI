import React, { useEffect } from 'react'
import CaseStudyDetail from '../../components/caseStudy/CaseStudyDetail'

const CaseStudyDetailPage = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => { };
  }, []);

  return (
    <>
     <CaseStudyDetail/> 
    </>
  )
}

export default CaseStudyDetailPage
