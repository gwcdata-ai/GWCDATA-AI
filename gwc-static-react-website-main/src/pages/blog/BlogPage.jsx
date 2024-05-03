import React, { useEffect } from 'react';

import BlogsPosts from '../../components/blog/BlogsPosts';
import { BlogTeamData } from '../../components/blog/data';
import { BlogBanner } from '../../components/blog/BlogBanner';
import { BlogListData } from '../../components/blog/BlogListData';
import { CommonLeftImageComponent } from '../../commoncomponents/leftSideForm/LestSideImageComponent';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    return () => {};
  }, []);

  return (
    <>
      <BlogBanner />
      <CommonLeftImageComponent commonLeftSectionContent={BlogTeamData} />
      <BlogsPosts blogData={BlogListData} />
    </>
  );
};

export default BlogPage;
