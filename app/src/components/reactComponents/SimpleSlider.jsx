import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {

  constructor() {
    super();
    this.state = {
      images: []       
    };
    this.imgPath = '/app/images/';
  }

  componentDidMount() {
    var req = require.context('../../../images', false, /.jpg$/);
    this.setState({
      images: req.keys().map(key => key.split('/')[1])
    })
  }
  
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToScroll: 1,
      autoplay: true,
      slidesToShow: 4,
      // slidesPerRow: 4,
      // autoplaySpeed: 4000
    };
    return (
      <Slider {...settings}>
        {
          this.state.images.map(imgName => {
            return (
              <div className="carousel_item" key={imgName}>
              <img
                className="carousel_img"
                src={this.imgPath+imgName}
              />
            </div>
            )
          })
        }
      </Slider>
    );
  }
}
export default SimpleSlider;