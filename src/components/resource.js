import React from "react"

const Resource = props => {
  return (
    <table className="item-table">
      <tbody>
        <tr>
          <td className="item-name"><a href={props.link}>{props.title || ""}</a></td>
          <td className="item-when">{props.when || ""}</td>
        </tr>
        <tr>
          <td className="item-org">{props.authors || ""}</td>
          <td className="item-where">{props.where || ""}</td>
        </tr>
        <tr>
          <td
            className="item-more-info"
            colSpan={2}
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        </tr>
      </tbody>
    </table>
  )
}

export default Resource 
