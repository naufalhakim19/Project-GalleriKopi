import "../style/Homepage.css";
import {
  behind_bar,
  blacktea_hand,
  customer_working,
  machine_coffee_and_figure,
  secFloor,
  share_blacktea,
} from "../img/index";

function Gallery() {
  return (
    <div className="wrapper">
      <div className="gallery py-5">
        <div className="galleryTitle">
          <h5>THAT MOMENT MEANT A LOT TO US</h5>
          <h1>GALLERY</h1>
        </div>
      </div>
      <div className="container py-5">
        <table className="galleryTable">
          <tr>
            <td>
              <img
                src={behind_bar}
                width="300px"
                height="300px"
                className="image"
              ></img>
              <h5>BAR</h5>
            </td>
            <td>
              <img
                src={blacktea_hand}
                width="300px"
                height="300px"
                className="image"
              ></img>
              <h5>BLACKTEA</h5>
            </td>
            <td>
              <img
                src={customer_working}
                width="300px"
                height="300px"
                className="image"
              ></img>
              <h5>WORKING SPACE</h5>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={machine_coffee_and_figure}
                width="300px"
                height="300px"
                className="image"
              ></img>
              <h5>MACHINE COFFEE</h5>
            </td>
            <td>
              <img
                src={share_blacktea}
                width="300px"
                height="300px"
                className="image"
              ></img>
              <h5>SHARE BLACKTEA ON FRIDAY</h5>
            </td>
            <td>
              <img
                src={secFloor}
                width="300px"
                height="300px"
                className="image"
              ></img>
              <h5>SECOND FLOOR</h5>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Gallery;
