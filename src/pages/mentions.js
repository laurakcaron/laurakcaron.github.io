import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { LinkPreview } from '@dhaiwat10/react-link-preview'
import LinkCard from "../components/mention-cards"

export default props => {
  const data = useStaticQuery(graphql`
  query {
    allMentionsJson(sort: {fields: [date], order:[DESC,DESC]}) {
      edges {
        node {
          date
          place
          shorttitle
          abstract
          pubweb
          image
          alt
        }
      }
    }
  }
  
  `)

  const cardGrid = data.allMentionsJson.edges.map((item, index) => (  

    <LinkCard 
    date={item.node.date}
    place={item.node.place}
    shorttitle={item.node.shorttitle}
    abstract={item.node.abstract}
    pubweb={item.node.pubweb}
    image={item.node.image}
    alt={item.node.alt}/>

  ))

  return (
    <Layout
      pageTitle="Mentions"
      pageDescription="Mentions in the media or policy briefs"
    >
    Where my work has been mentioned in the news or policy briefs!
    <br></br>
<div className="card-grid">
    {cardGrid}
</div>
    
    </Layout>
  )
}
