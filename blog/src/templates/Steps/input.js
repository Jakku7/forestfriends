import React from 'react'
import Link from 'gatsby-link'

import './steps.css'

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.keyAction = this.keyAction.bind(this);
    this.state = {
        inputValue: '',
    }
};
    
  keyAction = (e) => {
      if (e.keyCode == 13) {
      this.props.funk(1, this.state.inputValue)
      };
  }    
  
  updateInputValue = (e) => {
      this.setState({
          inputValue: e.target.value,
      })
  }

  render() {
    return (
    <div>
        <div>
            <div className={"inputcontainer"}>
                {(this.props.cont == null) ? null : this.props.cont.split(",").map(item => <input key={item} className={"inputfield"} type="text" name={item} placeholder={item} onKeyDown={this.keyAction} onChange={this.updateInputValue} />)}
            </div>
        </div>
    </div>
    ); 
  }
}

