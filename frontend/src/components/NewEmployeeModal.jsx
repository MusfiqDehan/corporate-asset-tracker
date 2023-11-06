import React, { useState, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewEmployeeForm from "./NewEmployeeForm";

const NewEmployeeModal = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    };

    const create = props.create;

    var title = "Editing Employee";
    var button = <Button onClick={toggle}>Edit</Button>;
    if (create) {
        title = "Creating New Employee";

        button = (
            <Button
                color="primary"
                className="float-right"
                onClick={toggle}
                style={{ minWidth: "200px" }}
            >
                Create New
            </Button>
        );
    }

    return (
        <>
            {button}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>

                <ModalBody>
                    <NewEmployeeForm
                        resetState={props.resetState}
                        toggle={toggle}
                        employee={props.employee}
                    />
                </ModalBody>
            </Modal>
        </>
    );
};

export default NewEmployeeModal;
