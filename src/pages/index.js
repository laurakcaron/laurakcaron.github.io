import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          about
        }
      }
    }
  `)
  return (
    <Layout pageTitle="About" pageDescription="Learn more about me">
      <div dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.about }} />
      <p>You can download my <a href="Caron_CV_Oct2025.pdf" target="blank">CV here</a> and my <a href="Caron_Public_Education_Disabled_Students.pdf" target="blank">JMP here</a>. </p>

      <p>Or watch a <a href ="https://www.youtube.com/watch?v=FZMdnobZvps" target="blank">5 minute video summary</a> of my JMP!</p>

      <p><a href="/research" >Learn more about my research here!</a></p>
    </Layout>
  )
}
