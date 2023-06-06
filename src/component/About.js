import { about_logo } from "../img/index";
import "../style/Homepage.css";

function About() {
  return (
    <section id="About">
      <div className="container-fluid">
        <div className="container p-5">
          <div className="row">
            <div className="col-6 leftabout">
              <h1>ABOUT US</h1>

              <p className="py-4">
                Galleri Kopi was created in 2021, a themed coffee shop with a
                minimalist and aesthetic place. Our location is in Galaxy, South
                Bekasi. We have different characteristics from the others,
                working closely with other companies in iphone service and
                australian food. The iphone service called <b>ICarethis</b> is
                located in the 2nd floor.
              </p>
            </div>
            <div className="col-6 rightabout">
              <img src={about_logo}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
