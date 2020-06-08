import React,{Component} from "react";

class UserTextArea extends Component{
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.addInput(event.target.value);
    }
    render() {
        return(
                <textarea value={this.props.textArea.textArea} id="editor" onChange={this.handleChange}></textarea>
        )
    }
}
export {UserTextArea};