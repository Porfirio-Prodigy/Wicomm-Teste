import React from "react";
import "../scss/index.scss";
import Item from "./Item";
import estetoscopio from '../assets/items/estetoscopio.svg';
import bebe from '../assets/items/bebe.svg';
import cadeira from '../assets/items/cadeira_rodas.svg';
import estudantes from '../assets/items/estudantes.svg';
import moveis from '../assets/items/moveis.svg';
import inaladores from '../assets/items/inaladores.svg';

export class Items extends React.Component {
    render() {
      return (
        <>
          <div className="items">
            <Item src={estetoscopio} txt="Medicina Ocupacional"/>
            <Item src={bebe} txt="Pediatria"/>
            <Item src={cadeira} txt="Cadeira de Rodas"/>
            <Item src={estudantes} txt="Estudantes"/>
            <Item src={moveis} txt="Móveis hospitalares"/>
            <Item src={inaladores} txt="Inaladores"/>
          </div>
            
        </>
      )
    }
}

export default Items;