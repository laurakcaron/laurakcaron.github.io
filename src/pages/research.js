import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import LinkCard from "../components/link-cards"

export default props => {
  const data = useStaticQuery(graphql`
  query {
    allPublicationsJson {
      edges {
        node {
          shorttitle
          authors
          place
          image
          abstract
          fulltextpdf
          color
          pubtype
          pubweb
          date
        }
      }
    }
  }
  
  `)

  const cardGrid = data.allPublicationsJson.edges.map((item, index) => (
        <LinkCard 
          date={item.node.date}
          place={item.node.place}
          shorttitle={item.node.shorttitle}
          authors={item.node.authors}
          abstract={item.node.abstract}
          fulltextpdf={item.node.fulltextpdf}
          //fulltextacc={item.fulltextacc}
          color={item.node.color}
          pubtype={item.node.pubtype}
          pubweb={item.node.pubweb}
          image={item.node.image}/>
  ))

  return (
    <Layout
      pageTitle="Research"
      pageDescription="Learn more about my research"
    >
    Use the selections below to explore the gallery.

<input type="radio" id="All" name="categories" value="All" aria-label="All"/>
<input type="radio" id="journal" name="categories" value="journal" aria-label="Journal articles"></input>
<input type="radio" id="institutional" name="categories" value="institutional"/>
<input type="radio" id="wp" name="categories" value="wp"></input>
<input type="radio" id="blog" name="categories" value="blog"></input>
<input type="radio" id="conference" name="categories" value="conference"></input>
<input type="radio" id="econ" name="categories" value="econ"></input>
<input type="radio" id="non" name="categories" value="non"></input>
<input type="radio" id="history" name="categories" value="history"></input>

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
<div className="card-grid">
    {cardGrid}
</div>
    
    </Layout>
  )
}
