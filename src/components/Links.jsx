import React from "react";
import "../scss/index.scss";

export class SubLinks extends React.Component {
    render() {
      return (
            <p className="link">{this.props.sublink}</p>
      )
    }
}

export default SubLinks;