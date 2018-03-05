import React from 'react'
import Link from 'gatsby-link'

import './steps.css'

export default class Radio extends React.Component {
  constructor(props) {
    super(props);
    };

  render() {
    return (
    <div>
        <div>
            <div>
                <div className={"listing"}>{(this.props.cont == null) ? null : this.props.cont.split(",").map(item => <li key={item} value={item} onClick={() => this.props.funk(1, item) }>{item}</li>)}</div>
            </div>
        </div>
    </div>
    ); 
  }
}

