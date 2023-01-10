import Carousel from "react-bootstrap/Carousel";

function ContactsCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hyperpc.ru/images/company/tour/new-showroom/hyperpc-new-showroom-photo-01_webp.jpg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hyperpc.ru/images/company/tour/new-showroom/hyperpc-new-showroom-photo-02_webp.jpg"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hyperpc.ru/images/company/tour/new-showroom/hyperpc-new-showroom-photo-03_webp.jpg"
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ContactsCarousel;
