import React from 'react'
import Link from 'gatsby-link'

import './steps.css'

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.keyAction = this.keyAction.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
        inputValue: {},
        error: 'none', 
    }
 };
    
  keyAction = (e) => {
    if (e.keyCode == 13) {
      if (this.state.inputValue === '' || e.target.value === null || e.target.value === '') {
        this.setState({
          error: 'block',
      })} else {
        this.setState({
          error: 'none',    
        })
        this.props.funk(1, this.state.inputValue) 
      }    
    };
  }    
  
  updateInputValue = (myArr, myStep, myName) => (e) => {
      this.setState({
          [myArr]: {myStep : myName},
      }, console.log(this.state.inputValue))
  }

  render() {
    return (
    <div>
        <div>
            <div className={"errorcontainer"} style={{ display: this.state.error }}>
                <p>You made a mistake!</p>
            </div>
            <div className={"inputcontainer"}>
                {(this.props.cont == null) ? null : this.props.cont.split(",").map(item => <input key={item} className={"inputfield"} type="text" name={item} placeholder={item} onKeyDown={this.keyAction} onChange={this.updateInputValue('inputValue', this.props.stepnr, item)} />)}
            </div>
        </div>
    </div>
    ); 
  }
}

