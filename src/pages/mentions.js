import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { LinkPreview } from '@dhaiwat10/react-link-preview'

export default props => {
  const data = useStaticQuery(graphql`
  query {
    allMentionJson(sort: {fields: [date, month], order:[DESC,DESC]}) {
      edges {
        node {

          url
          fallbackimg
          alt
        }
      }
    }
  }
  
  `)

  const cardGrid = data.allPublicationsJson.edges.map((item, index) => (
        <LinkPreview 

          url={item.node.pubweb}
          descriptionLength="50"
          height="350px"
          margin="2%"
          imageHeight="200px"
         backgroundColor="transparent"
         fallbackImageSrc={item.node.fallbackimg}
/>
  ))

  return (
    <Layout
      pageTitle="Mentions"
      pageDescription="Mentions in the media"
    >

<div className="card-grid">
    {cardGrid}
</div>
    
    </Layout>
  )
}
