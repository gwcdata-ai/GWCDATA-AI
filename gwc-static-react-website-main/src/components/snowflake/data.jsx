import wfhbanner from "../../assets/images/wfh/wfhbanner.webp";

import icon1 from "../../assets/images/snowFlake/icon1.svg";
import icon2 from "../../assets/images/snowFlake/icon2.svg";
import icon3 from "../../assets/images/snowFlake/icon3.svg";
import icon4 from "../../assets/images/snowFlake/icon4.svg";
import icon5 from "../../assets/images/snowFlake/icon5.svg";
import icon6 from "../../assets/images/snowFlake/icon6.svg";
import icon7 from "../../assets/images/snowFlake/icon7.svg";
import icon8 from "../../assets/images/snowFlake/icon8.svg";

import img1 from "../../assets/images/snowFlake/fs.png";
import img2 from "../../assets/images/snowFlake/hl.png";
import img3 from "../../assets/images/snowFlake/rc.png";
import img4 from "../../assets/images/snowFlake/me.png";
import img5 from "../../assets/images/snowFlake/tech.png";
import img6 from "../../assets/images/snowFlake/ps.png";
import img7 from "../../assets/images/snowFlake/edu.png";
import img8 from "../../assets/images/snowFlake/tel.png";

import snowbanner from "../../assets/images/snowFlake/snowbanner.webp";

export const SnowBannerData = {
  breadcrumbs: [{ text: "Home", url: "/" }, { text: "SnowFlake" }],
  title: "Snowflake ",
  para: "As a Snowflake partner, GWC is recognized for its expertise in implementing & optimizing solutions on the Snowflake platform. This partnership allows you to offer specialized services, including data migration, integration, & customized solutions, leveraging the capabilities of Snowflake's cloud data platform.",
  // buttontext: "Get in Touch",
  url: "/contact-us",
  bannerBg: snowbanner,
};

export const OfferCardData = [
  {
    id: 1,
    icon: icon1,
    text: "Data Warehousing",
    para: "Snowflake offers a fully managed, cloud-based data warehousing solution to store, process, & analyze large volumes of data in a scalable manner.",
  },
  {
    id: 2,
    icon: icon2,
    text: "Data Sharing",
    para: " Snowflake enables secure & easy data sharing between different organizations without copying or moving the data. ",
  },
  {
    id: 3,
    icon: icon3,
    text: "Data Integration",
    para: "Snowflake integrates with various data integration tools & platforms, allowing users to load & extract data seamlessly. ",
  },
  {
    id: 4,
    icon: icon4,
    text: "Secure Data Collaboration",
    para: "Snowflake emphasizes security, providing features such as encryption, role-based access control, & compliance with various data protection regulations.",
  },
  {
    id: 5,
    icon: icon5,
    text: "Multi-Cluster, Multi-Cloud Architecture",
    para: "Snowflake supports a multi-cluster, multi-cloud architecture, giving organizations the flexibility to choose cloud providers & scale compute resources based on their needs.",
  },

  {
    id: 6,
    icon: icon6,
    text: "Query Performance",
    para: " Snowflake is designed for high-performance query processing. It optimizes the speed of data retrieval & analysis, allowing users to derive insights rapidly.",
  },
  {
    id: 7,
    icon: icon7,
    text: "Global Availability",
    para: "Snowflake enables users to deploy data warehouses in different regions & across multiple cloud providers. This enhances performance, redundancy, & data accessibility.",
  },
  {
    id: 8,
    icon: icon8,
    text: "Snowflake Marketplace",
    para: " The Snowflake Marketplace is a platform where users can discover & access a variety of data sets, connectors, & applications to enhance their Snowflake environment.",
  },
  {
    id: 9,
    icon: icon7,
    text: "Data Governance & Management",
    para: "Snowflake provides features for effective data governance, including metadata management, data lineage, & auditing capabilities. ",
  },
  {
    id: 10,
    icon: icon8,
    text: "Snowpark ",
    para: " Snowpark is a feature that allows users to run custom code directly within Snowflake using familiar programming languages like Java & Scala. ",
  },
];

