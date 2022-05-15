import React from "react";
import "../scss/index.scss";

import telefone from '../assets/form/telefone.svg';
import whatsapp from '../assets/form/whatsapp.svg';
import email from '../assets/form/email2.svg';

import face from '../assets/redes/face.svg';
import insta from '../assets/redes/insta.svg';
import twitter from '../assets/redes/twitter.svg';
import youtube from '../assets/redes/youtube.svg';

import selo from '../assets/img/selo-confianca.svg';
import letsEncrypt from '../assets/img/lets-encrypt.svg';

import american from '../assets/pagamentos/american.svg';
import barras from '../assets/pagamentos/barras.svg';
import diners from '../assets/pagamentos/diners.svg';
import elo from '../assets/pagamentos/elo.svg';
import mastercard from '../assets/pagamentos/mastercard.svg';
import visa from '../assets/pagamentos/visa.svg'

import vtex from '../assets/img/vtex.svg';

export class Footer extends React.Component {
    render() {
      return (
        <> 
            <div className="footer">
                <div className="contatos">
                    <div className="contato">
                        <div className="img">
                            <img src={telefone} alt=""></img>
                        </div>
                        
                        <div className="number">
                            <div className="txt-1">SAC E TELEVENDAS</div>
                            <div className="txt-2">(11)2424-7213</div>
                        </div>
                    </div>
                    <span className="contato">
                        <div className="img">
                            <img src={whatsapp} alt=""></img>
                        </div>
                        
                        <div className="number">
                            <div className="txt-1">NOSSO WHATSAPP</div>
                            <div className="txt-2">(11)9 7699 6558</div>
                        </div>
                    </span>
                    <span className="contato">
                        <div className="img">
                            <img src={email} alt=""></img>
                        </div>
                        
                        <div className="number">
                            <div className="txt-1">E-MAIL</div>
                            <div className="txt-2">sac@centermedical.com.br</div>
                        </div>
                    </span>
                    
                </div>
                <div className="sobre-redes">
                    <div className="sobre">
                        <div className="item"><h4>SOBRE</h4></div>
                        <div className="item">Empresa</div>
                        <div className="item">Política de Privacidade</div>
                        <div className="item">Dúvidas</div>
                        <div className="item">É Seguro</div>
                    </div>
                    <div className="redes">
                        <div className="item">
                            <h4>REDES SOCIAS</h4>
                        </div>
                        <div className="item">
                            <div className="sociais">
                                <img src={face} alt=""/>
                            </div>
                            <div className="sociais">
                                <img src={insta} alt=""/>
                            </div>
                            <div className="sociais">
                                <img src={twitter} alt=""/>
                            </div>
                            <div className="sociais">
                                <img src={youtube} alt=""/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="sobre-redes">
                    <div className="sobre">
                        <div className="item"><h4>ATENDIMENTO</h4></div>
                        <div className="item">Central de Atendimento</div>
                        <div className="item">Trocas e Devoluções</div>
                        <div className="item">Política de Entrega</div>
                    </div>
                    <div className="sobre">
                        <div className="item"><h4>MAIS BUSCADOS</h4></div>
                        <div className="item">Estetoscópio</div>
                        <div className="item">Eximetro dedo</div>
                        <div className="item">Esfigmonanômetro</div>
                        <div className="item">Equipamento médico</div>
                    </div>
                </div>
                <div className="sobre-redes">
                    <div className="sobre">
                        <div className="item"><h4>FORMAS DE PAGAMENTO</h4></div>
                        <div className="item">
                        <div className="seguranca">
                            <div className="card"><img src={elo} alt="" /></div>
                            <div className="card"><img src={visa} alt=""/></div>
                            <div className="card"><img src={mastercard} alt=""/></div>
                        </div>
                        <div className="seguranca">
                            <div className="card"><img src={barras} alt="" /></div>
                            <div className="card"><img src={diners} alt=""/></div>
                            <div className="card"><img src={american} alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div className="sobre">
                        <div className="item"><h4>SEGURANÇA</h4></div>
                        <div className="item">
                            <div className="seguranca">
                                <span className="card-seg">
                                    <img src={letsEncrypt} alt="" />
                                    <img src={selo} alt=""/>    
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="plataforma">
                <p>
                    Copyright &copy; 2014 Center Medical - TODOS OS DIREITOS RESERVADOS - É proibida a reprodução.<br/>
                    total ou parcail d conteúdo sem prévia autorização da CENTERMEDICAL.
                </p>
                <img src={vtex} alt=""/>
            </div>
        </>
      )
    }
}

export default Footer;