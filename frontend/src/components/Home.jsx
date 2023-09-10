import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import EmployeeList from "./EmployeeList";
import NewEmployeeModal from "./NewEmployeeModal";
import axios from "axios";
import { API_URL } from "../constants";

const Home = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = () => {
        axios
            .get(API_URL)
            .then((res) => {
                console.log(res.data); // Log the data to check if it's correct
                setEmployees(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error); // Log any error that occurs
            });
    };

    const resetState = () => {
        getEmployees();
    };

    return (
        <Container style={{ margin: "0 auto", width: "1200px" }}>
            <Row>
                <Col>
                    <EmployeeList
                        employees={employees}
                        resetState={resetState}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <NewEmployeeModal create={true} resetState={resetState} />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
