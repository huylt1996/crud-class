import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import createPerson from '../services/CreateData'
import { Component } from "react";
import Button from "./Button";

class TableDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: this.props.msg
        };
    }

    bindData() {
        debugger
        const { lstPerson } = this.props;
        const itemTable = [];
        console.log(lstPerson);
        lstPerson.forEach((item, index) => {
            itemTable.push(
                <tr key={index}>
                    <td>{item.stt}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>
                        <Button indexValue={index}/>
                    </td>
                </tr>);
        });
        return itemTable;
    }

    render() {
        debugger
        const lstData = this.bindData();
        return (
            <div>
                <h1 className="text-center">{this.state.msg}</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lstData}
                    </tbody>
                </Table>
            </div>
        );
    }
}

// function TableDetail(props) {
//     const data = createPerson();
//     const itemTable = [];
//     data.forEach((item, index) =>{
//         itemTable.push(
//             <tr key={index}>
//                 <td>{item.stt}</td>
//                 <td>{item.firstName}</td>
//                 <td>{item.lastName}</td>
//                 <td>
//                     <button
//                         type="button"
//                         className="btn btn-primary"
//                         onClick={() => handleUpdate(index)}
//                     >
//                         Update
//                     </button>
//                     |
//                     <button
//                         type="button"
//                         className="btn btn-primary"
//                     >
//                         Delete
//                     </button>
//                 </td>
//             </tr>);
//     });

//     function handleUpdate(index){
//         alert("Update record: " + index)
//     }

//     return (
//         <div>
//             <h1 className="text-center">{props.msg}</h1>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Handle</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {itemTable}
//                 </tbody>
//             </Table>
//         </div>
//     );
// }

export default TableDetail;