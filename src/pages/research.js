import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import LinkCard from "../components/link-cards"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          research {
            shorttitle
            authors
            place
            image
            abstract
            fulltextpdf
            fulltextacc
            color
            pubtype
            pubweb
            date
          }
        }
      }
    }
  `)

  const cardGrid = data.site.siteMetadata.research.map((item, index) => (
        <LinkCard 
          date={item.date}
          place={item.place}
          shorttitle={item.shorttitle}
          authors={item.authors}
          abstract={item.abstract}
          fulltextpdf={item.fulltextpdf}
          fulltextacc={item.fulltextacc}
          color={item.color}
          pubtype={item.pubtype}
          pubweb={item.pubweb}
          image={item.image}/>
  ))

  return (
    <Layout
      pageTitle="Research"
      pageDescription="Learn more about my research"
    >
    Use the selections below to explore the gallery.

<input type="checkbox" id="All" name="categories" value="All" aria-label="All"/>
<input type="checkbox" id="journal" name="categories" value="journal" aria-label="Journal articles"></input>
<input type="checkbox" id="institutional" name="categories" value="institutional"/>
<input type="checkbox" id="wp" name="categories" value="wp"></input>
<input type="checkbox" id="blog" name="categories" value="blog"></input>
<input type="checkbox" id="conference" name="categories" value="conference"></input>
<input type="checkbox" id="econ" name="categories" value="econ"></input>
<input type="checkbox" id="nonecon" name="categories" value="nonecon"></input>
<input type="checkbox" id="history" name="categories" value="history"></input>

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
    <label for="blog">News Articles & Blogs</label>
  </li>
  <li>
    <label for="conference">Conferences & Presentations</label>
  </li>
  <li>
    <label for="econ">Economics</label>
  </li>
  <li>
    <label for="nonecon">Econ-Related Fields</label>
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
