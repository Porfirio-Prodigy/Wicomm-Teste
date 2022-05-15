import React, { Component } from "react";
import Slider from "react-slick";
import nextarrow from '../assets/img/next-arrow.svg';
import prevarrow from '../assets/img/prev-arrow.svg';
import Empresa from "./Empresa";



export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      dotsClass: "button__bar2"
    };
    return (
      <>
    <h1 className="titulo-carousel">{this.props.titulo}</h1>
      <div className="multipleCarousel2">
        <div className="carousel">
          <Slider ref={d => (this.slider = d)} {...settings} className="slide1">
            <div key={1}>
              <Empresa src={this.props.src1}/>
            </div>
            <div key={2}>
              <Empresa src={this.props.src2} />
            </div>
            <div key={3}>
              <Empresa src={this.props.src3}/>
            </div>
            <div key={4}>
              <Empresa  src={this.props.src4}/>
            </div>
            <div key={5}>
              <Empresa src={this.props.src5}/>
            </div>
            <div key={6}>
              <Empresa src={this.props.src6}/>
            </div>
            <div key={7}>
              <Empresa src={this.props.src7}/>
            </div>
          </Slider>
        </div>
        <div className="arrows" style={{ textAlign: "center" }}>
          <button className="button btn-prev" onClick={this.previous}>
            <img src={prevarrow} alt=""/>
          </button>
          <button className="button btn-next" onClick={this.next}>
            <img src={nextarrow} alt=""/>
          </button>
        </div>
      </div>
      </>
    );
  }
}