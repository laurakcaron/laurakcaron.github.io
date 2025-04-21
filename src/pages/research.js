import React, {useState} from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import LinkCard from "../components/link-cards"

export default props => {
  const data = useStaticQuery(graphql`
  query {
    allPublicationsJson(sort:  {fields: [date, month], order:[DESC,DESC]}) {
      edges {
        node {
          shorttitle
          authors
          place
          image
          abstract
          fulltextpdf
          pubtype
          pubweb
          date
          alt
          slides
          presentedat
          mentionedin
          linkname
        }
      }
    }
  }
  
  `)

  //Control abstract display individually
  const [openAbstractId, setOpenAbstractId] = useState(null);
  // And as a group 
  const [showAbstract, setShowAbstract] = useState(false);
  const handleCheckboxChange = (event) => {
    setShowAbstract(event.target.checked);
  };

  const cardGridPub = data.allPublicationsJson.edges.filter( (item) => item.node.pubtype.includes("journal")).map((item, index) => (
        <LinkCard 
          date={item.node.date}
          place={item.node.place}
          shorttitle={item.node.shorttitle}
          authors={item.node.authors}
          abstract={item.node.abstract}
          fulltextpdf={item.node.fulltextpdf}
          //fulltextacc={item.fulltextacc}
          pubtype={item.node.pubtype}
          pubweb={item.node.pubweb}
          linkname={item.node.linkname}
          image={item.node.image}
          alt={item.node.alt}
          slides={item.node.slides}
          presentedat={item.node.presentedat}
          mentionedin={item.node.mentionedin}
          showAbstract={showAbstract || openAbstractId === item.node.shorttitle}
          onToggleAbstract={() =>
            setOpenAbstractId((prev) => (prev === item.node.shorttitle ? null : item.node.shorttitle))
          }       
          />
  ))

  const cardGridWP = data.allPublicationsJson.edges.filter( (item) => item.node.pubtype.includes("wp")).map((item, index) => (
    <LinkCard 
      date={item.node.date}
      place={item.node.place}
      shorttitle={item.node.shorttitle}
      authors={item.node.authors}
      abstract={item.node.abstract}
      fulltextpdf={item.node.fulltextpdf}
      //fulltextacc={item.fulltextacc}
      pubtype={item.node.pubtype}
      pubweb={item.node.pubweb}
      linkname={item.node.linkname}
      image={item.node.image}
      alt={item.node.alt}
      slides={item.node.slides}
      presentedat={item.node.presentedat}   
      mentionedin={item.node.mentionedin}
      showAbstract={showAbstract || openAbstractId === item.node.shorttitle}
      onToggleAbstract={() =>
        setOpenAbstractId((prev) => (prev === item.node.shorttitle ? null : item.node.shorttitle))
      }     
      />
))


const cardGridPolicy = data.allPublicationsJson.edges.filter( (item) => item.node.pubtype.includes("institutional")).map((item, index) => (
  <LinkCard 
    date={item.node.date}
    place={item.node.place}
    shorttitle={item.node.shorttitle}
    authors={item.node.authors}
    abstract={item.node.abstract}
    fulltextpdf={item.node.fulltextpdf}
    //fulltextacc={item.fulltextacc}
    pubtype={item.node.pubtype}
    pubweb={item.node.pubweb}
    linkname={item.node.linkname}
    image={item.node.image}
    alt={item.node.alt}
    slides={item.node.slides}
    presentedat={item.node.presentedat} 
    //mentionedin={item.node.mentionedin}
    showAbstract={showAbstract || openAbstractId === item.node.shorttitle}
    onToggleAbstract={() =>
      setOpenAbstractId((prev) => (prev === item.node.shorttitle ? null : item.node.shorttitle))
    }       
    />
))


const cardGridBlog = data.allPublicationsJson.edges.filter( (item) => item.node.pubtype.includes("blog") & item.node.pubtype.includes("econ")).map((item, index) => (
  <LinkCard 
    date={item.node.date}
    place={item.node.place}
    shorttitle={item.node.shorttitle}
    authors={item.node.authors}
    abstract={item.node.abstract}
    fulltextpdf={item.node.fulltextpdf}
    //fulltextacc={item.fulltextacc}
    pubtype={item.node.pubtype}
    pubweb={item.node.pubweb}
    linkname={item.node.linkname}
    image={item.node.image}
    alt={item.node.alt}
    slides={item.node.slides}
    presentedat={item.node.presentedat}  
    mentionedin={item.node.mentionedin} 
    showAbstract={showAbstract || openAbstractId === item.node.shorttitle}
    onToggleAbstract={() =>
      setOpenAbstractId((prev) => (prev === item.node.shorttitle ? null : item.node.shorttitle))
    }     
    />
))

const cardGridHistory = data.allPublicationsJson.edges.filter( (item) => item.node.pubtype.includes("history")).map((item, index) => (
  <LinkCard 
    date={item.node.date}
    place={item.node.place}
    shorttitle={item.node.shorttitle}
    authors={item.node.authors}
    abstract={item.node.abstract}
    fulltextpdf={item.node.fulltextpdf}
    //fulltextacc={item.fulltextacc}
    pubtype={item.node.pubtype}
    pubweb={item.node.pubweb}
    linkname={item.node.linkname}
    image={item.node.image}
    alt={item.node.alt}
    slides={item.node.slides}
    presentedat={item.node.presentedat}   
   // mentionedin={item.node.mentionedin}
    showAbstract={showAbstract || openAbstractId === item.node.shorttitle}
    onToggleAbstract={() =>
      setOpenAbstractId((prev) => (prev === item.node.shorttitle ? null : item.node.shorttitle))
    }     
    />
))


  return (
    <Layout
      pageTitle="Research"
      pageDescription="Learn more about my research"
    >

{/*
<input type="radio" id="All" name="categories" value="All" aria-label="All" checked="checked" />
<input type="radio" id="journal" name="categories" value="journal" aria-label="Journal articles"></input>
<input type="radio" id="institutional" name="categories" value="institutional"/>
<input type="radio" id="wp" name="categories" value="wp"></input>
<input type="radio" id="blog" name="categories" value="blog"></input>
<input type="radio" id="conference" name="categories" value="conference"></input>
<input type="radio" id="econ" name="categories" value="econ"></input>
<input type="radio" id="non" name="categories" value="non"></input>
<input type="radio" id="history" name="categories" value="history"></input>
  */}
<input type="checkbox" id="abstracton" value="abstracton" checked={showAbstract} onChange={handleCheckboxChange}></input>
<input type="checkbox" id="imageson" value="imageson"></input>

{/*
<div class="filters" role="list">
  <li aria-label="All">
    <label for="All" aria-label="All" >All</label>
  </li>
  <li aria-label="journal articles">
    <label for="journal" area-label="journal articles">Journal Articles</label>
  </li>
  <li>
    <label for="institutional">Policy & Institutional Reports</label>
  </li>
  <li>
    <label for="wp">Working Papers</label>
  </li>
  <li>
    <label for="blog">Commentary</label>
  </li>
  <li>
    <label for="conference">Conferences & Presentations</label>
  </li>
  <li>
    <label for="econ">Economics</label>
  </li>
  <li>
    <label for="non">Econ-Related Fields</label>
  </li>
  <li>
    <label for="history">History</label>
  </li> 
</div>
*/}
<div className="researchSwitch" role="list" style={{fontSize:"smaller"}}>
<li>
  Show images   
    <label class="switch" for="imageson">
    <span class="slider round"></span>
  </label>
  </li>  

  <li>
  Show all abstracts
    <label class="switch" for="abstracton">
    <span class="slider round"></span>
  </label>

  </li>
</div>

<div style={{marginTop:"20px"}}>
  <h3 style={{lineHeight:"1.1", fontSize:"larger", marginBottom: "0px"}}>Working papers & works in progress</h3>
    <hr style={{margin:"1rem"}}></hr>
    <div className="card-grid">
      {cardGridWP}
    </div>
</div>

<div style={{marginTop:"20px"}}>
  <h3 style={{lineHeight:"1.1", fontSize:"larger", marginBottom: "0px"}}>Publications</h3>
    <hr style={{margin:"1rem"}}></hr>
    <div className="card-grid">
      {cardGridPub}
    </div>
</div>

<div style={{marginTop:"20px"}}>
  <h3 style={{lineHeight:"1.1", fontSize:"larger", marginBottom: "0px"}}>Contributions to policy & institutional reports</h3>
    <hr style={{margin:"1rem"}}></hr>
    <div className="card-grid">
      {cardGridPolicy}
    </div>
</div>

<div style={{marginTop:"20px"}}>
  <h3 style={{lineHeight:"1.1", fontSize:"larger", marginBottom: "0px"}}>Blog posts & commentary</h3>
    <hr style={{margin:"1rem"}}></hr>
    <div className="card-grid">
      {cardGridBlog}
    </div>
</div>

<div style={{marginTop:"20px"}}>
  <h3 style={{lineHeight:"1.1", fontSize:"larger", marginBottom: "0px"}}>History work</h3>
    <hr style={{margin:"1rem"}}></hr>
    <div className="card-grid">
      {cardGridHistory}
    </div>
</div>


    
    </Layout>
  )
}
