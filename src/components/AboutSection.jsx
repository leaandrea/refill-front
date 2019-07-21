import React from "react";
import NavMain from "../components/NavMain";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <>
      <section className="about">
        <div className="inner-border">
          <NavMain />
          <h3 className="about-title">
            With Refill, you can easily help the environement and save money !
          </h3>

          <div className="articles-container">
            <article className="art3">
              <div className="who-text-container">
                <h2>How</h2>
                <p>
                  Stop buying plastic bottles. It costs 400 times more than tap
                  water. Use our map to find free spots near you. There are
                  still water and sparkling water fountains. Some stores are
                  also willing to offer you free water. Don't forget to take
                  your reusable water bottle! Want to know more about{" "}
                  <Link to="/quality-info">quality water </Link>?
                </p>
              </div>
            </article>
            <article className="art1">
              <div className="why-text-container">
                <h2>Why</h2>
                <p>
                  Plastic bottles pollutes and kill animals. 80% of sea and
                  ocean wates are thrown on earth. We can, in an easy way,
                  reduce plastic waste so let's help the planet while staying
                  hydrated.
                </p>
              </div>
            </article>

            <article className="art2">
              <div className="who-text-container">
                <h2>Who</h2>
                <p>
                  Everyone who's in Paris! You're a tourit in holidays, a
                  jogger, a family out for an afternoon. If we missed a spot you
                  can tell us <Link to="/contribute">here</Link>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
