import React from "react";
import "../scss/index.scss";

export class Artigo extends React.Component {
    render() {
      return (
        <>
            <div className="artigo">
                <img src={this.props.src} alt=""></img>
                <div className="conteudo">
                  <p className="hashtag">#Saude</p>
                  <h4 className="titulo">Titulo para artigo</h4>
                  <p className="texto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt vel minus itaque perferendis quis rerum repellendus nostrum necessitatibus iusto voluptatibus nam alias, eum illo est ullam? Nam beatae ex alias!
                  </p>
                </div>
                
            </div>
        </>
      )
    }
}

export default Artigo;