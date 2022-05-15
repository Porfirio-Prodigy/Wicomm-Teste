import React from "react";
import "../scss/index.scss";
import SubLinks from "./Links";
import bars from '../assets/img/bars.svg';

export class HeaderSubMenu extends React.Component {
    render() {
      return (
        <>
          <div className="submenu">
          <span className="link--active">
            <span className="link--items">
              <img src={bars} alt="" className="svg"></img>
              <SubLinks sublink="Todas as categorias"/>
            </span>
            
          </span>
          
            <SubLinks sublink="Acessibilidade"/>         
            <SubLinks sublink="Aparelho de pressão"/>
            <SubLinks sublink="Estetoscópio"/>
            <SubLinks sublink="Aparelho médico"/>
            <SubLinks sublink="Equipamento Hospitalar"/>
            <SubLinks sublink="Móveis"/>
            <SubLinks sublink="Modelos Anatômicos"/>
            <SubLinks sublink="Uso pessoal"/>
          </div>
        </>
      )
    }
}

export default HeaderSubMenu;