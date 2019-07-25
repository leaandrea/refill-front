import React from "react";
// import NavMain from "../components/NavMain";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <>
      <section className="about">
        <div className="inner-border">
          {/* <NavMain /> */}
          <h3 className="about-title">
          Protect the environment and save money : <br/>
   Refill helps you find all Paris's free drinking water spots to refill
          your water bottle!
           
          </h3>

          <div className="articles-container">
            <article className="art3">
              <div className="who-text-container">
                <h2>How</h2>
                <p>
                  Take your reusable water bottle
                  and use our great map to find free spots near you. There are even sparkling water fountains!
                  <br />
                </p>
                <p>
                  <br /> <br/>
                 Want to know more about
                 <Link className="aboutLinks" to="/quality-info">   water quality</Link>?
                </p>
              </div>
            </article>
            <article className="art1">
              <div className="why-text-container">
                <h2>Why</h2>
                <p>
                  Plastic bottles are the main waste in oceans and kill wildlife. And tap water is 400 times cheaper ! Let's save that money and help the planet.
                  <br/> <br/> <br/>
                 Do you know the <Link className="aboutLinks" to="/your-plastic-print">impact </Link>of what you consume?
                </p>
              </div>
            </article>

            <article className="art2">
              <div className="who-text-container">
                <h2>Who</h2>
                <p>
                  Refill is for everyone who is in Paris, whether you're a
                  local, a tourist on holiday, a jogger, or a family out for the
                  afternoon.
                  <br />
                </p>
                <p>
                  <br /> <br/>
                  If we missed a spot you can tell us 
                  <Link className="aboutLinks" to="/contribute"> here</Link>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
