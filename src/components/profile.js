import React from "react"
import profile_photo from "../../static/profile.jpg"
import { SocialIcon } from "react-social-icons"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../components/social-icon"

const Profile = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          theme
        }
      }
    }
  `)

  const themeDict = "#007faa"
  const socialIcons = (
   /* <SocialIcon
      key={index}
      url={item.link}
      bgColor={themeDict}
      style={{ height: 25, width: 25 }}
    />*/
    <Icon width="25px" height="25px"></Icon>
    )
  return (
    <>
      <div style={{borderRadius:"50%", overflow:"hidden", width:"150px", height:"150px", marginLeft:"auto", marginRight:"auto"}}>
      <img src={profile_photo} alt={props.name} id="profile-img" style={{ display:"inline"}} />
      </div>
      <div id="profile-info-wrapper">
        <h4 id="profile-name">{props.name}</h4>
        <h6 id="profile-role">{props.role}</h6>
        <p id="profile-email">
          she/her <br></br>
          <a href={"mailto:" + props.email}>{props.email || ""}</a>
        </p>
      </div>
      <div id="social-icons-wrapper">{socialIcons}</div>
    </>
  )
}

export default Profile
