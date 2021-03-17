import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

//https://stackoverflow.com/questions/55122752/reusable-gatsby-image-component-with-dynamic-image-sources
 
const Image = props => (
  <StaticQuery
    query ={graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(layout: FIXED
                              width: 300
                              height: 150)
            }
          }   
        }
      }
    }
    `}
  render={data => {
   const image = data.images.edges.find(n => {
      return n.node.relativePath.includes(props.filename);
    });
    if (!image) {
      return null;
    }
    
    return (
      <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} />
      
      );
  }}
  />
);
export default Image;

  