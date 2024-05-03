import { useState } from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "aos/dist/aos.css";
// COMPONENTS AND PAGES

import { Header } from "./components/header/Header";
import { AboutPage } from "./pages/about/About";
// import { HomePage } from "";
const HomePage = lazy(() => import("./pages/home/Home"));
import { FooterComponent } from "./components/footer/Footer";
import { SolutionsPage } from "./pages/solutions/Solutions";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Contact from "./pages/contact/Contact";
import ProductDemo from "./pages/productDemo/ProductDemo";
import ProductGCP from "./pages/ProductGCP/ProductGCP";
import { BiMigrationModernizationPage } from "./pages/solutions/BiMigrationandModernization/BiMigrationModernization";
import { IiotPage } from "./pages/solutions/Iiot/Iiot";
import Loader from "./commoncomponents/loader/loader";
import { CloudTransformationPage } from "./pages/solutions/cloudTransformation/CloudTransformation";
import { ArtificialInteligencePage } from "./pages/solutions/ArtificialInteligence/ArtificialInteligence";
import { DataEngineerPage } from "./pages/solutions/dataEngineering/DataEngineer";
import { BiAnalyticsPage } from "./pages/solutions/biAnalytics/BiAnalytics";
import { DataStrategyPage } from "./pages/solutions/dataStrategy/DataStrategy";
import { DataGovernancePage } from "./pages/solutions/dataGovernance/DataGovernance";
import { SalesforcePage } from "./pages/solutions/salesforce/Salesforce";
import Career from "./pages/career/Career";
import BlogPage from "./pages/blog/BlogPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import CaseStudyPage from "./pages/casestudy/CaseStudyPage";
import CaseStudyDetailPage from "./pages/casestudy/CaseStudyDetailPage";
import WorkHomePage from "./pages/wfhome/workHomePage";
import SnowFlakePage from "./pages/snowFlakes/SnowFlakePage";
import SalesForcePage from "./pages/salesforce/SalesForcePage";
import FiveTranPage from "./pages/fivetran/FiveTranPage";
import CareerDetail from "./components/career/careerdetailPage/CareerDetail";
import AtlanPage from "./pages/atlan/AtlanPage";
import DbtPage from "./pages/dbt/DbtPage";
import BoomiPage from "./pages/boomipatners/BoomiPage";
import LookerPage from "./pages/looker/LookerPage";
import { TrabluePage } from "./pages/trablue/TrabluePage";
import AlationsPage from "./pages/alationpage/AlationsPage";
import Domoproductinfo from "./pages/productDemo/DomoProductionPage/Domoproductinfo";
import JobPost from "./components/career/jobPost";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about-gwc" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route
            path="/solutions/bimigration-and-modernization"
            element={<BiMigrationModernizationPage />}
          />
          <Route
            path="/solutions/industrial-internet-of-things"
            element={<IiotPage />}
          />
          <Route
            path="/solutions/cloud-transformation"
            element={<CloudTransformationPage />}
          />
          <Route
            path="/solutions/artificial-intelligence"
            element={<ArtificialInteligencePage />}
          />
          {/* <Route path="/solutions/salesforce" element={<SalesforcePage />} /> */}
          <Route
            path="/solutions/business-intelligence-and-analytics"
            element={<BiAnalyticsPage />}
          />
          <Route
            path="/solutions/data-strategy"
            element={<DataStrategyPage />}
          />
          <Route
            path="/solutions/data-governance"
            element={<DataGovernancePage />}
          />
          <Route
            path="/solutions/salesforce"
            element={<SalesforcePage />} />

          <Route path="/contact-us" element={<Contact />} />
          <Route path="/domo-consulting" element={<ProductDemo />} />
          <Route path="/gcp-implementation" element={<ProductGCP />} />

          <Route path="/career" element={<Career />} />
          <Route path="/job-post" element={<JobPost />} />

          <Route path="/career-detail/:jobId" element={<CareerDetail />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route
            exact
            path="/blogs/:slug"
            element={<BlogDetailPage />}></Route>

          {/* <Route path="/blog-detail" element={<BlogDetailPage />} /> */}

          <Route path="/case-studies" element={<CaseStudyPage />} />
          {/* <Route path="/case-study-detail" element={<CaseStudyDetailPage />} /> */}

          <Route exact path="/case-studies/:slug" element={<CaseStudyDetailPage />}></Route>
          <Route path="/wfh" element={<WorkHomePage />} />

          <Route path="/snowflake" element={<SnowFlakePage />} />
          <Route path="/salesforce" element={<SalesForcePage />} />
          <Route path="/fivetran" element={<FiveTranPage />} />
          <Route path="/atlan" element={<AtlanPage />} />
          <Route path="/dbt" element={<DbtPage />} />
          <Route path="/boomi" element={<BoomiPage />} />
          <Route path="/looker" element={<LookerPage />} />
          <Route path="/tableau" element={<TrabluePage />} />
          <Route path="/alation" element={<AlationsPage />} />
          <Route path="/domoProdInfo/:iframeUrl" element={<Domoproductinfo />} />
        </Routes>
        <FooterComponent />
      </Suspense>
    </>
  );
}

export default App;

