// ASSETS
import BannerBgImg from "../../assets/images/solutions/solutionsBannerBg.jpeg";
import DataGovernanceImg from "../../assets/images/solutions/dataGovernance.jpeg";
import DataGovernanceRightImg from "../../assets/images/solutions/dataGovernanceRight.png";
import Expertise1Img from "../../assets/images/solutions/expertise1.png";
import Expertise2Img from "../../assets/images/solutions/expertise2.png";
import Expertise3Img from "../../assets/images/solutions/expertise3.png";
import Expertise4Img from "../../assets/images/solutions/expertise4.png";
import OurExpertisebannerBgImg from "../../assets/images/solutions/ourExpertisebannerBg.jpeg";
import ReadyTogetStartBgImg from "../../assets/images/solutions/readyTogetStart.jpeg";
import VideoRefImg from "../../assets/images/solutions/videoRef.jpeg";
import CaseStudy1Img from "../../assets/images/solutions/caseStudy1.png";
import CaseStudy2Img from "../../assets/images/solutions/caseStudy2.png";
import CaseStudy3Img from "../../assets/images/solutions/caseStudy3.png";
import { svgIcons } from "./svg";

export const SolutionBannerData = {
  breadcrumbs: [{ text: "Home", url: "/" }, { text: "Solutions" }],
  title: "Solutions",
  para: "What You Need To Know About Us",
  buttontext: "Get In Touch",
  url:'/contact-us',
  bannerBg: BannerBgImg,
};

export const SolutionMainDataGovernance = {
  sub_title: "Data Governance",
  title: "Empowering Organizations through Effective Data Governance",
  description:
    "It involves establishing policies, procedures, and standards to manage data assets, maintain data integrity, and comply with regulations, all while enabling effective decision-making and maximizing the value of data.",
  rightImg: DataGovernanceRightImg,
};

export const SolutionDataGovernanceList = [
  "Framework",
  "Policies",
  "Stewardship",
  "Policies",
  "Quality Management",
  "Governance Tools",
  "Lifecycle Management",
  "Privacy Compliance",
  "Policies",
  "Audit and Monitoring",
];

export const PrincipalDomoFeatureList = [
  "Data apps / intelligent apps",
  "Reporting and dashboards",
  "Self service",
  "Collaboration",
  "Embedded analytics",
  "Connect data",
  "Data transformation",
  "Security and governance",
];

export const SolutionDataGovernanceData = {
  sub_title: "Data Governance",
  title: "Data Governance Framework",
  list: [
    "Establish a structured framework for managing and governing data within the organization.",
    "Define roles, responsibilities, and decision-making processes related to data governance",
  ],
  leftImg: DataGovernanceImg,
};

export const SolutionsOurExpertise = {
  sub_title: "Our Expertise",
  title: "Expertise",
  bannerBg: OurExpertisebannerBgImg,
  list: [
    {
      id: 1,
      title: "Data Ingestion",
      img: Expertise1Img,
      text: "Acquire and import raw data from various sources Ensure seamless and reliable transfer of data into the data processing environment",
    },
    {
      id: 2,
      title: "Data Ingestion",
      img: Expertise2Img,
      text: "Acquire and import raw data from various sources Ensure seamless and reliable transfer of data into the data processing environment",
    },
    {
      id: 3,
      title: "Data Ingestion",
      img: Expertise3Img,
      text: "Acquire and import raw data from various sources Ensure seamless and reliable transfer of data into the data processing environment",
    },
    {
      id: 4,
      title: "Data Ingestion",
      img: Expertise4Img,
      text: "Acquire and import raw data from various sources Ensure seamless and reliable transfer of data into the data processing environment",
    },
  ],
};

export const SolutionPuttingDataToWorkData = {
  sub_title: "Putting Your Data To Work",
  title:
    "Explore The Data Experiences That Trigger Better, Faster Decisions Across Every Team And Function.",
  text: "Business Intelligence (BI) and Analytics involve the processes, technologies, and tools used to transform raw data into meaningful and actionable insights for informed decision-making within organizations. BI focuses on querying, reporting, and data visualization to track business performance, while Analytics encompasses advanced techniques like data mining, predictive analytics, and machine learning to discover patterns, trends, and future outcomes, aiding strategic planning and innovation.",
  list: [
    {
      id: 1,
      title: "Visualizations & Dashboardst",
      // img: svgIcons.icon1,
      img: Expertise1Img,
      text: [
        "Provide self-service analytics tools for users to explore data independently",
        "Foster a culture of data-driven decision-making within the organization",
      ],
    },
    {
      id: 2,
      title: "Reporting & Self-Service Analytics",
      // img: svgIcons.icon2,
      img: Expertise2Img,
      text: [
        "Provide self-service analytics tools for users to explore data independently",
        "Foster a culture of data-driven decision-making within the organization",
      ],
    },
    {
      id: 3,
      title: "Business Apps",
      // img: svgIcons.icon3,
      img: Expertise3Img,
      text: [
        "Provide self-service analytics tools for users to explore data independently",
        "Foster a culture of data-driven decision-making within the organization",
      ],
    },
    {
      id: 4,
      title: "Embedded Analytics",
      // img: svgIcons.icon4,
      img: Expertise4Img,
      text: [
        "Provide self-service analytics tools for users to explore data independently",
        "Foster a culture of data-driven decision-making within the organization",
      ],
    },
  ],
};

export const SolutionsReadyToGetStart = {
  sub_title: "Ready To Get Started",
  title:
    "See What GWC Can Do for You & Your Customers & Partners.",
  bannerBg: ReadyTogetStartBgImg,
  btn1: "Watch Demo",
  btn2: "Talk to GWC",
  video: VideoRefImg,
};

export const SolutionsCaseStudies = {
  sub_title: "Case Studies",
  title: "About Global Weconnect.",
  list: [
    {
      id: 1,
      img: CaseStudy1Img,
      title: "High Volume Data",
      tags: ["Development", "Content"],
      text: "Being a Technology partner for trusted name in the crowded BI sector for brands who look for a progressive way to change how they manage their business Being a Technology partner for trusted name in the crowded BI sector",
      more: "Learn More",
      url: "",
    },
    {
      id: 2,
      img: CaseStudy2Img,
      title: "Automobile Case Study",
      tags: ["Development", "Content"],
      text: "Being a Technology partner for trusted name in the crowded BI sector for brands who look for a progressive way to change how they manage their business Being a Technology partner for trusted name in the crowded BI sector",
      more: "Learn More",
      url: "",
    },
    {
      id: 3,
      img: CaseStudy3Img,
      title: "Incident Management",
      tags: ["Development", "Content"],
      text: "Being a Technology partner for trusted name in the crowded BI sector for brands who look for a progressive way to change how they manage their business Being a Technology partner for trusted name in the crowded BI sector",
      more: "Learn More",
      url: "",
    },
    {
      id: 4,
      img: CaseStudy3Img,
      title: "Case study title",
      tags: ["Development", "Content"],
      text: "Being a Technology partner for trusted name in the crowded BI sector for brands who look for a progressive way to change how they manage their business Being a Technology partner for trusted name in the crowded BI sector",
      more: "Learn More",
      url: "",
    },
  ],
};
