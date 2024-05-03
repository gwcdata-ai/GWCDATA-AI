import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// CSS
import styles from "../../components/solutions/dataGovernancelist/dataGovernance.module.css";
import useMedia from "../../hooks/useMedia";

const BoomiSolutions = ({ dataLists }) => {

    const isMobile = useMedia("(max-width:600px)");
    const [selectedItem, setSelectedItem] = useState({});

    const funSelectedlist = (item) => {
        setSelectedItem(item);
    };

    useEffect(() => {
        setSelectedItem(dataLists[0]);
    }, []);

    console.log(dataLists, "dataLists");

    return (
        <Container fluid className="">
            <section className="">
                <Container className={`${styles.DataGovernanceListCards}`}>
                    
                    {isMobile ? (
                        dataLists?.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`w-100 mb-md-0 mb-2 `}
                                    onClick={() => funSelectedlist(item)}
                                >
                                    <div className={`px-1 ${styles.list} mb-md-3 mb-1`}>
                                        {" "}
                                        <div className="px-1"> {item?.name} </div>{" "}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div
                            style={{ display: "flex", flexWrap: "wrap" }}
                            className={`mb-md-0 mb-1`}
                        >
                            {dataLists?.map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        flex:
                                            dataLists?.length === 10
                                                ? "0 0 calc(18.7% - 10px)"
                                                : dataLists?.length === 8
                                                    ? "0 0 calc(23.7% - 10px)"
                                                    : dataLists?.length === 6
                                                        ? "0 0 calc(31.6% - 10px)"
                                                        : "", // Adjust width as needed
                                        margin: "12px",
                                        cursor: "pointer",
                                    }}
                                    className={`p-2 ${styles.list} mb-md-3 mb-1`}
                                    onClick={() => funSelectedlist(item)}
                                >
                                    {item?.name}
                                </div>
                            ))}
                        </div>
                    )}
                </Container>
                <Container>
                    <Row className="d-flex align-items-center justify-content-center mt-4 mb-5">
                        <Col lg={4} md={6} className="px-md-0">
                            <img
                                src={selectedItem?.image}
                                alt=""
                                className="w-100 mx-lg-3 rounded-4"
                            />
                        </Col>
                        <Col lg={8} md={6} className="px-md-5 pt-md-0 pt-5">
                            <div className="">

                                <p className={styles?.feat_title}>
                                    {" "}
                                    {selectedItem?.description_title}{" "}
                                </p>
                                <div>
                                    {selectedItem?.description_list?.map((item) => (
                                        <p className={styles?.feat_text}> {item} </p>
                                    ))}
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default BoomiSolutions
