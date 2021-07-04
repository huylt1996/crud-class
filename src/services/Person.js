import { Component } from "react";
import TableDetail from '../components/TableDetail';
// import Button from '../components/Button';
class Person extends Component {

    constructor() {
        super();
        this.state = {
            lstPerson: [
                { stt: 1, firstName: "Lee", lastName: "Huy", handle: "" },
                { stt: 2, firstName: "Lee", lastName: "Dao", handle: "" }
            ]
        };
    }

    // createPerson() {
    //     const data = [
    //         { stt: 1, firstName: "Lee", lastName: "Huy", handle: "" },
    //         { stt: 2, firstName: "Lee", lastName: "Dao", handle: "" }
    //     ]
    //     return data;
    // }

    render() {
        // let { list } = this.createPerson();
        return (<div>
                    <TableDetail lstPerson = {this.state.lstPerson} msg="Hello Page"></TableDetail>
                    {/* <Button list = {this.state.lstPerson} ></Button> */}
                </div>
        );
    }
}

export default Person;