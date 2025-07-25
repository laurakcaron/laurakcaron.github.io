import React from "react"
import {AiOutlineTwitter, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {SiGooglescholar, SiOrcid} from 'react-icons/si'
var Color = require('color');

var black = Color.rgb([255, 255, 255])

const Icon = props => {
  return (
    <div className="social-icons-wrapper" style={{textDecoration:"none"}}>
     <a href="https://scholar.google.com/citations?user=JicL98EAAAAJ&hl=en" style={{textDecoration:"none"}}target="blank"> <span title="Google Scholar"><SiGooglescholar style={{color:props.color, height:props.height, width:props.width}} /></span></a>
     <a href="https://www.linkedin.com/in/laura-caron/" style={{textDecoration:"none"}} target="blank"><span title="LinkedIn" ><AiFillLinkedin style={{color:props.color, height:props.height, width:props.width}} /></span></a>
     <a href="https://orcid.org/0000-0001-5450-1159" style={{textDecoration:"none"}} target="blank"><span title="OrcID"><SiOrcid style={{color:props.color, height:props.height, width:props.width}} /></span></a>     
     <a href="https://github.com/laurakcaron" style={{textDecoration:"none"}} target="blank"><span title="Github"><AiFillGithub style={{color:props.color, height:props.height, width:props.width}} /></span></a>

  </div>
  )

  }
  
  export default Icon
  

  