export const SnowList = [
  {
    id: 1,
    name: "Retail",
    className: "first",
    description_title: "Retail",
    description_list: [
      "Unified Data Platform: Enables retailers to consolidate data from various sources, including POS systems, e-commerce platforms, and supply chain data.",
      "Real-time Analytics: Supports real-time analytics, helping retailers analyze customer behavior, optimize inventory management, and personalize marketing strategies.",
    ],
    image: img1,
  },
  {
    id: 2,
    name: "Healthcare",
    description_title: "Healthcare",
    description_list: [
      " Secure Data Handling: By focusing on data security and compliance, Snowflake assists healthcare organizations in managing sensitive patient data securely.",
      "Advanced Analytics: Facilitates advanced analytics, allowing healthcare professionals to derive meaningful insights from patient records, optimize treatment plans, and streamline operations.",
    ],
    image: img2,
  },
  {
    id: 3,
    name: "Finance",
    description_title: "Finance",
    description_list: [
      "Scalable Data Processing: Handles large volumes of financial data efficiently for activities like risk management, fraud detection, and compliance reporting.",
      "Real-time Reporting: Supports real-time reporting and analytics, enabling faster decision-making and regulatory compliance.",
    ],
    image: img3,
  },
  {
    id: 4,
    name: "Manufacturing",
    description_title: "Manufacturing",
    description_list: [
      "Supply Chain Optimization: Helps manufacturers streamline their supply chain by integrating data from various sources, optimizing inventory levels, and improving production efficiency.",
      "Predictive Maintenance: Supports predictive maintenance analytics, reducing downtime by predicting equipment failures and scheduling maintenance proactively.",
    ],
    image: img4,
  },
  {
    id: 5,
    name: "Technology",
    description_title: "Technology",
    description_list: [
      "Data Collaboration: Snowflake's data sharing capabilities facilitate collaboration between technology companies and their partners, enabling secure and controlled data sharing.",
      "Scalable Infrastructure:Handles large datasets and adapts to changing infrastructure requirements.",
    ],
    image: img5,
  },
  {
    id: 6,
    name: "Education",
    description_title: "Education",
    description_list: [
      "Data-driven Decision-Making: Empowers educational institutions with data-driven decision-making by consolidating data from student records, academic performance, and administrative systems.",
      "Personalized Learning: Real-time analytics support personalized learning initiatives, helping educators tailor educational content to individual student needs.",
    ],
    image: img6,
  },
  {
    id: 7,
    name: "Hospitality",
    description_title: "Hospitality",
    description_list: [
      "Customer Experience Enhancement: Allows hospitality businesses to analyze customer preferences, feedback, and booking patterns, enabling personalized services and improving customer satisfaction.",
      "Operational Efficiency: Assists in optimizing operations by integrating data from various departments such as reservations, inventory, and customer service.",
    ],
    image: img7,
  },
  {
    id: 8,
    name: "Energy",
    description_title: "Energy",
    description_list: [
      "Smart Grid Analytics: Supports smart grid analytics, helping utilities analyze data from sensors and meters to optimize energy distribution.",
      "Predictive Analytics: Enables energy companies to implement predictive analytics for equipment maintenance, reducing downtime and operational costs.",
    ],
    image: img8,
  },
  // {
  //     id: 9,
  //     name: "Education",
  //     description_title:
  //         "Education",
  //     description_list: [
  //         "Supports data-driven decision-making and enhances learning experiences. ",
  //     ],
  //     image: img8
  // },
  // {
  //     id: 10,
  //     name: "Government/Public Sector",
  //     description_title:
  //         "Government/Public Sector",
  //     description_list: [
  //         " Manages and analyzes large datasets, improving transparency and supporting policy decisions.",
  //     ],
  //     image: img8
  // },
];
