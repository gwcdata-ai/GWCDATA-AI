import img1 from "../../../assets/images/dbt/dmm.png";
import img2 from "../../../assets/images/dbt/go.png";
import img3 from "../../../assets/images/dbt/dv.png";
import img4 from "../../../assets/images/dbt/dm.png";
import img5 from "../../../assets/images/dbt/co.png";
import img6 from "../../../assets/images/dbt/dp.svg";
import OurExpertisebannerBgImg from "../../../assets/images/solutions/ourExpertisebannerBg.jpeg";
import Analytics_Engineering from "../../../assets/images/dbt/Analytics_Engineering.webp";
import Modular_SQL_Queries from "../../../assets/images/dbt/Modular_SQL_Queries.webp";
import Incremental_Builds from "../../../assets/images/dbt/Incremental_Builds.webp";
import Data_Testing from "../../../assets/images/dbt/Data_Testing.webp";

export const DbtListData = [
  {
    id: 1,
    name: "Data Modernization ",
    className: "first",
    description_title: "Data Modernization",
    description_list: [
      "Transform the data development process with dbt Cloud",
      "Emphasize collaborative methodologies over tool-centric focus",
      "Redefine data delivery for enhanced precision and agility",
    ],
    image: img1,
    alt: "Data Modernization in DBT",
  },
  {
    id: 2,
    name: "Governance",
    description_title: "Governance",
    description_list: [
      "Streamline governance processes with dbt Cloud",
      "Promote collaboration and build trust in data practices",
      "Utilize features like automatic documentation and version control for error minimization",
    ],
    image: img2,
    alt: "Governance in DBT",
  },
  {
    id: 3,
    name: "Data Vault",
    description_title: "Data Vault",
    description_list: [
      "Implement Data Vault with dbt Cloud Enterprise",
      "Tailored support for handling intricate data systems",
      "Enhance productivity with automated documentation and built-in lineage features",
    ],
    image: img3,
    alt: "Data Vault in DBT",
  },
  {
    id: 4,
    name: "dbt Mesh",
    description_title: "dbt Mesh",
    description_list: [
      "Transition to dbt Mesh for innovative architecture",
      "Distribute extensive projects into manageable data domains",
      "Empower domain teams for swift, autonomous operation, eliminating bottlenecks",
    ],
    image: img4,
    alt: "dbt Mesh in DBT",
  },
  {
    id: 5,
    name: "Cost Optimization",
    description_title: "Optimize costs in your data workflow",
    description_list: [
      "Avoid expenses tied to squandered computational resources",
      "Utilize dbt Cloud for a zero-waste analytics approach",
      "Gain insights into high-cost models and implement auto-cancellation for outdated builds",
    ],
    image: img5,
    alt: "Cost Optimization in DBT",
  },
  {
    id: 6,
    name: "Data Processing",
    description_title: "Data Processing",
    description_list: [
      "Opt for incremental data processing with dbt Cloud",
      "Retire outdated datasets to eliminate unnecessary compute costs",
      "Utilize existing data, saving time and streamlining the data warehouse",
    ],
    image: img6,
    alt: "Data Processing in DBT",
  },
];

export const KeyFeaturesDbt = {
  title: "Key Features Of DBT",
  bannerBg: OurExpertisebannerBgImg,
  list: [
    {
      id: 1,
      title: "Modular SQL Queries",
      img: Modular_SQL_Queries,
      text: "Leverage the simplicity and flexibility of modular SQL queries to transform and model your data. dbt allows you to build, test, and iterate on your data transformations seamlessly.",
      alt: "DBT - Modular SQL Queries",
    },
    {
      id: 2,
      title: "Analytics Engineering",
      img: Analytics_Engineering,
      text: "Elevate your analytics engineering capabilities with dbt's focus on the transformation layer of the data stack. Streamline and organize your data transformation process for improved collaboration and efficiency.",
      alt: "DBT - Analytics Engineering",
    },
    {
      id: 3,
      alt: "DBT - Incremental Builds",

      title: "Incremental Builds",
      img: Incremental_Builds,
      text: "Optimize your data transformation workflows with dbt's support for incremental builds. Process only the data that has changed, reducing processing time and resource utilization. .",
    },
    {
      id: 4,
      alt: "DBT - Data Testing",

      title: "Data Testing",
      img: Data_Testing,
      text: "Ensure the accuracy and reliability of your analytics code with dbt's built-in testing features. Test data quality, schema, and business logic, providing confidence in your analytics results.",
    },
  ],
};
