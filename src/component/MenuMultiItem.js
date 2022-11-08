import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Menu1 from "../img/ourBeans.jpg";
import Menu2 from "../img/coffeMenu.jpg";
import Menu3 from "../img/noncoffeeMenu.jpg";
import Menu4 from "../img/blackteaMenu.jpg";
import "../style/MenuMultiItem.css";

function MenuMultiItem() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className="container">
      <div className="product">
        <Carousel responsive={responsive}>
          <div>
            <img src={Menu1}></img>
            <h4>OUR BEANS</h4>
            <p>
              {" "}
              We use Arabica and Robusta. For special coffee beans for manual
              brew are single origin gayo, flores, and bali.
            </p>
          </div>
          <div>
            <img src={Menu2}></img>
            <h4>COFFEE</h4>
            <p>
              {" "}
              Our signatures are Abstract Coffee, Natural Coffee, and Classic
              Coffee. for other coffees are Cappuccino, Americano, Long Black,
              Vanilla latte. For manual brew are Javanesse, V60, and
              Vietnamdrip.
            </p>
          </div>
          <div>
            <img src={Menu3}></img>
            <h4>NON COFFEE</h4>
            <p>
              {" "}
              We serve a variety of flavors. Taro, Banana, Avocado, Green Tea,
              and Chocolate. Our best seller is Redvelvet.
            </p>
          </div>
          <div>
            <img src={Menu4}></img>
            <h4>TEA</h4>
            <p>
              {" "}
              We serve two kinds of tea. Black tea and white tea. Our signatures
              for tea is white tea
            </p>
          </div>
          <div>
            <img src={Menu1}></img>
            <h4>MOCKTAIL</h4>
            <p>
              {" "}
              We use Arabica and Robusta. For special coffee beans for manual
              brew are single origin gayo, flores , and bali.
            </p>
          </div>
        </Carousel>
      </div>
      <h1>asd</h1>
      <h1>asd</h1>
      <h1>asd</h1>
      <h1>asd</h1>
    </div>
  );
}
export default MenuMultiItem;
