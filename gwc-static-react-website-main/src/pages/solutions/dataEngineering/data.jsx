// ASSETS
import dataEngineerBanner from "../../../assets/images/solutions/dataeng/dataEngineerBanner.webp";
import DataGovernanceImg from "../../../assets/images/solutions/dataGovernance.jpeg";
import DataGovernanceRightImg from "../../../assets/images/solutions/dataeng/dataImg.png";
import Expertise1Img from "../../../assets/images/solutions/expertise1.png";
import Expertise2Img from "../../../assets/images/solutions/expertise2.png";
import Expertise3Img from "../../../assets/images/solutions/expertise3.png";
import Expertise4Img from "../../../assets/images/solutions/expertise4.png";
import OurExpertisebannerBgImg from "../../../assets/images/solutions/ourExpertisebannerBg.jpeg";
import ReadyTogetStartBgImg from "../../../assets/images/solutions/readyTogetStart.jpeg";
import VideoRefImg from "../../../assets/images/solutions/videoRef.jpeg";
import CaseStudy1Img from "../../../assets/images/solutions/caseStudy1.png";
import CaseStudy2Img from "../../../assets/images/solutions/caseStudy2.png";
import CaseStudy3Img from "../../../assets/images/solutions/caseStudy3.png";
import img1 from "../../../assets/images/solutions/dataeng/Data Ingestion.jpg";
import img2 from "../../../assets/images/solutions/dataeng/Data Storage.jpg";
import img3 from "../../../assets/images/solutions/dataeng/Data Processing.jpg";
import img4 from "../../../assets/images/solutions/dataeng/Data Integration.jpg";
import img5 from "../../../assets/images/solutions/dataeng/Data Modelling.jpeg";
import img6 from "../../../assets/images/solutions/dataeng/Data Monitoring and Logging.jpg";
import img7 from "../../../assets/images/solutions/dataeng/Scalability and Performance Optimization cloud technologies.jpg";
import img8 from "../../../assets/images/solutions/dataeng/Data Versioning and Change Management.jpg";
import img9 from "../../../assets/images/solutions/dataeng/Data Documentation.jpg";
import img10 from "../../../assets/images/solutions/dataeng/Data Retention and Archiving.jpg";

export const BiMigrationBannerData = {
    breadcrumbs: [
        { text: "Home", url: "/" },
        { text: "Data Engineering" },
    ],
    title: "Engineering futuristic data solutions with precision",
    // para: "Get ready for a future-ready and high-performance BI environment for your organization",
    buttontext: "Get In Touch",
    url: "/contact-us",
    bannerBg: dataEngineerBanner,
};

export const BiMigrationMainDataGovernance = {
    sub_title: "Why Data Engineering?",
    title:
        "Navigate the data frontier with confidence",
    description:
        "Leverage advanced data analytics and AI solutions to extract meaningful insights that drive strategic decision-making for your business. ",
    rightImg: DataGovernanceRightImg,
};

export const BiMigrationDataGovernanceList = [
    {
        id: 1,
        name: "Data Ingestion",
        description_title:
            "Seamless Data Inflow",
        description_list: [
            "Seamless integration of diverse data sources, allowing for a unified and comprehensive view of your information landscape.",
            "Implement real-time data ingestion, to enable organizations to stay agile and responsive.",
        ],
        image: img1
    },
    {
        id: 2,
        name: "Data Storage ",
        description_title:
            "Manage large volumes of information efficiently.",
        description_list: [
            "Implement scalable and flexible data storage infrastructure.",
            "Improved performance and reduced costs over time.",
        ],
        image: img2
    },
    {
        id: 3,
        name: "Data Processing",
        description_title:
            "Transform raw data into meaningful insights.",
        description_list: [
            "Implement robust data processing pipelines to ensure timely and accurate results. ",
            "Enhance decision-making processes, accelerate time-to-insight, and maintain a competitive edge in dynamic business environments.",
        ],
        image: img3
    },
    {
        id: 4,
        name: "Data Integration ",
        description_title: " Create a unified view with Data Integration",
        description_list: [
            "Enable the consolidation of diverse datasets, promoting a comprehensive understanding of information. ",
            "Employ technologies such as ETL (Extract, Transform, Load) processes and middleware solutions.",
        ],
        image: img4
    },
    {
        id: 5,
        name: "Data Modelling",
        description_title: " Enable data to meet specific business needs.",
        description_list: [
            "Ensure consistency, accuracy, and clarity in interpreting and utilizing data. ",
            "Utilize techniques such as entity-relationship modeling and normalization to create a reliable foundation for data management.",
        ],
        image: img5
    },
    {
        id: 6,
        name: "Data Monitoring and Logging",
        description_title:
            "Insights into system health and usage patterns",
        description_list: [
            "Real-time visibility into data-related activities. ",
            "Proactive issue identification and resolution. ",
        ],
        image: img6
    },
    {
        id: 7,
        name: "Scalability and Performance Optimization",
        description_title:
            " Seamless expansion to accommodate growing data loads",
        description_list: [
            "Optimize performance including fine-tuning algorithms, hardware configurations, and database designs.",
            "Enhanced system responsiveness, user experience, and overall operational efficiency.",
        ],
        image: img7
    },
    {
        id: 8,
        name: "Data Versioning and Change Management",
        description_title: "Track and control alterations to data",
        description_list: [
            "Implement version control mechanisms.",
            "Clear audit trail of changes.",
        ],
        image: img8
    },
    {
        id: 9,
        name: "Data Documentation ",
        description_title: "Metadata, data lineage, and clear descriptions",
        description_list: [
            "Maintain transparency, facilitate collaboration, and ensure the reproducibility of analyses.",
            "Aids current operations and serves as a valuable resource for future analysis, troubleshooting, and knowledge transfer.",
        ],
        image: img9
    },
    {
        id: 10,
        name: " Data Retention and Archiving",
        description_title: "Staying compliant with regulatory requirements.",
        description_list: [
            "Establishing effective data retention and archiving policies.",
            "Preservation of valuable information without affecting the performance of active systems.",
        ],
        image: img10
    },
];

