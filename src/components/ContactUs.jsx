import React from "react";
import phoneicon from '../assets/img/phone.svg';
import "../scss/index.scss";

export class ContactUs extends React.Component {
    render() {
      return (
        <div className="contact-us">
            <img src={phoneicon} alt="Fale Conosco" className="contact-us__img"/>FALE CONOSCO <b>(11)2424-7213</b>
        </div>
      )
    }
}

export default ContactUs;