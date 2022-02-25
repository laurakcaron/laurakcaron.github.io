import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { LinkPreview } from '@dhaiwat10/react-link-preview'

export default props => {
  const data = useStaticQuery(graphql`
  query {
    allMentionsJson(sort: {fields: [date], order:[DESC,DESC]}) {
      edges {
        node {
          pubweb
          fallbackimg
          explicitimg
        }
      }
    }
  }
  
  `)

  const cardGrid = data.allMentionsJson.edges.map((item, index) => (  
    <a tabIndex="0" href={item.node.pubweb}>
        <LinkPreview 

          url={item.node.pubweb}
          descriptionLength="50"
          height="350px"
          margin="2%"
          imageHeight="200px"
         backgroundColor="transparent"
         fallbackImageSrc={item.node.fallbackimg}
         explicitImageSrc={item.node.explicitimg}
          tabindex="0"
/>
</a>
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
