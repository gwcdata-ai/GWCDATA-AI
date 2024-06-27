import BlogDetailImg from "../../assets/images/Blog/BlogDetailImg.png";
import detailImg from "../../assets/images/Blog/detailImg.png";
import cardImg1 from "../../assets/images/Blog/cardImg1.png";
import cardImg2 from "../../assets/images/Blog/cardImg2.png";
import cardImg3 from "../../assets/images/Blog/cardImg3.png";
import deeplink_header from "../../assets/images/Blog/deeplink_header.png";
import deeplink_1 from "../../assets/images/Blog/deeplink_1.png";
import deeplink_2 from "../../assets/images/Blog/deeplink_2.png";
import deeplink_3 from "../../assets/images/Blog/deeplink_3.png";
import domo_custom_app_header from "../../assets/images/Blog/domo_custom_app_header.png";
import business_intelligence_header from "../../assets/images/Blog/business_intelligence_header.png";
import cloud_computing_header from "../../assets/images/Blog/cloud_computing_header.png";
import domo_custom_app_1 from "../../assets/images/Blog/domo_custom_app_1.png";
import domo_custom_app_2 from "../../assets/images/Blog/domo_custom_app_2.png";
import domo_custom_app_3 from "../../assets/images/Blog/domo_custom_app_3.png";
import domo_custom_app_4 from "../../assets/images/Blog/domo_custom_app_4.png";
import domo_custom_app_5 from "../../assets/images/Blog/domo_custom_app_5.png";
import domo_custom_app_6 from "../../assets/images/Blog/domo_custom_app_6.png";
import domo_custom_app_7 from "../../assets/images/Blog/domo_custom_app_7.png";
import domo_custom_app_8 from "../../assets/images/Blog/domo_custom_app_8.png";
import domo_custom_app_9 from "../../assets/images/Blog/domo_custom_app_9.png";
import domo_custom_app_10 from "../../assets/images/Blog/domo_custom_app_10.png";
import domo_custom_app_11 from "../../assets/images/Blog/domo_custom_app_11.png";
import domo_custom_app_12 from "../../assets/images/Blog/domo_custom_app_12.png";
import domo_custom_app_13 from "../../assets/images/Blog/domo_custom_app_13.png";
import domo_custom_app_14 from "../../assets/images/Blog/domo_custom_app_14.png";
import domo_custom_app_15 from "../../assets/images/Blog/domo_custom_app_15.png";
import domo_custom_app_16 from "../../assets/images/Blog/domo_custom_app_16.png";
import domo_custom_app_17 from "../../assets/images/Blog/domo_custom_app_17.png";
import Blog_4_title from "../../assets/images/Blog/Blog_4_title.jpg";

import Blog_4_1 from "../../assets/images/Blog/Customer_Service.jpg";
import Blog_4_2 from "../../assets/images/Blog/Engineering_and_Design.jpg";
import Blog_4_3 from "../../assets/images/Blog/Information_Technology.jpg";
import Blog_4_4 from "../../assets/images/Blog/Legal_and_Compliance.jpg";
import Blog_4_5 from "../../assets/images/Blog/Maintenance_and_Facilities.jpg";
import Blog_4_6 from "../../assets/images/Blog/Quality_ControlAssurance.jpg";
import Blog_4_7 from "../../assets/images/Blog/Research_and_Development.jpg";
import Blog_4_8 from "../../assets/images/Blog/Supply_ChainLogistics.jpg";




