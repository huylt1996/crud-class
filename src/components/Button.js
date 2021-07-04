import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index : this.props.indexValue
        }
        console.log();
    }

    onHandleUpdate(index) {
        // this.setState({index: this.state.index + 5});
        // console.log(this.props.)
        alert("Updating: " + index)
    }
    
    onSubmitUpdate() {

    }

    render() {
        
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.onHandleUpdate(this.state.index)}
                >
                    Update
                </button>
                |
                <button
                    type="button"
                    className="btn btn-primary"
                > 
                    Delete
                </button>
            </div>
        );
    }
}

export default Button;