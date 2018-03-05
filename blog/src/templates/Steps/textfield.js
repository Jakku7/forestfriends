import React from 'react'
import Link from 'gatsby-link'

import TextField from 'material-ui/TextField';

import './steps.css'

export default class Textfield extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        textValue: '', 
    }
  };
    
  keyAction = (e) => {
      if (e.keyCode == 13) {
      this.props.funk(1, this.state.textValue)
      };
  }     

  handleChange = event => {
    this.setState({ textValue: event.target.value });
  };

  render() {
    return (
    <div>
        <div>
            <div className={"textfieldcontainer"}>
               <TextField
                hintText="Please provide us your value here"
                value={this.state.textValue}
                onChange={this.handleChange}
                className={"textelement"}
                multiLine={true}
                underlineShow={false}
                style={{ width: '100%' }}
                textareaStyle={{ fontFamily: "Quattrocento Sans, sans-serif" }}
                rowsMax={5}
               />
            </div>
        </div>
    </div>
    ); 
  }
}


