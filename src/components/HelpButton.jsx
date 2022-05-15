import React from "react";
import "../scss/index.scss";
import commenticon from '../assets/img/comment-icon.svg';

export class HelpButton extends React.Component {
    render() {
      return (
        <>
            <div className="float-button">
                <button className="help-button">
                    <img src={commenticon} alt=""></img>
                    Posso ajudar?
                </button>
            </div> 
        </>
      )
    }
}

export default HelpButton;