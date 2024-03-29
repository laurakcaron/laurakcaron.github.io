import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

//https://stackoverflow.com/questions/55122752/reusable-gatsby-image-component-with-dynamic-image-sources
 
const Image = props => (
  <StaticQuery
    query ={graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "data" } }) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }   
        }
      }
    }
    `}
  render={data => {
   const image = data.images.edges.find(n => {
      let regex = /[^/]*$/g
      return n.node.relativePath.includes(regex.exec(props.filename));
    });
    if (!image) {
      return null;
    }
    
    return (
      <img src={image.node.childImageSharp.gatsbyImageData.images.fallback.src} lazy alt class="gatimg" />
      
      );
  }}
  />
);
export default Image;

  