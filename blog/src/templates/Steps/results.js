import React from 'react'
import Link from 'gatsby-link'

import './steps.css'

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
};  

  render() {
    return (
    <div>
        <div>
            <div className={"resultscontainer"}>
                <p>{this.props.stt}</p>
            </div>
        </div>
    </div>
    ); 
  }
}


