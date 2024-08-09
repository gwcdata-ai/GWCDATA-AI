import img1 from "../../../../assets/images/ProductDemo/PrincipalDomo/GoogleComputeEngine.webp";
import img2 from "../../../../assets/images/ProductDemo/PrincipalDomo/GoogleKubernetesEngine.webp";
import img3 from "../../../../assets/images/ProductDemo/PrincipalDomo/GoogleCloudStorage.webp";
import img4 from "../../../../assets/images/ProductDemo/PrincipalDomo/BigQuery.webp";
import img5 from "../../../../assets/images/ProductDemo/PrincipalDomo/AppEngine.webp";
import img6 from "../../../../assets/images/ProductDemo/PrincipalDomo/LookerStudio.webp";
import img7 from "../../../../assets/images/ProductDemo/PrincipalDomo/VertexAI.webp";
import img8 from "../../../../assets/images/ProductDemo/PrincipalDomo/MigrationTools.webp";

import l1 from "../../../../assets/images/looker/Commissioning Looker.svg";
import l2 from "../../../../assets/images/looker/Data Extraction and ingestion.svg";
import l3 from "../../../../assets/images/looker/LookML Engineering.svg";
import l4 from "../../../../assets/images/looker/Unearthing insights.svg";
import l5 from "../../../../assets/images/looker/Google App Engine.svg";

export const dataExplainedGCPServices = [
  {
    id: 1,
    name: "Google Compute Engine",
    className: "first",
    image: img1,
    description:
      "Google Compute Engine is an Infrastructure as a Service (IaaS) offering that allows users to run virtual machines (VMs) on Google's infrastructure. It provides scalable and flexible computing resources, allowing you to deploy and manage virtual machines in the cloud easily. Compute Engine is suitable for a wide range of workloads, including web hosting, application development, and data processing.",
    alt: "Google Compute Engine",
  },
  {
    id: 2,
    name: "Google Kubernetes Engine",
    image: img2,
    description:
      "Google Kubernetes Engine (GKE) is a managed Kubernetes service provided by Google Cloud Platform. Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerised applications. GKE simplifies the process of deploying, managing, and scaling containerised applications using Kubernetes. GKE supports standard Kubernetes tooling and is compatible with the Kubernetes ecosystem, allowing you to use Helm charts, kubectl commands, and other Kubernetes resources.",

    alt: "Google Kubernetes Engine",
  },
  {
    id: 3,
    name: "Google Cloud Storage",
    image: img3,

    description:
      "Google Cloud Storage is a cloud-based object storage system offered by GCP. It allows you to store and retrieve data in a highly scalable and durable manner. Google Cloud Storage integrates with other Google Cloud Platform services, making it easy to use your stored data in conjunction with services like BigQuery, Cloud Functions, and more. BigQuery is suitable for a wide range of use cases, including business intelligence, ad hoc querying, data exploration, and machine learning.",
    alt: "Google Cloud Storage",
  },
  {
    id: 4,
    name: "BigQuery",
    alt: "BigQuery",
    image: img4,

    description:
      "Google BigQuery is a fully managed and serverless data warehouse and analytics platform provided by Google Cloud Platform. It is designed to enable super-fast SQL queries using the processing power of Google's infrastructure. BigQuery is suitable for a variety of use cases, including business intelligence, data exploration, ad hoc querying, and machine learning.",
  },
  {
    id: 5,
    name: "Google App Engine",
    alt: "Google App Engine",
    image: img5,

    description:
      "Google App Engine is fully managed platform-as-a-service (PaaS) offering which allows developers to build and deploy scalable web applications without managing the underlying infrastructure. App Engine abstracts away the complexities of server management, allowing developers to focus on writing code and building features. App Engine is suitable for a wide range of web applications, APIs, and microservices, offering an environment where developers can focus on building features and not worry about infrastructure management.",
  },
  {
    id: 6,
    name: "Looker Studio",
    alt: "Looker Studio",
    image: img6,

    description:
      "Looker is a business intelligence and data exploration platform that allows organizations to analyze and visualize their data. Looker provides a web-based interface for creating and sharing dashboards, reports, and visualizations based on data from various sources. The platform is designed to be user- friendly, enabling both technical and non - technical users to derive insights from data. ",
  },
  {
    id: 7,
    name: "Vertex AI",
    alt: "Vertex AI",
    image: img7,

    description:
      "Google Cloud Vertex AI is a managed machine learning (ML) platform that provides tools and services to help organizations build, deploy, and manage machine learning models at scale. Vertex AI includes AI Platform Pipelines, a service for orchestrating and deploying machine learning workflows.It allows you to build, deploy, and manage end- to - end ML pipelines. ",
  },
  {
    id: 8,
    name: "Migration Tools",
    alt: "Migration Tools",
    image: img8,

    description:
      "We are experts in migrate for compute engine, a server migration service that helps you move virtual machines from on-premises or other cloud providers to Google Cloud and Database Migration which helps in migrating databases to GCP with minimal downtime. We also specialize in BigQuery Data Transfer, where data is automatically transferred from various sources(e.g., Google Ads, YouTube, etc.) directly into BigQuery for analysis and Cloud Storage Transfer, where data is transferred from on- premises storage systems to Google Cloud Storage. ",
  },
];

