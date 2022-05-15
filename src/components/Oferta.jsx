import React from "react";
import "../scss/index.scss";


export class Oferta extends React.Component {
    render() {
      return (
      <div className="oferta">
          <span className="oferta__img">
            <img src={this.props.img}  alt="" className=""></img>
          </span>
          <span className="oferta__flex">
              <p className="oferta__texto oferta__texto-negrito">
                  {this.props.txt1}
              </p>
              <p className={this.props.classe}>
                  {this.props.txt2}
              </p>
          </span>
          
          
          
      </div>
        
      )
    }
}

export default Oferta;