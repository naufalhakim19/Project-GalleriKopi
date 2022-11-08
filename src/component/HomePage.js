import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../img/carousel_1.png";
import carousel2 from "../img/courselSecFloor.jpg";
import carousel3 from "../img/courselVintageWallpaper.jpg";
import "../style/Homepage.css";

function HomePage() {
  return (
    <div>
      <Carousel className="carousel" fade>
        <Carousel.Item>
          <img
            className="d-block w-100 bg-color-black"
            src={carousel1}
            alt="First slide"
          />
          <h1 className="TextCentered"></h1>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bg-color-black"
            src={carousel2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bg-color-black"
            src={carousel3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <section id="menu">
        <div className="container">
          <div className="OurMenu py-5">
            <h5> WE ARE SERVED WHOLEHEARTEDLY </h5>
            <h1>OUR MENU</h1>

            <hr className="py-3"></hr>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
