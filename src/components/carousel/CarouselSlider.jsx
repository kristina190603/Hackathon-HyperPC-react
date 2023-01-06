import Carousel from "react-bootstrap/Carousel";
import React from "react";
import carousel1 from "../storage/carousel1.jpg";
import carousel2 from "../storage/carousel2.jpg";
import carousel3 from "../storage/carousel3.jpg";
import carousel4 from "../storage/carousel4.jpg";
import carousel5 from "../storage/carousel5.jpg";

function CarouselSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <h2 className="carouselPar1">ВСТРЕЧАЙ НОВЫЙ <br /> 2023 ГОД</h2>
        <p className="carouselPar2">ВМЕСТЕ С КОМПЬЮТЕРАМИ HYPERPC</p>
        <button className="btnCarousel">ПОДРОБНЕЕ</button>
        <img className="d-block " src={carousel1} alt="First slide" />
      </Carousel.Item>
      
      <Carousel.Item>
        <h2 className="carouselPar1">ГОТОВЬСЯ К ПРАЗДНИКАМ!</h2>
        <p className="carouselPar2">ОГРАНИЧЕННАЯ СЕРИЯ КОМПЬЮТЕРОВ <br /> В НАЛИЧИИ С РАССРОЧКОЙ 0%</p>
        <button className="btnCarousel">ПОДРОБНЕЕ</button>
        <img className="d-block " src={carousel2} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <h2 className="carouselPar1">INTEL CORE 13-ГО ПОКОЛЕНИЯ</h2>
        <p className="carouselPar2">ПРОИЗВОДИТЕЛЬНОСТЬ <br /> СЛЕДУЮЩЕГО УРОВНЯ</p>
        <button className="btnCarousel">ПОДРОБНЕЕ</button>
        <img className="d-block" src={carousel3} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <h2 className="carouselPar1">NVIDIA GEFORCE RTX 40</h2>
        <p className="carouselPar2">БОЛЬШЕ ЧЕМ СКОРОСТЬ</p>
        <button className="btnCarousel">ПОДРОБНЕЕ</button>
        <img className="d-block" src={carousel4} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <h2 className="carouselPar1">UPGRADE CENTER</h2>
        <p className="carouselPar2">СДЕЛАЙ СВОЙ КОМПЬЮТЕР ЛУЧШЕ!</p>
        <button className="btnCarousel">ПОДРОБНЕЕ</button>
        <img className="d-block " src={carousel5} alt="Third slide" />
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselSlider;
