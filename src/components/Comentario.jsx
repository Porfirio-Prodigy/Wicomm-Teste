import React from "react";
import "../scss/index.scss";

import aspas from '../assets/comentarios/aspas.svg';
import comentario1 from '../assets/comentarios/1.svg';

export class Comentario extends React.Component {
    render() {
      return (
        <>  
        <div className="card-comentario">
            <div className="comentario">
                    <img src={comentario1} alt=""></img>
                    <span className="ident">
                        <p className="nome"><b>Luana Alves</b></p>
                        <p className="titulo">CEO Banco Safra</p>
                    </span>
                    <img src={aspas} alt=""></img>
            </div>
            <span className="comentario-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error iure est. Fugiat necessitatibus quia distinctio eligendi! Obcaecati error unde sequi omnis, vero dolorum suscipit, nam soluta neque, non ad.
            </span>
        </div>
        </>
      )
    }
}

export default Comentario;