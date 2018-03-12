import React from 'react'
import Link from 'gatsby-link'

import './steps.css'

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
        inputValue: [],
    }
 };
  
  updateInputValue = (myArr, myStep, myName, myLocation) => (e) => {
    const items = this.state.inputValue;
    items[myLocation] = e.target.value;
    this.forceUpdate();
    
    /* do poprawienia troszke jest to i trzeba tez zrobic funkcje getValue zapamietujaca to, co wpisal uzytkownik */ 
    console.log(this.state.inputValue)
    if (this.state.inputValue < this.props.cont.length) {
        this.props.errorhandler(); 
        console.log('dziala');
    }
    }

  render() {
    return (
    <div>
        <div>
            <div className={"errorcontainer"} style={{ display: this.props.error }}>
                <p>You made a mistake!</p>
            </div>
            <div className={"inputcontainer"}>
                {(this.props.cont == null) ? null : this.props.cont.split(",").map(function(item, i) { return <input key={i} className={"inputfield"} defaultValue={this.props.stt[i]} type="text" name={item} placeholder={item} onKeyDown={this.props.keyPress(this.state.inputValue)} onChange={this.updateInputValue('inputValue', this.props.stepnr, item, i)} /> }, this)}
            </div>
        </div>
    </div>
    ); 
  }
}