export const BlogListData = [
  {
    id: 1,
    slug: "secure-data-encryption-in-google-cloud-protecting-sensitive-data-with-cloud-dlp-and-kms",
    date: "January 08, 2024",
    heading: "Secure Data Encryption in Google Cloud",
    days: "2 days ago",
    // views: "110k views",
    img: cloud_computing_header,
    topHeading:
      "Secure Data Encryption in Google Cloud: Protecting Sensitive Data with Cloud DLP and KMS",
    blogTopImg: cloud_computing_header,
    blogSubHeading:
      "Secure Data Encryption in Google Cloud: Protecting Sensitive Data with Cloud DLP and KMS",
    blogSubPara1:
      "In an era where data is the lifeblood of organizations, ensuring its security and privacy is paramount. With the rise of data breaches and regulatory compliance requirements, protecting sensitive information, such as Personally Identifiable Information(PII), has become a top priority.This article explores how to harness the power of Google Cloud's Data Loss Prevention (DLP) and Key Management Service(KMS) to create a robust data security pipeline.We'll demonstrate how to inspect, de- identify, and encrypt sensitive data, safeguarding it from unauthorized access.",
    blogList: [
      {
        id: 1,
        listHeading: "Overview",
        listPara:
          "Google Cloud's Data Loss Prevention(DLP) offers a suite of cutting- edge services designed to help organizations discover, classify, and shield sensitive data across their cloud resources.DLP's feature set includes data inspection, categorization, and de - identification, all of which are vital for complying with data protection regulations and preventing data breaches.",
      },
      {
        id: 2,
        // listHeading: "1. Data Ingestion",
        listPara:
          'DLP employs a range of advanced techniques, from pattern matching to machine learning, enabling it to identify sensitive data accurately.Additionally, it offers predefined categories of sensitive information known as "Infotypes," encompassing a wide array of data types such as credit card numbers, Social Security numbers, National IDs, and email addresses.',
      },
      {
        id: 3,
        // listHeading: "2. Data Storage",
        listPara:
          "On the other hand, Google's Cloud Key Management Service(KMS) simplifies encryption key management for cloud resources.It supports various key types, including software- based keysmanaged by Google, customer - managed encryption keys(CMEK), hardware - based keys with Hardware Security Modules(HSM), and integration with external key managers",
      },
      {
        id: 4,
        // listHeading: "Best Reasons to Invest in OTT App Development",
        listPara:
          "Dataflow service that enables the creation of secure data pipelines in Google Cloud. These services leverage the KMS and DLP APIs to build secure, cloud- native data pipelines, complete with data scanning and de- identification of sensitive data.",
      },
      {
        id: 5,
        listHeading: "What We Will Cover",
        listSub:
          "In this article, we will guide you through the process of using Google Cloud's Data Loss Prevention (DLP) and Key Management Service(KMS) to: ",
        listPoints: [
          "Inspect and redact sensitive data using DLP's Inspection and De-Identification templates.",
          "Use a KMS-generated symmetric encryption key to encrypt the identified sensitive data.",
          "Create a data pipeline that reads data with sensitive information from a file in a Cloud Storage bucket.",
          "Inspect the data using the DLP Inspection template and redact the findings by encrypting the data with a KMS encryption key",
          "Load the encrypted data into a BigQuery table using Dataflow",
          "This architecture ensures that sensitive information is securely encrypted in the BigQuery table, providing an extra layer of security in case of data exfiltration.",
        ],
      },
      {
        id: 6,
        listHeading: "Setup and Requirements",
        listSub:
          "Before diving into the implementation, ensure you have the following set up:",
        listPoints: [
          "Google Cloud Data Loss Prevention (DLP)",
          "Google Cloud Key Management Service (KMS)",
          "Google Cloud Dataflow",
          "Google Cloud Storage",
          "Google BigQuery",
        ],
      },
      {
        id: 6,
        listHeading:
          "Ensure that the following roles are assigned to the service account:",
        // listSub: 'Before diving into the implementation, ensure you have the following set up:',
        listPoints: [
          "BigQuery Data Editor",
          "BigQuery Job User",
          "Dataflow Worker",
          "DLP Administrator",
          "Storage Admin",
        ],
      },
      {
        id: 7,
        listHeading: "1. Implementation Steps",
        listSub: "Bucket in Google Cloud Storage and Load File",
        listPoints: [
          "Create a Google Cloud Storage bucket to hold the sample data file, e.g., gs://gcp-project bucket-2023.",
          "Upload a sample CSV file containing sensitive PII data, such as US_SOCIAL_SECURITY_NUMBER",
        ],
      },
      {
        id: 8,
        listHeading: "2. Key Ring and Encryption Key Creation in KMS",
        // listSub: 'Bucket in Google Cloud Storage and Load File',
        listPoints: [
          "Navigate to the Cloud KMS section in Google Cloud Console.",
          "Enable the KMS API if not already enabled.",
          "Create a key ring (e.g., ring) within KMS.",
          "Create a key within the key ring with software protection and purpose set to symmetric encrypt / decrypt.",
          "Store the key resource name for later use",
        ],
      },
      {
        id: 9,
        listHeading: "3. Create the Inspection Template in DLP",
        // listSub: 'Bucket in Google Cloud Storage and Load File',
        listPoints: [
          "Enable the DLP API if not already enabled",
          "In DLP, navigate to CONFIGURATION - TEMPLATES - INSPECT.",
          "Create an Inspection Template, specifying the infotypes to detect, e.g.,US_SOCIAL_SECURITY_NUMBER.",
        ],
      },
      {
        id: 10,
        listHeading: "4. Create the Wrapped Key and De-Identification Template",
        // listSub: 'Bucket in Google Cloud Storage and Load File',
        listPoints: [
          "Create a De-Identification Template in DLP to define how findings should be redacted.",
          "Specify the key resource name from KMS and provide a wrapped key.",
          "Select the infoTypes (e.g., US_SOCIAL_SECURITY_NUMBER) to encrypt.",
          "Review and create the De-Identification Template.",
        ],
      },
      {
        id: 11,
        listHeading: "5. Create Dataflow Job",
        // listSub: 'Bucket in Google Cloud Storage and Load File',
        listPoints: [
          "Ensure the required IAM roles are assigned for Dataflow service accounts",
          "Create a BigQuery dataset to store the results.",
          "Enable the necessary APIs for Dataflow",
          "Create a Dataflow job using the Data Masking/Tokenization template",
          "Configure the template parameters, specifying the location of the sample data, BigQuery dataset, project ID, temporary Cloud Storage bucket, and Cloud DLP De - Identification template resource name",
          "Run the Dataflow job",
        ],
      },
    ],
    imageHeading: "Why Does GWC Interaction Matter?",
    blogImage: cloud_computing_header,
    conclusion: "Conclusion",
    conclusionText:
      "By following these steps, you can build a secure data pipeline in Google Cloud that utilizes Data Loss Prevention(DLP) and Key Management Service(KMS) to inspect, redact, and encrypt sensitive data.This approach ensures that your sensitive information is protected both at rest and in transit, helping you maintain compliance with data protection regulations and safeguarding your valuable  data assets. Secure your data in the cloud with confidence using these robust Google Cloud services.",
    writtenBy: "Written by Naveen - January 13, 2024",
  },
  {
    id: 2,
    slug: "business-intelligence-and-analytics",
    date: "February 27, 2024",
    heading: "Business Intelligence & Analytics",
    days: "2 days ago",
    views: "11k views",
    img: business_intelligence_header,
    topHeading: "Business Intelligence & Analytics",
    blogTopImg: business_intelligence_header,
    blogSubHeading: "Business Intelligence & Analytics",
    // blogSubPara1: '',
    blogList: [
      {
        id: 1,
        listHeading: "Unlocking Insights, Empowering Decisions",
        listPara:
          "Our cutting-edge data analytics and business intelligence solutions empower organizations to extract valuable insights from their data, enabling them to stay ahead in today's competitive landscape.",
      },
      {
        id: 2,
        listHeading: "Empowering Intelligent Decisions Through Data",
        listPara:
          "At GWC DATA.AI, we understand that every organization is unique, with its own set of challenges, objectives, and data requirements. That's why we take a collaborative and consultative approach to every project, working closely with our clients to develop customized solutions that address their specific needs.",
      },
      {
        id: 3,
        listHeading: "Services We Offer ",
        listPoints: [
          "<b> Business Intelligence Solutions: </b> Our business intelligence solutions are designed to provide organizations with the insights they need to make smarter decisions, optimize operations, and drive performance. Whether you're looking to create interactive dashboards, generate detailed reports, or implement predictive analytics capabilities, we have the expertise and tools to help you succeed. ",
          "<b> Data Analytics Services: </b> Our data analytics services enable organizations to unlock valuable insights from their data, uncover hidden patterns and trends, and gain a deeper understanding of their customers, operations, and market dynamics. From exploratory data analysis to advanced machine learning algorithms, we offer a comprehensive range of analytics services to meet your needs. ",
          "<b> Data Visualization and Reporting: </b> We believe that data visualization is key to making data-driven decisions. That's why we specialize in creating visually compelling and interactive dashboards and reports that enable users to explore data intuitively, identify trends, and derive actionable insights. Whether you're a business executive, analyst, or frontline employee, our visualizations empower you to make sense of your data and take action with confidence.",
          "<b> Data Integration and Management: </b> In today's data-driven world, organizations often deal with disparate data sources scattered across multiple systems and platforms. Our data integration and management services help you break down data silos, streamline data workflows, and create a single source of truth for your data. From data warehousing to ETL (Extract, Transform, Load) processes, we have the expertise to handle all aspects of data integration and management.",
        ],
        // listPara:"",
      },
      {
        id: 4,
        listHeading: "Expertise ",
        listPoints: [
          "<b> Comprehensive Data Visualization: </b> Effortlessly navigate your data landscape with our advanced data visualization tools. Transforming intricate datasets into intuitive visualizations, we offer clarity and actionable insights into your business metrics. ",
          "<b> Advanced Analytics Integration: </b> Elevate your decision-making process with our seamlessly integrated advanced analytics solutions. Harnessing the power of AI, we uncover predictive insights that empower proactive strategies for business growth.",
          "<b> Real-time Reporting & Dashboards : </b> Access real-time insights with our dynamic reporting and dashboard solutions. Monitor key metrics, trends, and performance indicators instantly, enabling agile decision-making and rapid response to changing conditions.",
          "<b> Data-driven Strategy Development  : </b> Craft strategic initiatives guided by data-driven insights. Our approach integrates comprehensive data analysis to inform decision-making, empowering organizations to adapt, innovate, and thrive in dynamic markets.",
        ],
        // listPara:"",
      },
      {
        id: 5,
        listHeading: "Why Choose GWC DATA.AI?  ",
        listPoints: [
          "<b> Expertise: </b> Our team consists of seasoned data scientists, business analysts, and technology experts with deep domain knowledge and hands-on experience in business intelligence and data analytics. ",
          "<b> Innovation: </b> We stay at the forefront of technological advancements in data analytics, continuously exploring new tools and methodologies to deliver innovative solutions that drive business value.",
          "<b> Customization: </b> We understand that one size does not fit all. That's why we take the time to understand your unique business requirements and tailor our solutions to meet your specific needs and objectives. ",
          "<b> Results-Driven: </b> Our ultimate goal is to help you achieve measurable results and maximize the return on your data investments. Whether it's increasing revenue, reducing costs, or improving customer satisfaction, we're committed to delivering outcomes that drive tangible business impact.",
        ],
        // listPara:"",
      },
    ],
    imageHeading: "Business Intelligence & Analytics",
    blogImage: business_intelligence_header,
    conclusion: "Ready to take your data strategy to the next level?",
    conclusionText:
      "Contact us today to schedule a consultation and discover how GWC DATA.AI can help you unleash the power of your data. ",
    writtenBy: "Written by Naveen - February 13, 2024",
  },
  {
    id: 3,
    slug: "deep-link-filters-in-domo",
    date: "February 27, 2024",
    heading: "Deep Link Filters in DOMO",
    days: "2 days ago",
    views: "12k views",
    img: deeplink_header,
    topHeading: "Deep Link Filters in DOMO",
    blogTopImg: deeplink_header,
    blogSubHeading: "Deep Link Filters in DOMO",
    // blogSubPara1: '',
    blogList: [
      {
        id: 1,
        listHeading: "Introduction",
        listPara:
          "Deep Link View Filters in DOMO may sound complex, but at its core, it's a simple yet powerful concept. Imagine you have a dashboard or page displaying your data insights. Now, picture being able to filter the content of that dashboard dynamically based on certain criteria – that's precisely what Deep Link View Filters enable you to do.",
      },
      {
        id: 2,
        listHeading: "How it Works",
        listPara:
          "Here's the magic behind Deep Link View Filters, by constructing a specific URL with predefined parameters, you can control what data is displayed on a dashboard or Analysis page. This means you can seamlessly navigate from one view to another, all while maintaining context, relevancy in term of filters in your data analysis journey.  ",
      },
      {
        id: 3,
        listHeading: "Putting It into Practice",
        images: [deeplink_1],
        listPara:
          "Let's say you have a service monitoring dashboard showcasing open tickets across. With Deep Link View Filters, you can drill down into specific Assignee Group with a single click. This not only saves time but also empowers you to extract deeper insights without getting lost in a sea of data. ",
      },
      {
        id: 4,
        listHeading:
          "Navigation to Detailed page with Selected Assignee Group filters ",
        listPara:
          "We can take Customer Support Assignee Group as an example, by clicking the customer support filter from the service monitoring dashboard it will navigate us to new page which shows only the Customer Support insights filter as shown above. ",
        images: [deeplink_2],
      },
      {
        id: 5,
        listHeading: "Behind the Scenes",
        listPara:
          "To achieve this, we need to create a separate Beast Mode as shown below, ",
        images: [deeplink_3],
        listPoints: [
          "In this Beast mode the URL of the detailed page plays main role, we need to pass that URL into this beast mode and add a filter column (`Assignee group name`) in end of the URL as shown above. ",
          "By doing this we can navigate to a detailed page by carrying a filters. ",
        ],
      },
      {
        id: 6,
        listHeading: "Why It Matters",
        listPara:
          "Deep Link View Filters or P-Filters aren't just a fancy feature, they're a game-changer for data analysts and decision-makers alike. By providing a fluid and intuitive way to explore data, they democratize access to insights and empower users at all levels to make informed decisions.  ",
      },
      {
        id: 7,
        listHeading: "Tips for Success",
        listPoints: [
          "<b> Start Simple: </b> Don't feel overwhelmed by the technicalities. Begin with basic filtering scenarios and gradually explore more advanced functionalities.  ",
          "<b> Experiment and Learn: </b> he best way to understand Deep Link View Filters is by experimenting with different parameters and observing how they affect your data views.",
          "<b> Share Knowledge: </b> Spread the word about Deep Link View Filters within your organization. The more people understand and use this feature, the greater its impact will be.  ",
          "<b> Stay Curious: </b> Keep exploring new ways to leverage Deep Link View Filters in your data analysis workflows. You never know what insights you might uncover! ",
        ],
      },
    ],
    imageHeading: "Deep Link Filters in DOMO",
    blogImage: deeplink_header,
    conclusion: "Conclusion",
    conclusionText:
      "In conclusion, Deep Link View Filters in DOMO represent a leap forward in data analysis innovation. By offering a seamless and intuitive way to filter data views, they empower users to extract meaningful insights with ease and precision. So, why wait? Dive into the world of Deep Link View Filters and unlock the full potential of your data analysis journey today!",
    writtenBy: "Written by Naveen - February 13, 2024",
  },
  {
    id: 4,
    slug: "the-need-for-custom-app-solutions-addressing-challenges-faced-by-domo",
    date: "February 27, 2024",
    heading: "Addressing Challenges Faced by Domo",
    days: "2 days ago",
    views: "12k views",
    img: domo_custom_app_header,
    topHeading:
      "The Need for Custom App Solutions: Addressing Challenges Faced by Domo",
    blogTopImg: domo_custom_app_header,
    blogSubHeading:
      "The Need for Custom App Solutions: Addressing Challenges Faced by Domo",
    // blogSubPara1: '',
    blogList: [
      {
        id: 1,
        listHeading: "Introduction",
        listPara:
          "In today's dynamic business landscape, organizations rely heavily on data-driven insights to make informed decisions. However, off-the-shelf solutions often fall short in meeting the unique needs of businesses. This document explores the necessity of custom app solutions in addressing the challenges faced by Domo, a prominent data visualization and analytics platform. ",
      },
      {
        id: 2,
        listHeading: "Challenges Faced by Domo: ",
        // listPara:" ",
        listPoints: [
          "<b> Minimal Charts: </b> Domo's out-of-the-box offerings may lack the depth and variety of charts necessary to effectively represent diverse datasets. This limitation restricts users from gaining comprehensive insights into their data. ",
          "<b> Lack of Customized Design: </b>  While Domo provides pre-designed templates, they may not align perfectly with the branding and aesthetic preferences of every organization. Limited customization options hinder the creation of visually appealing and cohesive dashboards. ",
        ],
      },
      {
        id: 3,
        listHeading: "Solution: Custom App Development",
        listPara:
          "Custom app development emerges as a viable solution to overcome the challenges encountered with standard Domo offerings. By opting for custom applications, businesses can unlock a host of benefits: ",
        listPoints: [
          "<b> Unique Design: </b> Custom apps allow organizations to tailor the visual interface to reflect their brand identity seamlessly. This ensures consistency across all data visualization assets and fosters a more engaging user experience. ",
          "<b> Variety of Charts:</b> With custom app development, businesses can integrate a wide array of charts and graphs suited to their specific data requirements. From traditional bar and line charts to innovative visualizations like heatmaps and Sankey diagrams, the possibilities are endless. This versatility empowers users to explore data from multiple perspectives, driving deeper insights and informed decision-making. ",
          "<b> Enhanced Functionality:</b> Beyond aesthetics, custom apps offer enhanced functionality tailored to the unique needs of each organization. This may include advanced filtering options, interactive elements, and personalized user workflows, all aimed at optimizing the data analysis process. ",
        ],
      },
      {
        id: 4,
        listHeading: "Benefits of Custom App Solutions for Domo Users:",
        listSub: "Tailored Solutions",
        listPara:
          "Custom apps ensure that the features and functionalities meet the exact requirements of Domo users, enabling them to leverage the platform to its fullest potential.",
        images: [domo_custom_app_1],
      },
      {
        id: 5,
        listSub: "Improved User Adoption ",
        listPara:
          "With a custom app that aligns closely with their needs and preferences, Domo users are more likely to embrace the platform and utilize it effectively in their daily workflows.",
        images: [domo_custom_app_2],
      },
      {
        id: 6,
        listSub: "Competitive Advantage ",
        listPara:
          "By leveraging custom app solutions to enhance their Domo experience, businesses can gain a competitive edge by extracting deeper insights from their data and making more informed decisions.",
        images: [domo_custom_app_3],
      },
      {
        id: 7,
        listSub: "Scalability and Flexibility ",
        listPara:
          "Custom apps can be designed to scale alongside the evolving needs of Domo users, ensuring that the platform remains relevant and effective as their business grows and changes over time.          ",
        images: [domo_custom_app_4],
      },
      {
        id: 8,
        listHeading:
          "Delivering High-Quality Custom Applications: GWC's Expertise in Accordion Design Development ",
        listPoints: [
          "In GWC, we specialize in developing custom applications with user-friendly interactive design, fast performance, and optimized code. Our team focuses on delivering high-quality solutions tailored to meet the unique needs of our clients. With our expertise, we ensure that every app we build not only meets but exceeds expectations in terms of functionality, usability, and efficiency.",
          "We have created a custom 'accordion design' app with captivating design and seamless user experience. Attached are screenshots showcasing its innovative features and sleek interface. ",
          "We specialize in code optimization for fast performance, ensuring efficient execution of tasks. Attached is a sample of our streamlined code for reference. ",
          "We have provided an embedded URL for reference to showcase the 'accordion design' feature in action. This allows clients to experience the dynamic functionality of our custom-built app firsthand. Explore the link to witness the seamless transitions and engaging visuals of the slider animation. ",
          "<a href='https://public.domo.com/embed/pages/Q13zl' target='_blank'> https://public.domo.com/embed/pages/Q13zl </a>",
        ],
        images: [domo_custom_app_5, domo_custom_app_6],
      },
      {
        id: 9,
        listHeading: "Domo Apps CLI",
        listPara:
          "The Domo Apps Command Line Interface (CLI) will be the main tool to create, publish, and edit custom app designs to your Domo instance. The following is an enhanced reference for the more common CLI commands. For a complete list of commands available then refer to the Help section below.",
        listPoints: [
          "<b> domo init <b/>",
          "Starts a prompter to initialize a new Custom App design template. ",
        ],
      },
      {
        id: 10,
        listSub: "Step 1",
        listPara:
          "The design name for the custom app can be specified to appear within the DOMO instance. ﷟HYPERLINK 'https://developer.domo.com/portal/rmfbkwje8kmqj-domo-apps-cli#help' ",
        images: [domo_custom_app_7],
      },
      {
        id: 11,
        listSub: "Step 2",
        listPara:
          "After entering the design name, select a starter template that suits your requirements. Each template offers unique features and functionalities to meet your specific needs.  ",
        images: [domo_custom_app_8],
      },
      {
        id: 12,
        listSub: "Step 3",
        listPara:
          'To add a dataset to your custom app, please type "Y" and press enter. If you do not wish to add a dataset, please type "N" and press enter.  ',
        images: [domo_custom_app_9],
      },
      {
        id: 13,
        listSub: "Step 4",
        listPara: "Provide the dataset ID.  ",
        images: [domo_custom_app_10],
      },
      {
        id: 14,
        listSub: "Step 5",
        listPara:
          "After providing the dataset alias name, you can assign any name you want to refer to the dataset. ",
        images: [domo_custom_app_11],
      },
      {
        id: 15,
        listSub: "Step 6",
        listPara:
          'If you would like to add another dataset, please type "Y" to continue and provide the dataset ID and dataset alias. If you do not wish to add another dataset, type "N" to end the command.  ',
        images: [domo_custom_app_12],
      },
      {
        id: 16,
        listSub: "Step 7",
        listPara:
          "Installation of DOMO CLI is complete when this screen appears. ",
        images: [domo_custom_app_13],
      },
      {
        id: 17,
        listSub: "Step 8",
        listPara:
          "Domo cli process completed then created directory name as you give design name. After navigate the directory.  ",
        images: [domo_custom_app_14],
      },
      {
        id: 18,
        listSub: "Step 9",
        listPoints: ["domo login "],
        listPara:
          "Choose to which instance you want select. If create new instance choose the “new instance”. ",
        images: [domo_custom_app_15],
      },
      {
        id: 19,
        listSub: "Step 10",
        listPara:
          "The custom app has been completed and subsequently published to the DOMO instance. ",
        images: [domo_custom_app_16],
      },
      {
        id: 20,
        listSub: "Step 11",
        listPoints: ["domo dev "],
        listPara:
          "This command facilitates running the custom app on your local machine. ",
        images: [domo_custom_app_17],
      },
    ],
    imageHeading: "Addressing Challenges Faced by Domo",
    blogImage: domo_custom_app_header,
    conclusion: "Conclusion",
    conclusionText:
      " In conclusion, the adoption of custom app solutions presents a compelling opportunity for organizations utilizing Domo to overcome the inherent limitations of standard offerings. By investing in custom development, businesses can unlock the full potential of their data, driving innovation, and gaining a competitive edge in today's data-driven landscape. If you're ready to take your Domo experience to the next level, consider exploring custom app solutions tailored to your unique requirements. ",
    writtenBy: "Written by Naveen - February 13, 2024",
  },
























  {
    id: 5,
    slug: "harnessing-the-power-of-domo-for-streamlined-manufacturing-operations",
    date: "June 28, 2024",
    heading: "Harnessing the Power of Domo for Streamlined Manufacturing Operations",
    days: "2 days ago",
    // views: "110k views",
    img: Blog_4_title,
    topHeading:
      "Harnessing the Power of Domo for Streamlined Manufacturing Operations",
    blogTopImg: Blog_4_title,
    blogSubHeading:
      "Harnessing the Power of Domo for Streamlined Manufacturing Operations",
    blogSubPara1:
      "In today’s fast-paced manufacturing industry, seamless coordination among various departments is essential for success. From production and quality control to sales and customer service, every function plays a crucial role. However, managing these interconnected processes can be a daunting task without the right tools. Enter Domo, the ultimate one-stop-shop data analytics platform that can revolutionize how we run our manufacturing operations.",
    blogList: [
      {
        id: 1,
        listHeading: "Overview",
        listPara:
          "Domo stands out due to its robust capabilities in data integration, data warehousing, data governance, artificial intelligence (AI), machine learning (ML), data visualization, workflow automation, and data-driven applications.",
    
      },
      {
        id: 100,
        listPara: "Let’s explore how these features enhance the operations of each department within a manufacturing company :",
    
      },
      {
        id: 2,
        listHeading: "Production/Manufacturing",
        listPara:
          'With Domo’s powerful data integration, real-time data from the shop floor is seamlessly consolidated, providing insights into machine performance, production rates, and downtime. The data warehousing capabilities ensure all production data is stored efficiently, making it easily accessible for analysis. AI and ML algorithms can predict potential equipment failures, while workflow automation streamlines production processes, reducing bottlenecks and ensuring timely delivery.',
      },
      {
        id: 3,
        listHeading: "Engineering and Design",
        images: [Blog_4_2],
        altTag:"Engineers collaborating over digital blueprints with data visualizations.",
        listPara:
          "Domo facilitates collaboration between design and production teams by providing a unified view of project timelines, resource allocation, and design iterations. Data visualization tools help in presenting complex design data in an easily understandable format, ensuring quick communication and implementation of design changes. This reduces the time to market for new products.",
      },
      {
        id: 6,
        listHeading: "Procurement/Purchasing",
        listPara:
          "Domo streamlines procurement by integrating supplier data, purchase orders, and contract management. This centralization allows for better negotiation with suppliers and timely procurement of raw materials, leading to significant cost savings. Detailed analytics on spending patterns aid in strategic sourcing decisions, while AI-driven insights improve procurement strategies.",
      },
      {
        id: 4,
        listHeading: "Quality Control/Assurance",
        altTag:"Quality control specialist inspecting products with data quality metrics.",
        images: [Blog_4_6],
        listPara:
          "Quality is non-negotiable in manufacturing. Domo’s data governance ensures that quality data is accurate and consistent. By integrating data from various quality checkpoints and testing stages, it provides a comprehensive view of product quality. Automated alerts, driven by AI, and detailed reports help in identifying defects early and implementing corrective actions promptly.",
      },
      {
        id: 8,
        listHeading: "Human Resources (HR)",
        listPara:
          "Employee productivity and satisfaction are vital. Domo’s HR analytics provide insights into workforce performance, training needs, and employee engagement. Data integration and governance ensure that HR data is reliable, while AI and ML models help in predicting workforce trends and planning accordingly. This data-driven approach ensures that we attract, develop, and retain top talent, fostering a culture of continuous improvement.",
      },
      {
        id: 5,
        listHeading: "Supply Chain/Logistics",
        images: [Blog_4_8],
        altTag:"Logistics manager tracking shipments and inventory levels in real-time.",
        listPara:
          "Efficient supply chain management is critical for manufacturing success. Domo aggregates data from suppliers, inventory systems, and logistics providers, offering end-to-end visibility. ML algorithms forecast demand, optimizing inventory levels, and reducing lead times. Workflow automation further enhances supply chain efficiency, lowering costs and boosting customer satisfaction.",
      },
      {
        id: 9,
        listHeading: "Finance and Accounting",
        listPara:
          "Financial health is the backbone of any business. Domo integrates financial data from various systems, offering real-time insights into revenue, expenses, and profitability. Data warehousing ensures all financial data is centralized, aiding in accurate budgeting, forecasting, and strategic financial planning. Automated workflows streamline financial operations, ensuring long-term sustainability.",
      },
      {
        id: 7,
        listHeading: "Research and Development (R&D)",
        altTag:"R&D professionals analyzing data and project progress charts.",
        images: [Blog_4_7],
        listPara:
          "Innovation drives growth. Domo enables R&D teams to track project progress, manage budgets, and analyze the impact of new product introductions. By consolidating data from various experiments and prototypes, Domo helps in prioritizing projects that offer the best return on investment. Data-driven applications built on Domo can further enhance R&D processes.",
      },
      
      
      {
        id: 10,
        listHeading: "Sales and Marketing",
        listPara:
          "Understanding market trends and customer needs is crucial. Domo’s powerful analytics help sales and marketing teams track campaign performance, customer acquisition costs, and sales pipelines. Data visualization tools present these insights clearly, driving targeted marketing efforts and effective sales strategies, ultimately boosting revenue growth.",
      },
      {
        id: 11,
        listHeading: "Customer Service",
        images: [Blog_4_1],

        listPara:
          "Exceptional customer service differentiates us from competitors. Domo consolidates customer feedback, service requests, and resolution times, enabling a proactive approach to customer satisfaction. AI-driven insights help in understanding customer needs better, while workflow automation ensures timely responses and resolution of issues. By analyzing this data, we can continuously improve our products and services.",
      },
      {
        id: 13,
        listHeading: "Health, Safety, and Environment (HSE)",
        listPara:
          "Safety and sustainability are paramount. Domo integrates data from safety audits, incident reports, and environmental monitoring systems. AI and ML models predict potential safety hazards, while data governance ensures compliance with regulations. This centralized data helps in promoting a safe work environment and implementing sustainable practices.",
      },
      {
        id: 12,
        listHeading: "Information Technology (IT)",
        images: [Blog_4_3],
        listPara:
          "Domo’s IT analytics provide a holistic view of the company’s technology infrastructure. This integration helps in monitoring system performance, managing data security, and supporting digital transformation initiatives. IT teams can leverage data-driven applications to ensure technology investments align with business goals.",
      },
     
      {
        id: 14,
        listHeading: "Legal and Compliance",
        listPara:
          "Navigating legal complexities is simplified with Domo. By integrating contract management, compliance checklists, and regulatory updates, Domo ensures that we adhere to legal requirements and minimize risks. This proactive approach safeguards our business interests, with data governance ensuring all legal data is accurate and up-to-date.",
      },
      {
        id: 15,
        listHeading: "Maintenance and Facilities",
        images: [Blog_4_5],
        listPara:
          "Domo enables predictive maintenance by integrating data from sensors and maintenance logs. AI-driven predictive models help in preventing equipment failures, reducing downtime, and extending the lifespan of assets. Workflow automation ensures timely maintenance actions, while facilities management is streamlined, ensuring optimal working conditions.",
      },

      // {
      //   id: 5,
      //   listHeading: "What We Will Cover",
      //   listSub:
      //     "In this article, we will guide you through the process of using Google Cloud's Data Loss Prevention (DLP) and Key Management Service(KMS) to: ",
      //   listPoints: [
      //     "Inspect and redact sensitive data using DLP's Inspection and De-Identification templates.",
      //     "Use a KMS-generated symmetric encryption key to encrypt the identified sensitive data.",
      //     "Create a data pipeline that reads data with sensitive information from a file in a Cloud Storage bucket.",
      //     "Inspect the data using the DLP Inspection template and redact the findings by encrypting the data with a KMS encryption key",
      //     "Load the encrypted data into a BigQuery table using Dataflow",
      //     "This architecture ensures that sensitive information is securely encrypted in the BigQuery table, providing an extra layer of security in case of data exfiltration.",
      //   ],
      // },
      // {
      //   id: 6,
      //   listHeading: "Setup and Requirements",
      //   listSub:
      //     "Before diving into the implementation, ensure you have the following set up:",
      //   listPoints: [
      //     "Google Cloud Data Loss Prevention (DLP)",
      //     "Google Cloud Key Management Service (KMS)",
      //     "Google Cloud Dataflow",
      //     "Google Cloud Storage",
      //     "Google BigQuery",
      //   ],
      // },
      // {
      //   id: 6,
      //   listHeading:
      //     "Ensure that the following roles are assigned to the service account:",
      //   // listSub: 'Before diving into the implementation, ensure you have the following set up:',
      //   listPoints: [
      //     "BigQuery Data Editor",
      //     "BigQuery Job User",
      //     "Dataflow Worker",
      //     "DLP Administrator",
      //     "Storage Admin",
      //   ],
      // },
      // {
      //   id: 7,
      //   listHeading: "1. Implementation Steps",
      //   listSub: "Bucket in Google Cloud Storage and Load File",
      //   listPoints: [
      //     "Create a Google Cloud Storage bucket to hold the sample data file, e.g., gs://gcp-project bucket-2023.",
      //     "Upload a sample CSV file containing sensitive PII data, such as US_SOCIAL_SECURITY_NUMBER",
      //   ],
      // },
      // {
      //   id: 8,
      //   listHeading: "2. Key Ring and Encryption Key Creation in KMS",
      //   // listSub: 'Bucket in Google Cloud Storage and Load File',
      //   listPoints: [
      //     "Navigate to the Cloud KMS section in Google Cloud Console.",
      //     "Enable the KMS API if not already enabled.",
      //     "Create a key ring (e.g., ring) within KMS.",
      //     "Create a key within the key ring with software protection and purpose set to symmetric encrypt / decrypt.",
      //     "Store the key resource name for later use",
      //   ],
      // },
      // {
      //   id: 9,
      //   listHeading: "3. Create the Inspection Template in DLP",
      //   // listSub: 'Bucket in Google Cloud Storage and Load File',
      //   listPoints: [
      //     "Enable the DLP API if not already enabled",
      //     "In DLP, navigate to CONFIGURATION - TEMPLATES - INSPECT.",
      //     "Create an Inspection Template, specifying the infotypes to detect, e.g.,US_SOCIAL_SECURITY_NUMBER.",
      //   ],
      // },
      // {
      //   id: 10,
      //   listHeading: "4. Create the Wrapped Key and De-Identification Template",
      //   // listSub: 'Bucket in Google Cloud Storage and Load File',
      //   listPoints: [
      //     "Create a De-Identification Template in DLP to define how findings should be redacted.",
      //     "Specify the key resource name from KMS and provide a wrapped key.",
      //     "Select the infoTypes (e.g., US_SOCIAL_SECURITY_NUMBER) to encrypt.",
      //     "Review and create the De-Identification Template.",
      //   ],
      // },
      // {
      //   id: 11,
      //   listHeading: "5. Create Dataflow Job",
      //   // listSub: 'Bucket in Google Cloud Storage and Load File',
      //   listPoints: [
      //     "Ensure the required IAM roles are assigned for Dataflow service accounts",
      //     "Create a BigQuery dataset to store the results.",
      //     "Enable the necessary APIs for Dataflow",
      //     "Create a Dataflow job using the Data Masking/Tokenization template",
      //     "Configure the template parameters, specifying the location of the sample data, BigQuery dataset, project ID, temporary Cloud Storage bucket, and Cloud DLP De - Identification template resource name",
      //     "Run the Dataflow job",
      //   ],
      // },
    ],
    // imageHeading: "Why Does GWC Interaction Matter?",
    // blogImage: cloud_computing_header,
    conclusion: "Conclusion",
    conclusionText:
      "Domo’s comprehensive data analytics platform transforms how we manage our manufacturing operations. By leveraging its capabilities in data integration, data warehousing, data governance, AI, ML, data visualization, workflow automation, and data-driven applications, Domo provides actionable insights that drive efficiency, innovation, and growth. Embracing Domo means empowering our teams with the information they need to excel and propelling our company towards a future of unparalleled success.",
    writtenBy: "Written by Naveen - June 28, 2024",
  },





];
