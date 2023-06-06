import "../style/Homepage.css";

function Contact() {
  return (
    <div className="wrapper">
      <section id="contact">
        <div className="contact">
          <div className="container-fluid2 cc py-3">
            <h5 className="m-4 text1">GET IN TOUCH WITH US</h5>
            <h1>CONTACT</h1>

            <div className="cc2">
              <ul>
                <li>
                  <span className="fa fa-facebook"></span>
                  <h3>asd</h3>
                </li>
                <li>
                  <span className="fa fa-whatsapp"></span>
                  <h3>+6282114121534</h3>
                </li>
                <li>
                  <span className="fa fa-instagram"></span>
                  <h3>@gallerikopi</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="footer">
        <label>© 2022 All right reserved.</label>
      </div>
    </div>
  );
}

export default Contact;
