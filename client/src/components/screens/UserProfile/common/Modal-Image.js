import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
    constructor(props){
        super(props);
        this.state ={
            file:''
        }
    }
    componentDidMount() {
        const options = {
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%",
            dismissible: true
        };
        M.Modal.init(this.Modal, options);
    }

    render() {
        const {updateAvartar} = this.props
        const _submit = ()=>{
            updateAvartar(this.state.file)
        }
        return (
            <div>
                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id="modal1"
                    className="modal"
                >
                    <div className="modal-content">
                        <h4>Update your avartar</h4>
                            <div className="file-field input-field">
                                <div className="btn">
                                    <span>File</span>
                                    <input type="file" onChange={(e)=>this.setState({file:e.target.files[0]})}/>
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" />
                                </div>
                            </div>
                    </div>

                    <div className="modal-footer">
                        <a className="modal-close waves-effect waves-red btn-flat">
                            Disagree
                        </a>
                        <a className="modal-close waves-effect waves-green btn-flat" onClick={()=>_submit()}>
                            Agree
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
