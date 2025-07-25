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
      return props.filename && props.filename.includes(regex.exec(n.node.relativePath));
    });
    if (!image) {
       // return <div>Image not found: {props.filename}</div>;
       return null;
        }
    
    return (
      <GatsbyImage image={getImage(image.node)} alt={props.alt} loading="lazy" className="gatimg" />
      
      );
  }}
  />
);
export default Image;

  