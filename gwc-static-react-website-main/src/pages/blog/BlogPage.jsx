import React, { useEffect } from "react";

import BlogsPosts from "../../components/blog/BlogsPosts";
import { BlogTeamData } from "../../components/blog/data";
import { BlogBanner } from "../../components/blog/BlogBanner";
import { BlogListData } from "../../components/blog/BlogListData";
import { CommonLeftImageComponent } from "../../commoncomponents/leftSideForm/LestSideImageComponent";
import { Helmet } from "react-helmet-async";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {};
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="Free Consultation, Business Strategy, Data Science, AI Insights, Google Cloud, Secure Data Encryption, Domo, Fashion Retail, Industry Trends, Expert Perspectives, Blog Posts, Data Encryption, Streamlining Operations, Transforming Retail"
        />
        <meta
          name="description"
          content="Get a free consultation to develop a winning strategy for your business. Explore our blog for expert perspectives on data science, AI, and industry trends. Stay informed with articles on secure data encryption in Google Cloud, harnessing Domo, and transforming fashion retail with DOMO."
        />
      </Helmet>
      <BlogBanner />
      <CommonLeftImageComponent commonLeftSectionContent={BlogTeamData} />
      <BlogsPosts blogData={BlogListData} />
    </>
  );
};

export default BlogPage;
