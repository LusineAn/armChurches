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
    this.imgPath = '/app/assets/images/carousel/';
  }

  componentDidMount() {
    var req = require.context('../../../assets/images/carousel', false, /.jpg$/);
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
      slidesToShow: 4
    };
    return (
      <Slider {...settings}>
        {
          this.state.images.map(imgName => {
            return (
              <div className="carousel_item" key={imgName}>
                <img
                  className="carousel_img"
                  src={this.imgPath + imgName}
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