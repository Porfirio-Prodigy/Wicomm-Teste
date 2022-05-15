import React from "react";
import "../scss/index.scss";

import nome from '../assets/form/nome.svg';
import email from '../assets/form/email.svg';

export class Newsletter extends React.Component {
    render() {
      return (
        <> 
        <div className="newsletter">
            <h2>ASSINE A NOSSA NEWSLETTER</h2>
            <p>
                Fique por dentro de todas as novidades, lançamento e promoções da <b>Center Medical</b>
            </p>
            <div className="form">
                <span className="name">
                    <img src={nome} alt=""/>
                    |
                    <input type="text" placeholder="Digite seu nome"/>
                </span>
                <span className="email">
                    <img src={email} alt=""/>
                    |
                    <input type="text" placeholder="Digite seu e-mail"/>
                </span>
                <button className="cadastrar">
                    CADASTRAR
                </button>
            </div>
        </div>
        </>
      )
    }
}

export default Newsletter;