import React from "react"
import Image from '../components/images.js';
var Color = require('color');

var black = Color.rgb([255, 255, 255])

const LinkCard = props => {
  const pubwebDisplay = !(props.pubweb) ? "none" : "inline";
  const fulltextDisplay = !(props.fulltextpdf) ? "none" : "inline";
  const fulltextaccDisplay = !(props.fulltextacc) ? "none" : "inline";

    return (
<div className="card" pubtype={props.pubtype} tabIndex="0" aria-label={props.shorttitle}>
  <div className="first">
    <div className="cardImage" style={{zIndex:"0"}}>
   <Image filename={props.image} alt={props.alt}></Image>
   </div>
   <div style={{padding:"8px"}}>
   <br></br>
   <span style={{fontSize:"medium", fontWeight:"bold"}}>{props.shorttitle} ({props.date})<br></br></span>
   <br></br>
   <span style={{fontSize:"small", fontWeight:"lighter"}}>{props.authors}, </span>
  <span style={{fontSize:"small", fontWeight:"lighter", fontStyle:"italic"}}>{props.place}</span>
  </div>
</div>

  <div className="second" style={{lineHeight:"1.1"}} aria-label={props.shorttitle}>
  <span style={{fontSize:"small", fontWeight:"bold"}}>{props.shorttitle} ({props.date})<br></br></span>
  <br></br>
   <span style={{fontSize:"smaller", fontWeight:"lighter"}}>{props.authors}, </span>
  <span style={{fontSize:"smaller", fontWeight:"lighter", fontStyle:"italic"}}>{props.place}</span>
    <p style={{fontSize:"smaller", color:"black", marginBottom:"0px", marginTop:"10px"}}>{props.abstract}</p>
    <br></br>
    <div className="button-outer" style={{marginTop:"0px", fontSize:"smaller"}}>
    <a href={props.pubweb} style={{display:pubwebDisplay}}>Visit the website for "{props.shorttitle}." </a>
    <br></br>
    <p><a href={props.fulltextpdf} style={{display:fulltextDisplay}}> See full text. </a> <span  style={{display:fulltextaccDisplay}}>(<a href={props.fulltextacc} >Accessible version</a>)</span></p>
    </div>
</div>
</div>



    )
  }
  
  export default LinkCard
  

  