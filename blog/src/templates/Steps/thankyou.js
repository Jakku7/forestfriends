import React from 'react'
import Link from 'gatsby-link'

import './steps.css'

import crocodile from '../../img/horse.png'

export default class Thankyou extends React.Component {
  constructor(props) {
    super(props);
    };

  render() {
    return (
    <div>
        <div>
            <div className={"thankyoucontainer"}>
                <img src={crocodile} alt={"crocodile"} title={"crocodile"} />
            </div>
        </div>
    </div>
    ); 
  }
}

