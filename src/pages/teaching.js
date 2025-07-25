import React from "react"
import Layout from "../components/layout"
import Item from "../components/item"
import { useStaticQuery, graphql } from "gatsby"

export default props => {

 

  return (
    <Layout
      pageTitle="Teaching"
      pageDescription="Learn more about my teaching experience"
    >
<div style={{listStyleType: "none"}}>
<h2 style={{lineHeight:"1.1", fontSize:"larger", marginBottom: "0px"}}>Teaching Awards</h2>
<hr style={{margin:"1rem"}}></hr>
<ul style={{listStyleType: "none"}}>
<li>Wueller Teaching Award for Best TA in PhD Courses, AY 2023-2024, Columbia Department of Economics</li>
  <li>Wueller Teaching Award for Best TA in Undergraduate Core Courses, AY 2021-2022, Columbia Department of Economics</li>
</ul>

<h2 style={{lineHeight:"1.1", fontSize:"larger", marginBottom: "0px"}}>Instructor of Record</h2>
<hr style={{margin:"1rem"}}></hr>
<ul style={{listStyleType: "none"}}>
  <li>Labor Economics, Summer 2024. Columbia University Department of Economics. Evaluation 4.5/5.  </li>
</ul>

<h2 style={{lineHeight:"1.1", fontSize:"larger", marginBottom: "0px"}}>Teaching Assistantships</h2>
<hr style={{margin:"1rem"}}></hr>
<ul style={{listStyleType: "none"}}>
  <li>PhD Econometrics, Spring 2024. Jushan Bai and Simon Lee, Columbia University Department of Economics. Evaluation 4.8/5.  </li>
  <li>Political Economy, Fall 2023. Alessandra Casella, Columbia University Department of Economics. Evaluation 4.8/5. </li>
  <li>Intermediate Microeconomics, Spring 2022. Professor Ingmar Nyman, Columbia University Department of Economics. Evaluation 4.8/5. </li>
  <li>Political Economy, Fall 2021. Alessandra Casella, Columbia University Department of Economics. Evaluation 4.5/5. </li>
  <li>Macroeconomics, Spring 2017. Professor Carol Rogers, Georgetown University Department of Economics. Evaluation 4.1/5.</li>
</ul>
</div>

    </Layout>
  )
}
