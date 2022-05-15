import React from "react";
import "../scss/index.scss";


export class Item extends React.Component {
    render() {
      return (
        <>
            <div className="item">
                <div class='background'>
                    <img class="background__img" src={ this.props.src } alt="">
                </img>
                
                </div>
                <p className="text">{ this.props.txt }</p>
            </div>
        </>
      )
    }
}

export default Item;