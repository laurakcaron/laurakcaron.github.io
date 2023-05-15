import React from "react"
import Image from '../components/images.js';
var Color = require('color');

var black = Color.rgb([255, 255, 255])

const LinkCard = props => {
  const pubwebDisplay = !(props.pubweb) ? "none" : "inline";
  const fulltextDisplay = !(props.fulltextpdf) ? "none" : "inline";
  const fulltextaccDisplay = !(props.fulltextacc) ? "none" : "inline";
  const slidesDisplay = !(props.slides) ? "none" : "inline";
  const presentedatDisplay = !(props.presentedat) ? "none" : "inline";
  const presentedtemp = [].concat(props.presentedat);
  const presentedlist = presentedtemp.map((item) =>
  <li>{item}</li>
  );

    return (
<div className="card" pubtype={props.pubtype} tabIndex="0" aria-label={props.shorttitle}>
  <div className="first">
    <div className="cardImage" style={{zIndex:"0", opacity:"1"}}>
   <Image filename={props.image} alt={props.alt} style={{width:"100%", opacity: "1"}}></Image>
   </div>
 
</div>

  <div className="second" style={{lineHeight:"1.1"}} aria-label={props.shorttitle}>
  <div>
   <br></br>
  <h2>{props.shorttitle} ({props.date})</h2>
  <div className="button-outer" style={{marginTop:"0px", fontSize:"smaller"}}>
    <a href={props.pubweb} style={{display:pubwebDisplay}}>[Source]</a> &nbsp; 
    <a href={props.fulltextpdf} style={{display:fulltextDisplay}}>[Full text]</a>  &nbsp;
    <a href={props.slides} style={{display:slidesDisplay}}>[Slides]</a> 
    <span  style={{display:fulltextaccDisplay}}>(<a href={props.fulltextacc} >Accessible version</a>)</span>
    </div>
   <h3>{props.authors}, </h3>
  <h3 style={{fontStyle:"italic"}}>{props.place}</h3>
  </div>
    
    <div className="abstract" ><p style={{fontSize:"smaller", color:"black", marginBottom:"0px", marginTop:"10px"}}>{props.abstract}</p></div>
    <div className="presentedat" ><p style={{fontSize:"smaller", color:"black", marginBottom:"0px", marginTop:"10px", display:presentedatDisplay}}>
      <br></br>
      <br></br>
      Presented at:
      <ul>{presentedlist}</ul>

  
  </p></div>

    <br></br>

</div>
</div>



    )
  }
  
  export default LinkCard
  

  