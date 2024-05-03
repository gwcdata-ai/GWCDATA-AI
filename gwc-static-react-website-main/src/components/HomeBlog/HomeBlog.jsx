import React from "react";
import styles from "../../commoncss/Home.module.css";
import Blog1 from "../../assets/images/HomeBlog/blog1.jpg";
import Blog2 from "../../assets/images/HomeBlog/blog2.jpg";
import AOS from "aos";
AOS.init({
  duration: 1500,
});

const HomeBlog = () => {
  return (
    <div className={styles.frameParent9}>
      <div className={styles.ourBlogParent}>
        <div className={styles.ourFounder}>Our Blog</div>
        <div className={styles.latestNewsAnd1}>Latest News and Blog</div>
      </div>
      <div className={styles.frameParent10}>
        <div
          className={styles.frameParent11}
          style={{ backgroundImage: `url(${Blog1})` }}
          data-aos="flip-down"
        >
          <div className={styles.frameParent12}>
            <div className={styles.hrAnalyticsWrapper}>
              <div className={styles.hrAnalytics}>HR Analytics</div>
            </div>
            <div className={styles.text182}>Feb 18,2023</div>
          </div>
          <div className={styles.beingATechnology15}>
            Being a Technology partner for trusted name in the crowded BI sector
            for brands
          </div>
        </div>
        <div
          className={styles.frameParent13}
          style={{ backgroundImage: `url(${Blog2})` }}
          data-aos="flip-down"
        >
          <div className={styles.frameParent12}>
            <div className={styles.hrAnalyticsWrapper}>
              <div className={styles.hrAnalytics}>HR Analytics</div>
            </div>
            <div className={styles.text182}>Feb 18,2023</div>
          </div>
          <div className={styles.beingATechnology15}>
            Being a Technology partner for trusted name in the crowded BI sector
            for brands
          </div>
        </div>
        <div
          className={styles.frameParent13}
          style={{ backgroundImage: `url(${Blog2})` }}
          data-aos="flip-down"
        >
          <div className={styles.frameParent12}>
            <div className={styles.hrAnalyticsWrapper}>
              <div className={styles.hrAnalytics}>HR Analytics</div>
            </div>
            <div className={styles.text182}>Feb 18,2023</div>
          </div>
          <div className={styles.beingATechnology15}>
            Being a Technology partner for trusted name in the crowded BI sector
            for brands
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
