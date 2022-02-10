import React from "react";
import "./slides.css";
import Carousel from "react-bootstrap/Carousel";
import banner3 from "../../assets/banner-dolce-3.png";
import banner4 from "../../assets/banner-dolce-4.jpg";
import banner5 from "../../assets/banner-dolce-5.jpeg";

function Slides() {
  return (
    <div className="slideShow">
      <div className="slideShow__left">
        <p class="description">
          Realizziamo i nostri dolci con ingredienti naturali, garantendo un gusto unico ai nostri prodotti.
          Le nostre ricette utilizzano sostanze prodotte e coltivate a Km0.
          Seguiamo le tradizioni territoriali per garantire al consumatore un piacere unico e inconfondibile durante la consumazione delle nostre pietanze.
        </p>
      </div>
      <div className="slideShow__right">
        <Carousel
          controls={false}
          indicators
          interval={2500}
          pauseOnHover={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={banner3}
              alt="Prima slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={banner4}
              alt="Seconda slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={banner5}
              alt="Terza slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slides;
