import React from "react";
import "../scss/index.scss";
import Anuncio from "./Anuncio";
import anuncio1 from '../assets/anuncios/anuncio-1.svg';
import anuncio2 from '../assets/anuncios/anuncio-2.svg';

export class Anuncios extends React.Component {
    render() {
      return (
        <div className="anuncios"> 
            <Anuncio anuncio={anuncio1} txtbutton={"VER NOVIDADES"}/>
            <Anuncio anuncio={anuncio2} txtbutton={"SAIBA MAIS"}/>
        </div>
      )
    }
}

export default Anuncios;