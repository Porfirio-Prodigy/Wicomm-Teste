import React from "react";
import "../scss/index.scss";

export class Empresa extends React.Component {
    render() {
      return (
        <>
            <div className="empresa">
                <img src={this.props.src} alt="" srcset="" />
            </div>
        </>
      )
    }
}

export default Empresa;