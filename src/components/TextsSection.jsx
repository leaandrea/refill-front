import React from "react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <>



      <div className="articles-container">


        <article className="art3">
          {/* <div className="who-text-container"> */}
          <h2>How?</h2>
          <p>
            Stop buying plastic bottles! Take your reusable water bottle
                 and use our fabulous map to find free water spots near you. <br /> There are even sparkling water fountains!
                 </p>
          <div className="gouttesContainer1">
            <img className="gouttes" src="./images/GOUTTE3.png" alt="goutte" /></div>

          <p>      Want to know more about
          <Link className="aboutLinks" to="/quality-info">   water quality</Link>?</p>

          {/* </div> */}

        </article>


        <article className="art1">
          {/* <div className="why-text-container"> */}
          <h2>Why?</h2>
          <p>
            Plastic bottles are the main waste in oceans and kill wildlife. And 80% of it is thrown on land. Plus, tap water is 400 times cheaper! Let's save that money and help the planet.
            </p>    <br />
          <div className="gouttesContainer2">
            <img className="gouttes" src="./images/GOUTTE4.png" alt="goutte" /> </div>
          <p>    Do you know the <Link className="aboutLinks" to="/your-plastic-print">impact </Link>of what you consume? <br /></p>

          {/* </div> */}
        </article>

        <article className="art2">
          {/* <div className="who-text-container"> */}
          <h2>Who?</h2>
          <p>
            Refill is for everyone who is in Paris, whether you're a
            local, a tourist on holiday, a jogger, or a family out for the
            afternoon. You can geolocate yourself or click on our map!
            </p>
          <br />
          <div className="gouttesContainer3">
            <img className="gouttes" src="./images/GOUTTE5.png" alt="goutte" /> </div>

          <p>
            If we missed a spot you can tell us
                  <Link className="aboutLinks" to="/contribute"> here</Link>.
                  </p>
          {/* </div> */}
        </article>



      </div>


    </>
  );
}
