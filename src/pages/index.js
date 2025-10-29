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
      <p>You can download my <a href="Caron_CV_Sept2025.pdf">CV here</a> and my <a href="Caron_Public_Education_Disabled_Students.pdf">JMP here</a>. </p>

      <p><a href="/research" >Learn more about my research here!</a></p>
    </Layout>
  )
}
