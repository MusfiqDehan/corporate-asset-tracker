import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

const NewEmployeeForm = (props) => {
    const [employee, setEmployee] = useState({
        pk: 0,
        name: "",
        email: "",
        document: "",
        phone: "",
    });

    useEffect(() => {
        if (props.employee) {
            const { pk, name, document, email, phone } = props.employee;
            setEmployee({ pk, name, document, email, phone });
        }
    }, [props.employee]);

    const onChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const createStudent = (e) => {
        e.preventDefault();
        axios.post(API_URL, employee).then(() => {
            props.resetState();
            props.toggle();
        });
    };

    const editStudent = (e) => {
        e.preventDefault();
        axios.put(API_URL + employee.pk, employee).then(() => {
            props.resetState();
            props.toggle();
        });
    };

    const defaultIfEmpty = (value) => {
        return value === "" ? "" : value;
    };

    return (
        <Form onSubmit={props.employee ? editStudent : createStudent}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={defaultIfEmpty(employee.name)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={defaultIfEmpty(employee.email)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="document">Document:</Label>
                <Input
                    type="text"
                    name="document"
                    onChange={onChange}
                    value={defaultIfEmpty(employee.document)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone:</Label>
                <Input
                    type="text"
                    name="phone"
                    onChange={onChange}
                    value={defaultIfEmpty(employee.phone)}
                />
            </FormGroup>
            <Button>Send</Button>
        </Form>
    );
};

export default NewEmployeeForm;
