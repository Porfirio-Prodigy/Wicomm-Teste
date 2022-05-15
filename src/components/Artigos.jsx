import React from "react";
import "../scss/index.scss";
import Artigo from "./Artigo";
import img1 from '../assets/artigos/1.svg';
import img2 from '../assets/artigos/2.svg';
import img3 from '../assets/artigos/3.svg';

export class Artigos extends React.Component {
    render() {
      return (
        <>
            <div className="artigos">
                <Artigo src={img1}/>
                <Artigo src={img2}/>
                <Artigo src={img3}/>
            </div>
        </>
      )
    }
}

export default Artigos;