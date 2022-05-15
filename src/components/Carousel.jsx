import React, { Component } from "react";
import Slider from "react-slick";
import slide from '../assets/slide/Frame 1.svg'
import nextarrow from '../assets/img/next-arrow.svg';
import prevarrow from '../assets/img/prev-arrow.svg';

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
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel">
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <img src={slide} alt="" className="slide"/>
          </div>
          <div key={2}>
            <img src={slide} alt="" className="slide"/>
          </div>
        </Slider>
        <div className="arrows" style={{ textAlign: "center" }}>
          <button className="button btn-prev" onClick={this.previous}>
            <img src={prevarrow} alt=""/>
          </button>
          <button className="button btn-next" onClick={this.next}>
            <img src={nextarrow} alt=""/>
          </button>
        </div>
      </div>
    );
  }
}