import React from "react";
import "../scss/index.scss";


export class Anuncio extends React.Component {
    render() {
      return (
        <>
            <div className="anuncio">
            <a href="#a" >
                <img src={this.props.anuncio} alt="" />
            </a>
            </div>
        </>
      )
    }
}

export default Anuncio;