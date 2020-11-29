import React from 'react'  
import Link from 'gatsby-link'
import bannerimg from '../img/forestfriends.png'

import './banner.css'

const Banner = ({ data }) => (  
  <div className={"bannercontainer"}>
    <img src={bannerimg} />
    <Link to="/stepper" title="Click Here"><button className={"standard"}>Click here</button></Link>
  </div>
)
export default Banner