import React from "react";
import "../scss/index.scss";
import Oferta from "./Oferta";
import frete from '../assets/ofertas/frete.svg';
import assinaturas2 from '../assets/ofertas/assinaturas2.svg';
import desconto from '../assets/ofertas/desconto.svg';
import cartao from '../assets/ofertas/cartao.svg'

export class Ofertas extends React.Component {
    render() {
      return (
        <div className="ofertas">
            <Oferta img={frete} txt1="Frete Grátis em todo Brasil" txt2="Compras acima de R$ 999,99" classe="oferta__texto"/>
            <Oferta img={assinaturas2} txt1="Assinaturas 5% OFF" txt2="Como funciona" classe="oferta__texto oferta--underline"/>
            <Oferta img={desconto} txt1="10% de Desconto" txt2="Em predidos via boleto" classe="oferta__texto"/>
            <Oferta img={cartao} txt1="6x sem juros" txt2="No cartão de crédito" classe="oferta__texto"/>
        </div>
        
      )
    }
}

export default Ofertas;