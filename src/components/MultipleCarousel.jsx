import React, { Component } from "react";
import Slider from "react-slick";
import nextarrow from '../assets/img/next-arrow.svg';
import prevarrow from '../assets/img/prev-arrow.svg';
import CardsItems from './CardsItems';

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
      slidesToShow: 4,
      slidesToScroll: 3,
      dotsClass: "button__bar"
    };
    return (
      <>
          <h1 className="mais-vendidos">{this.props.txt}</h1>
            <p className="ver-tudo">Ver tudo</p>
      <div className="multipleCarousel">
        <div className="carousel">
          <Slider ref={c => (this.slider = c)} {...settings} className="slide1">
            <div key={1}>
              <CardsItems clasName="slide"/>
            </div>
            <div key={2}>
              <CardsItems clasName="slide"/>
            </div>
            <div key={3}>
              <CardsItems clasName="slide"/>
            </div>
            <div key={4}>
              <CardsItems clasName="slide"/>
            </div>
            <div key={5}>
              <CardsItems clasName="slide"/>
            </div>
            <div key={6}>
              <CardsItems clasName="slide"/>
            </div>
            <div key={7}>
              <CardsItems clasName="slide"/>
            </div>
            <div key={8}>
              <CardsItems clasName="slide"/>
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