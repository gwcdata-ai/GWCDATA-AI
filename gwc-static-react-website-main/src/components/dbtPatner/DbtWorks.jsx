import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../assets/images/about/ourCultureBg.webp";
import commonStyles from "../../commoncss/common.module.css";
import styles from "./dbt.module.css";

import works from "../../assets/images/dbt/works.png";

const DbtWorks = () => {
    return (
        <Container
            fluid
            className={`${commonStyles.banner_container_img}  py-lg-5 py-md-4`}
            style={{ backgroundImage: `url(${banner})` }}
        >
            <section
                className={`${StyleSheet.productPlatformSection} `}
            >
                <Container>
                    <Row className="d-flex align-items-center justify-content-center mb-md-5">
                        <Col lg={12} xs={12} className="py-md-0 py-5 ">

                            <p className={`mt-2 ${styles?.title4}`}>
                                How dbt Works?
                            </p >
                            <p className={` ${styles?.title5}`}>dbt (Data Build Tool) is a command line tool that enables data analysts and engineers to transform data in their warehouses more effectively. This open-source command-line tool helps organizations build, test, and maintain their data infrastructure.</p>

                            <div className={` ${styles?.work_card} mt-5`}>
                                <Row className="">
                                    <Col md={6}>
                                        <img src={works} alt="" className="w-100 h-100" />
                                    </Col>

                                    <Col md={6} >
                                        <div className="mt-2 w-100 h-100">
                                            <div>
                                                <p className={` ${styles?.para1}`}>Source</p>
                                                <p className={` ${styles?.para2}`}>dbt connects to your data warehouse and reads the raw data from your sources, such as databases, APIs, files, etc.</p>
                                            </div>
                                            <div className="mt-4">
                                                <p className={` ${styles?.para1}`}>Model</p>
                                                <p className={` ${styles?.para2}`}>dbt applies SQL transformations to the source data and creates intermediate and final tables (called models) in your data warehouse. You can define the logic and structure of your models using dbt’s configuration files and macros.</p>
                                            </div>
                                            <div className="mt-4">
                                                <p className={` ${styles?.para1}`}>Test</p>
                                                <p className={` ${styles?.para2}`}>dbt runs automated tests on your models to ensure data quality and integrity. You can write your own custom tests or use dbt’s built-in tests, such as uniqueness, not null, and referential integrity.</p>
                                            </div>
                                            <div className="mt-4">
                                                <p className={` ${styles?.para1}`}>Document</p>
                                                <p className={` ${styles?.para2}`}>dbt generates documentation for your models, such as descriptions, data types, dependencies, and lineage. You can also add your own metadata and comments to your models using dbt’s schema.yml file.</p>
                                            </div>
                                            <div className="mt-4">
                                                <p className={` ${styles?.para1}`}>Deploy</p>
                                                <p className={` ${styles?.para2}`}>dbt deploys your models to your data warehouse and makes them available for analysis and reporting. You can also use dbt’s orchestration features, such as snapshots, seeds, hooks, and run operations, to automate and optimize your data pipeline.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default DbtWorks
