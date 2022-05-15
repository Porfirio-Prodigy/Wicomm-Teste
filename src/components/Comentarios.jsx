import React from "react";
import "../scss/index.scss";
import Comentario from "./Comentario";

export class Comentarios extends React.Component {
    render() {
      return (
        <> 
        <h2 className="comentarios-div">O que os nosso clientes dizem</h2>
        <div className="comentarios">
            <span>
                <Comentario />
            </span>
            <span>
                <Comentario />
            </span>
            <span>
                <Comentario />
            </span>
        </div>
        </>
      )
    }
}

export default Comentarios;