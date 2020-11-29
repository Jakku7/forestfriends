import React from 'react'  
import Link from 'gatsby-link'
import LottieWrapper from './lottie.js';

import bannerimg from '../img/forestfriends.png'
import LottieControl from './lottie.js';

import './banner.css'

const Banner = ({ data }) => (  
  <div className={"bannercontainer"}>
    {/*<LottieWrapper />*/}
    <img src={bannerimg} />
    <LottieControl />
    <Link to="/stepper" title="Click Here"><button className={"standard"}>Click here</button></Link>
  </div>
)
export default Banner