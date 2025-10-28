import React from "react"
import Image from '../components/images.js';

var Color = require('color');

var black = Color.rgb([255, 255, 255])

const LinkCard = props => {
  const absDisplay = !(props.abstract) ? "none" : "inline";
  const abstractShown = (props.pubtype && props.pubtype.includes("jmp")) ? "inline" : (props.showAbstract ? "inline" : "none");
  const placeDisplay = !(props.place) ? "none" : "inline";
  const commaDisplay = (props.pubweb && props.authors) ? "inline" : "none";
  const pubwebDisplay = !(props.pubweb) ? "none" : "inline";
  const authorDisplay = !(props.authors) ? "none" : "inline";
  const fulltextDisplay = !(props.fulltextpdf) ? "none" : "inline";
  const fulltextaccDisplay = !(props.fulltextacc) ? "none" : "inline";
  const slidesDisplay = !(props.slides) ? "none" : "inline";
  const presentedatDisplay = !(props.presentedat) ? "none" : "inline";
  const mentionedinDisplay = !(props.mentionedin) ? "none" : "inline";
  const presentedtemp = [].concat(props.presentedat);
  const presentedlist = presentedtemp.map((item) =>
  <li>{item}</li>);

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
  <h2 className="cardTitle">{props.shorttitle} ({props.date})</h2>
  <br></br>
  <div className="button-outer cardInset" style={{marginTop:"0px", fontSize:"14px"}}>
  <h3 style={{display:authorDisplay}}>&nbsp;{props.authors}</h3>
  <h3 style={{display:commaDisplay}}>, </h3>
  <h3 style={{fontStyle:"italic", display:placeDisplay}}>{props.place}</h3>  
  <br></br>
    &nbsp;<span className="cardButton" style={{display:absDisplay}} role="button" tabIndex="0" ariaPressed="false" onClick={props.onToggleAbstract} onKeyDown={e => {
        // only activate on Enter or Space
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          props.onToggleAbstract(e);
        }}}><a>[Abstract]</a></span> &nbsp; 
    <span className="cardButton" style={{display:pubwebDisplay}}><a href={props.pubweb} target="blank">[{props.linkname}]</a></span> &nbsp; 
    <span className="cardButton" style={{display:fulltextDisplay}}><a href={props.fulltextpdf}  target="blank">[PDF]</a> </span> &nbsp;
    <span className="cardButton" style={{display:slidesDisplay}} ><a href={props.slides} target="blank">[Slides]</a> </span>
    <span className="cardButton" style={{display:fulltextaccDisplay}}>(<a href={props.fulltextacc} >Accessible version</a>)</span>
    </div>
  </div>
  <div className="cardInset" style={{ fontSize: "smaller", marginTop: "10px" }}>
    <div className="abstract cardInset" style={{textAlign:"justify", textJustify:"inter-word"}}  ><p style={{fontSize:"1.05em", marginBottom:"0px", marginTop:"10px", display:abstractShown}} tabIndex="0">{props.abstract}</p></div>
  </div>
    <div className="presentedat cardInset" ><p style={{fontSize:"smaller", marginBottom:"0px", marginTop:"10px", display:presentedatDisplay}}>
      <br></br>
      <br></br>
      Presented at:
      <ul>{presentedlist}</ul>

  
  </p></div>

    <br></br>
    <div className="presentedat cardInset" style={{display:mentionedinDisplay, fontSize:"smaller"}}>Mentioned by:<p style={{fontSize:"small", marginBottom:"0px", marginLeft:"20px"}}  dangerouslySetInnerHTML={{ __html: props.mentionedin }}/>

</div>

</div>
</div>



    )
  }
  
  export default LinkCard
  

  