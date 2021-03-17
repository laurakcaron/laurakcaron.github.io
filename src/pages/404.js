import React from "react"
import Layout from "../components/layout"
import Card from 'react-bootstrap/Card'
import LinkCard from "../components/link-cards"
import { GatsbyImage } from "gatsby-plugin-image";

const FourPage = ({data}) => {
  return (
<main>
<div>
<input type="radio" id="All" name="categories" value="All" checked/>
<input type="radio" id="institutional" name="categories" value="institutional"/>
<input type="radio" id="wp" name="categories" value="wp"></input>
<input type="radio" id="journal" name="categories" value="journal"></input>
<input type="radio" id="econ" name="categories" value="econ"></input>
<input type="radio" id="nonecon" name="categories" value="nonecon"></input>

<ol class="filters">
  <li>
    <label for="All">All</label>
  </li>
  <li>
    <label for="institutional">Policy & Institutional Reports</label>
  </li>
  <li>
    <label for="wp">Working Papers</label>
  </li>
  <li>
    <label for="journal">Journal Articles</label>
  </li>
  <li>
    <label for="econ">Economics</label>
  </li>
  <li>
    <label for="nonecon">Econ-Related Fields</label>
  </li>
</ol>

    <LinkCard 
      image="middleclass.jpg"
      shorttitle= "The Middle Class in the Philippines"
      abstract="A decade of rapid economic growth has supported upward mobility and the expansion of the middle class in the Philippines. While the Philippines’ record of economic growth has been sound, many East Asian countries have performed better, resulting in higher levels of economic mobility and more rapid middle-class.(...)"
      fulltext="http://hdl.handle.net/10986/34099"
      color="red"
      pubtype="institutional econ"
    ></LinkCard>

    <LinkCard 
      title="Disability, Employment, and Wages: Evidence from Indonesia"
      pubtype="journal econ"
    ></LinkCard>

    <LinkCard></LinkCard>
   
    </div>

    </main>
  )
}

export default FourPage
