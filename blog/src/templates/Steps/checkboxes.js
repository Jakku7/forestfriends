import React from 'react'
import Link from 'gatsby-link'

import Checkbox from 'material-ui/Checkbox';

import './steps.css'

export default class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.clickCheckbox = this.clickCheckbox.bind(this)
    this.state = {
        checkboxes: [], 
    }
};  
    
  checkboxesUpdate = (element, myArr) => {
    const inp = this.state[myArr];
    if (inp.indexOf(element) > -1) {
      return true;
    } else {
      return false;
    }
  }
  
  clickCheckbox = (myArr) => (e) => {
      const a = this.state[myArr];
      if (a.indexOf(e.target.value) > -1) {
        this.setState({ [myArr]: a.filter(function(element) {
          return element !== e.target.value;
        })});
      } else {
        this.setState({
          [myArr]: [...a, e.target.value]
        }, function(){console.log(this.state.checkboxes)});
      } 
  };

  render() {
    return (
    <div>
        <div>
            <div className={"checkcontainer"}>
              {(this.props.cont == null) ? null : this.props.cont.split(",").map(item => <Checkbox key={item} label={item} value={item} checked={this.checkboxesUpdate(item, 'checkboxes')} onClick={this.clickCheckbox('checkboxes')} className={"checkboxes"} />)}
            </div>
        </div>
    </div>
    ); 
  }
}


