import FooterBg from "../../assets/images/footer/footerBg.webp";
import CertifiedImg from "../../assets/images/footer/certifiedNew.png";
import FooterLogoImg from "../../assets/images/footer/footlogo.svg";
import NasscomImg from "../../assets/images/footer/nasscom.png";
import FaceBookIcon from "../../assets/images/footer/facebook.svg";
import InstagramIcon from "../../assets/images/footer/instagram.svg";
import TwitterIcon from "../../assets/images/footer/twitter.svg";
import DeviceIcon from "../../assets/images/footer/device-mobile.svg";
import LocationIcon from "../../assets/images/footer/location-marker.svg";
import MailIcon from "../../assets/images/footer/mail.svg";
import LinkedInIcon from "../../assets/images/footer/linkedin.svg";
import YoutubeIcon from "../../assets/images/footer/youtube.svg";

export const FooterContentLeft = {
  footerBg: FooterBg,
  footerLogo: FooterLogoImg,
  description:
    "We ensure better services and better quality at every product you might be interested in and we shall help grow better.",
  certifiedImg: CertifiedImg,
  certifiedImgAlt: "Great Place to Work Certified",

  nasscomImg: NasscomImg,
  nasscomImgAlt: "NASSCOM Logo",

  socialmediatext: "Follow us on",
  socialmedia: [
    { icon: InstagramIcon, url: "https://www.instagram.com/gwcdata.ai/" },
    // { icon: FaceBookIcon, url: "" },
    {
      icon: YoutubeIcon,
      url: "https://www.youtube.com/channel/UCxMeBqyMJDlQSlO8ym-ZSxg",
    },
    { icon: LinkedInIcon, url: "https://www.linkedin.com/company/gwcdataai" },
  ],
};

export const FooterQuickLinks = {
  title: "QUICK LINKS",
  links: [
    { menu: "Home", url: "/" },
    { menu: "About Us", url: "/about-gwc" },
    { menu: "Contact Us", url: "/contact-us" },
    { menu: "Blogs", url: "/blog" },
    { menu: "Case Studies", url: "/case-studies" },
  ],
};

export const FooterProductLinks = {
  title: "SOLUTIONS",
  links: [
    { menu: "Data Strategy & Engineering", url: "/solutions/data-strategy" },
    { menu: "Data Governance", url: "/solutions/data-governance" },
    {
      menu: "Business Intelligence & Analytics",
      url: "/solutions/business-intelligence-and-analytics",
    },
    {
      menu: "BI Migration & Modernization",
      url: "/solutions/bimigration-and-modernization",
    },
    { menu: "Cloud Transformation", url: "/solutions/cloud-transformation" },
    {
      menu: "Artificial Intelligence",
      url: "/solutions/artificial-intelligence",
    },

    {
      menu: "Industrial Internet of Things",
      url: "/solutions/industrial-internet-of-things",
    },
    { menu: "Salesforce Implementation", url: "/solutions/salesforce" },
  ],
};

export const FooterResourcesLinks = {
  title: "PARTNERS",
  links: [
    {
      menu: "DOMO",
      url: "/domo-consulting",
    },
    {
      menu: "GCP",
      url: "/gcp-implementation",
    },
    {
      menu: "Salesforce",
      url: "/solutions/salesforce",
    },
    {
      menu: "Snowflake",
      url: "/snowflake",
    },
    {
      menu: "Fivetran",
      url: "/fivetran",
    },
    {
      menu: "DBT",
      url: "/dbt",
    },
    {
      menu: "Boomi",
      url: "/boomi",
    },
    {
      menu: "Looker",
      url: "/looker",
    },
    {
      menu: "Tableau",
      url: "/tableau",
    },
    {
      menu: "Alation",
      url: "/alation",
    },
  ],
};

export const FooterContactUs = {
  title: "CONTACT US",
  links: [
    {
      icon: LocationIcon,
      info: "#46/4 Novel Tech Park, Kudlu Gate, Hosur Rd, HSR Extension, Bangalore, Karnataka, India 560068",
    },
    { icon: MailIcon, info: "indiahr@gwcdata.ai" },
    { icon: DeviceIcon, info: "+91 95914 33122 | +91 99861 68512 " },
  ],
};
