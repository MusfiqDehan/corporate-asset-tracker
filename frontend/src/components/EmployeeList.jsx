import { Table } from "reactstrap";
import NewEmployeeModal from "./NewEmployeeModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

const EmployeeList = (props) => {
    const employees = props.employees;
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Document</th>
                    <th>Phone</th>
                    <th>Joining Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {!employees || employees.length === 0 ? (
                    <tr>
                        <td colSpan="6" align="center">
                            <b>Ops, no one here yet</b>
                        </td>
                    </tr>
                ) : (
                    employees.map((employee) => (
                        <tr key={employee.pk}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.document}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.joining_date}</td>
                            <td align="center">
                                <NewEmployeeModal
                                    create={false}
                                    employee={employee}
                                    resetState={props.resetState}
                                />
                                &nbsp;&nbsp;
                                <ConfirmRemovalModal
                                    pk={employee.pk}
                                    resetState={props.resetState}
                                />
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
    );
};

export default EmployeeList;