export const LookerdataExplainedGCPServices = [
  {
    id: 1,
    name: "Commissioning Looker",
    alt: "Commissioning Looker",

    className: "first",
    image: l1,
    description:
      " We access your existing infrastructure and do a feasibility check for the looker implementation quickly and effectively. We then restructure the organisation’s architecture with the Looker platform and connect the data sources in a way that you can unearth the hidden information from your data. We prepare looks and dashboard to form user stories which eventually help in better decision making.",
  },
  {
    id: 2,
    alt: "Data Extraction & Ingestion in looker",
    name: "Data Extraction & Ingestion",
    image: l2,
    description:
      " GWC leverages certain GCP services like Dataproc, Dataflow, Dataprep, Data Fusion, Pub/Sub etc to pull data from the source and push the same into the target SQL database after massaging the data. This pipeline robotizes the data cleansing and conversion process which eventually eases the Looker’s model creation. ",
  },
  {
    id: 3,
    alt: "LookML Engineering in looker",

    name: "LookML Engineering",
    image: l3,

    description:
      "GWC is champion at the explore creation in looker. Our experts create models that can be used by the end business users who has zero technical knowledge. Just by simple click, drag and drop options, we enable the end user to build customised reports according to their needs. Parallelly, the team ensures the performance and security of the organisation’s data.",
  },
  {
    id: 4,
    alt: "Unearthing Insights in looker",

    name: "Unearthing Insights",
    image: l4,

    description:
      "GWC helps our clients in their journey of data driven decision making culture. We follow unique agnostic approach to build dashboards that tell stories and eventually helps in making better decision. We help industries to have a look at their KPIs from every possible angle.",
  },
  // {
  //   id: 5,
  //   name: "Google App Engine",
  //   image: l5,

  //   description:
  //     "Google App Engine is fully managed platform-as-a-service (PaaS) offering which allows developers to build and deploy scalable web applications without managing the underlying infrastructure. App Engine abstracts away the complexities of server management, allowing developers to focus on writing code and building features. App Engine is suitable for a wide range of web applications, APIs, and microservices, offering an environment where developers can focus on building features and not worry about infrastructure management.",
  // },
  // {
  //   id: 6,
  //   name: "Looker Studio",
  //   image: img6,

  //   description:
  //     "Looker is a business intelligence and data exploration platform that allows organizations to analyze and visualize their data. Looker provides a web-based interface for creating and sharing dashboards, reports, and visualizations based on data from various sources. The platform is designed to be user- friendly, enabling both technical and non - technical users to derive insights from data. ",
  // },
  // {
  //   id: 7,
  //   name: "Vertex AI",
  //   image: img7,

  //   description:
  //     "Google Cloud Vertex AI is a managed machine learning (ML) platform that provides tools and services to help organizations build, deploy, and manage machine learning models at scale. Vertex AI includes AI Platform Pipelines, a service for orchestrating and deploying machine learning workflows.It allows you to build, deploy, and manage end- to - end ML pipelines. ",
  // },
  // {
  //   id: 8,
  //   name: "Migration Tools",
  //   image: img8,

  //   description:
  //     "We are experts in migrate for compute engine, a server migration service that helps you move virtual machines from on-premises or other cloud providers to Google Cloud and Database Migration which helps in migrating databases to GCP with minimal downtime. We also specialize in BigQuery Data Transfer, where data is automatically transferred from various sources(e.g., Google Ads, YouTube, etc.) directly into BigQuery for analysis and Cloud Storage Transfer, where data is transferred from on- premises storage systems to Google Cloud Storage. ",
  // },
];
