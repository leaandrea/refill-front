import React from "react";
// import NavMain from "../components/NavMain";

export default function AboutSection() {
  return (
    <>
      <section className="about">
        {/* <NavMain /> */}

        <h3 className="about-title">
          Plastic bottles pollutes and kill animals. We can avoid this thanks to
          many free spots in Paris that allows you to refill your water bottle.
        </h3>

        <div className="articles-container">
          <article className="art1">
            <p>
              De l’eau pétillante gratuite et en libre-service, ça vous tente ?
              Une solution utile mais également écologique car il s'agit là
              d'une bonne alternative à la bouteille plastique, jetée une fois
              finie. En la matière, la France fait partie des plus gros
              consommateurs mondiaux.
            </p>
          </article>

          <article className="art2">
            <div className="icone-fish-container">
              <img src="../../../images/deadfish.png" alt="dead" />
            </div>
            <div className="fish-text-container">
              <p>
                Plastic bottles are the most common waste found in seas and
                oceans
              </p>
            </div>
          </article>

          <article className="art3">
            <p>
              L'eau en bouteille coûte 400 fois plus cher que l'eau du robinet
            </p>
          </article>
          <article className="art4">
            <p>
              En France 150 gobelets sont jetés par seconde. 80% des déchets
              retrouvés en mer sont jetés sur terre
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
