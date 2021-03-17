import React from "react"
import Layout from "../components/layout"
import Resource from "../components/resource"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../components/social-icon"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          studentresources {
            title
            link
            description
            authors
          }
          researchresources {
            title
            link
            description
            authors
          }
          accessresources {
            title
            link
            description
            authors
          }  
          teachingresources {
            title
            link
            description
            authors
          }   
          coursesresources {
            title
            link
            description
            authors
          }                                           
        }
      }
    }
  `)
  const studentResources = data.site.siteMetadata.studentresources.map((item, index) => (
    <Resource title={item.title} link={item.link} description={item.description} authors={item.authors} ></Resource>
  ))

  const researchResources = data.site.siteMetadata.researchresources.map((item, index) => (
    <Resource title={item.title} link={item.link} description={item.description} authors={item.authors} ></Resource>
  ))

  const accessResources = data.site.siteMetadata.accessresources.map((item, index) => (
    <Resource title={item.title} link={item.link} description={item.description} authors={item.authors} ></Resource>
  ))
  const teachingResources = data.site.siteMetadata.teachingresources.map((item, index) => (
    <Resource title={item.title} link={item.link} description={item.description} authors={item.authors} ></Resource>
  ))
  const coursesResources = data.site.siteMetadata.coursesresources.map((item, index) => (
    <Resource title={item.title} link={item.link} description={item.description} authors={item.authors} ></Resource>
  ))


  return (
    <Layout
      pageTitle="Resources"
      pageDescription="Resources"
    >
      <details>
       <summary>Resources for Students in Economics & Related Fields </summary>
        {studentResources}
      </details>

      <details>
       <summary>Research Resources </summary>
        {researchResources}
      </details>

      <details>
       <summary>Accessibility & Inclusivity Resources </summary>
        {accessResources}
      </details>

      <details>
       <summary>Teaching Resources </summary>
        {teachingResources}
      </details>

      <details>
       <summary> Course Materials Available Online </summary>
        {coursesResources}
      </details>
    </Layout>
  )
}