export const BiMigrationDomoFeatureList = [
    "Data apps / intelligent apps",
    "Reporting and dashboards",
    "Self service",
    "Collaboration",
    "Embedded analytics",
    "Connect data",
    "Data transformation",
    "Security and governance",
];

export const BiMigrationDataGovernanceData = {
    // sub_title: "Data Governance",
    title:
        "Exceptionally unique and adaptable BI modernization with GWC’s Migration Accelerator",
    list: [
        "We empower you to formulate a strategy for upgrading BI.",
        "Place data at the core of your business transformation. ",
    ],
    description:
        "Enhance user experiences and revolutionize business processes through the creation of innovative approaches to leverage data for informed decision-making. ",
    leftImg: DataGovernanceImg,
};

export const BiMigrationOurExpertise = {
    // sub_title: "Our Expertise",
    title: "Expertise",
    bannerBg: OurExpertisebannerBgImg,
    list: [
        {
            id: 1,
            title: "Data Integration",
            img: Expertise1Img,
            text: "Seamlessly integrate disparate data sources and transform raw data into actionable insights. Our expertise in Extract, Transform, Load (ETL) processes ensures a streamlined flow of data across your organization.",
        },
        {
            id: 2,
            title: "Data Warehousing Solutions",
            img: Expertise2Img,
            text: "Build a robust foundation for your data strategy with our data warehousing solutions. Organize, store, and manage vast amounts of data efficiently, providing a central repository for all your analytical needs.",
        },
        {
            id: 3,
            title: "Real-time Data Processing",
            img: Expertise3Img,
            text: "Stay ahead of the curve with real-time data processing capabilities. Our solutions enable you to harness insights from data as it flows, ensuring up-to-the-minute decision-making and responsiveness.",
        },
        {
            id: 4,
            title: "Data Quality and Governance",
            img: Expertise4Img,
            text: "Ensure the integrity and quality of your data with our robust data governance frameworks. From data profiling to quality monitoring, we implement measures to guarantee the accuracy and reliability of your information.",
        },
    ],
};

export const BiMigrationPuttingDataToWorkData = {
    // sub_title: "Why choose GWC?",
    title: "Why choose GWC? ",
    text: " We understand the crucial role of data in steering modern businesses towards success. GWC is your dedicated partner in data analytics and AI services. We stand out by offering progressive solutions that serve to enhance and fortify your organization's data strategy.",
    points: [
        "Ensuring data quality at every layer of data engineering.",
        "In-depth expertise spanning technical and business realms. ",
        "Expertise in building a single source of truth.",
        "AI-enabled data engineering layer.",
    ],
    list: [
        {
            id: 1,
            title: "Expertise",
            img: Expertise1Img,
            text: [
                "Technocrats with expertise.",
                "Proven track record in implementing successful data strategies. ",
            ],
        },
        {
            id: 2,
            title: "Innovation",
            img: Expertise2Img,
            text: ["Leverage latest technologies. ", "Innovative solutions. "],
        },
        {
            id: 3,
            title: "Measurable Results",
            img: Expertise3Img,
            text: [
                "Enhanced operational efficiency ",
                "Cost reduction and business growth. ",
            ],
        },
        {
            id: 4,
            title: "Client-Centric Approach",
            img: Expertise4Img,
            text: [
                "Keen understanding of your unique challenges and goals.  ",
                "Solutions tailored to meet your organization's specific requirements. ",
            ],
        },
    ],
};

export const BiMigrationReadyToGetStart = {
    sub_title: "Ready To Get Started",
    title:
        "See What GWC Can Do for You & Your Customers & Partners.",
    bannerBg: ReadyTogetStartBgImg,
    btn1: "Watch Demo",
    btn2: "Talk to GWC",
    video: VideoRefImg,
};

export const BiMigrationCaseStudies = {
    sub_title: "Case Studies",
    title: "A peek into our data success stories ",
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
            img: CaseStudy2Img,
            title: "Automobile Case Study",
            tags: ["Development", "Content"],
            text: "Being a Technology partner for trusted name in the crowded BI sector for brands who look for a progressive way to change how they manage their business Being a Technology partner for trusted name in the crowded BI sector",
            more: "Learn More",
            url: "",
        },
        {
            id: 5,
            img: CaseStudy3Img,
            title: "Case study title",
            tags: ["Development", "Content"],
            text: "Being a Technology partner for trusted name in the crowded BI sector for brands who look for a progressive way to change how they manage their business Being a Technology partner for trusted name in the crowded BI sector",
            more: "Learn More",
            url: "",
        },
    ],
};
