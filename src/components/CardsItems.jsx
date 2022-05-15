import React from "react";
import "../scss/index.scss";
import item from "../assets/card_items/cadeira-de-rodas.svg";
import add from "../assets/img/add.svg";

export class CardItems extends React.Component {
    render() {
      return (
        <>
            <div className="cardItems">
                <img src={item} alt=""/>
                <p className="marca">
                    Marca do Produto
                </p>
                <div className="produto" align='left'>
                    Cadeira de Rodas em Aço -                    
                    Ortopedia Jaguaribe - 100900-
                    Pneu Maciço
                </div>
                <p className="desconto">
                    R$ 899,99
                </p>
                <p className="preco">
                    R$ 558,60 <span className="porcentagem_desconto">10% OFF</span>
                </p>
                <p className="parcelado">
                    ou <b>6x</b> de <b>R$ 93,10</b>
                </p>
                <button className="adicionar">
                    ADICIONAR
                    <img src={add} alt=""/>
                </button>
            </div>
        </>
      )
    }
}

export default CardItems;