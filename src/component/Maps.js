import "../style/Homepage.css";

function Maps() {
  return (
    <div className="wrapper">
      <div className="container visitUs py-5">
        <h5>WE ARE DELIGHTED WHEN YOU VISIT</h5>
        <h1>VISIT US</h1>
        <hr />
      </div>
      <div className="frame">
        <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=galleri kopi&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
    </div>
  );
}

export default Maps;
