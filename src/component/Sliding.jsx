import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../component/style.css";
export default class Sliding extends Component {
  render() {
    return (
      <div className="container">
        <div class="Banner_image">
          <div class="Banner_base">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://assets.tatacliq.com/medias/sys_master/images/45057944748062.jpg"
                  alt=""
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://assets.tatacliq.com/medias/sys_master/images/45105995382814.gif"
                  alt=""
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://assets.tatacliq.com/medias/sys_master/images/45160920186910.jpg"
                  alt=""
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
