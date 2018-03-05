import React from 'react'
import Link from 'gatsby-link'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './steps.css'

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dropValue: '', 
    }
};  
  
  updateDropValue = (event, index, value) => this.setState({dropValue: value});

  render() {
    return (
    <div>
        <div>
            <div className={"dropdowncontainer"}>
              <SelectField value={this.state.dropValue} className={"dropdown"} floatingLabelText="Plase pick one option" onChange={this.updateDropValue} listStyle={{ background: '#c69c6d'}}>
                {this.props.cont.split(",").map(item => <MenuItem key={item} value={item} className={"menuitem"} primaryText={item} />)}
              </SelectField>
            </div>
        </div>
    </div>
    ); 
  }
}


