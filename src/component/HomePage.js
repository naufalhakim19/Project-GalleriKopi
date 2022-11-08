import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../img/carousel_1.png";
import carousel2 from "../img/carousel_2.png";
import carousel3 from "../img/carousel_3.png";
import React from "react";
import Carousel2 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Menu1 from "../img/ourBeans.jpg";
import Menu2 from "../img/coffeMenu.jpg";
import Menu3 from "../img/noncoffeeMenu.jpg";
import Menu4 from "../img/blackteaMenu.jpg";
import logo_about from "../img/logo_about.png";
import "../style/Homepage.css";

function HomePage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

            <hr className="py-2"></hr>
          </div>

          <div className="product">
            <Carousel2 responsive={responsive}>
              <div>
                <img src={Menu1}></img>
                <h4>MOCKTAIL</h4>
                <p>
                  {" "}
                  Our signatures are <b>Coffee Mocktail</b> that has a fresh
                  impression, for bestseller our moktail are{" "}
                  <b>Auntumn and Winter. </b>
                  for other moktail are Cloudy, Sunset, and Aurora.
                </p>
              </div>
              <div>
                <img src={Menu2}></img>
                <h4>COFFEE</h4>
                <p>
                  {" "}
                  Our signatures are{" "}
                  <b>
                    Abstract Coffee, Natural Coffee, and Classic Coffee.
                  </b>{" "}
                  for other coffees are Cappuccino, Americano, Long Black,
                  Vanilla latte. For manual brew are Javanesse, V60, and Vietnam
                  drip.
                </p>
              </div>
              <div>
                <img src={Menu3}></img>
                <h4>NON COFFEE</h4>
                <p>
                  {" "}
                  We serve a variety of flavors. Taro, Banana, Avocado, Green
                  Tea, and Chocolate. Our best seller is <b>Redvelvet.</b>
                </p>
              </div>
              <div>
                <img src={Menu4}></img>
                <h4>TEA</h4>
                <p>
                  {" "}
                  We serve two kinds of tea. Black tea and White tea. Our
                  signatures for tea is <b>White tea</b>
                </p>
              </div>
              <div>
                <img src={Menu1}></img>
                <h4>OUR BEANS</h4>
                <p>
                  {" "}
                  We use Arabica and Robusta. For special coffee beans for
                  manual brew are single origin from the nearest or{" "}
                  <b>famous roastery.</b>
                </p>
              </div>
            </Carousel2>
          </div>
        </div>
      </section>

      <section id="About">
        <div className="container-fluid">
          <div className="container p-5">
            <div className="row">
              <div className="col-6 leftabout">
                <h1>ABOUT US</h1>

                <p className="py-4">
                  Galleri Kopi was created in 2021, a themed coffee shop with a
                  minimalist and aesthetic place. Our location is in Galaxy,
                  South Bekasi. We have different characteristics from the
                  others, working closely with other companies in iphone service
                  and australian food. The iphone service called{" "}
                  <b>ICarethis</b> is located in the 2nd floor.
                </p>
              </div>
              <div className="col-6 rightabout">
                <img src={logo_about}></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1>asd</h1>
      <h1>asd</h1>
      <h1>asd</h1>
    </div>
  );
}
export default HomePage;
