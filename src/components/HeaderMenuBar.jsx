import React from "react";
import "../scss/index.scss";
import logo from '../assets/img/logo.svg';
import search from '../assets/img/search.svg';
import assinaturas from '../assets/img/assinaturas.svg';
import login from '../assets/img/login.svg';
import cart from '../assets/img/Cart.svg';
import chevron from '../assets/img/chevron-arrow.svg';

export class Meuapp extends React.Component {
    render() {
      return (
        <>
          <div className="menu-bar">
            <img src={logo} alt="" className="menu-bar__logo"/>
            <div className="menu-bar__search">
              <input type="text" placeholder="O que você procura?" className="menu-bar__search-input"/>
              <span className="menu-bar__search-icon">
                <img src={search} alt=""></img>
              </span>
            </div>              
            <div className="menu-bar__assinaturas">
              <span className="menu-bar__icon">
                <img src={assinaturas} alt=""></img>
              </span>
              <span>
                Minhas
                <div>
                  Assinaturas
                </div>
              </span>
            </div>
            
            <div className="menu-bar__assinaturas">
              <span className="menu-bar__icon">
                <img src={login} alt=""></img>
              </span>
              <span>
                Olá, Visitante
                <div className="menu-bar__visitante">
                  <span>
                    Entrar  
                  </span>
                  <span className="menu-bar__visitante-icon">
                    <img src={chevron} alt="" className="menu-bar__chevron-arrow"></img>
                  </span>
                  
                </div>
              </span>
            </div>

            <div className="menu-bar__assinaturas">
              <span className="menu-bar__icon">
                <img src={cart} alt=""></img>
              </span>
              <span>
                Meu
                <div>
                  Carrinho
                </div>
              </span>
            </div>


          </div>
        </>
      )
    }
}

export default Meuapp;