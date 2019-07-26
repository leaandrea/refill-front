import React from "react";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";

export default function QualityInfos() {
  return (
    <div className="gros-truc">
      <NavMain state={{ color: "black" }} />

      <div className="quality-container">
        <section className="quality-intro">
          <h1>Water Quality in Paris</h1>
          <p>
            Tap water is naturally greener than bottled water: it produces no
            plastic waste and requires no transportation to get to the consumer.
            Its quality is also on par with, if not better, bottled water. On
            this page, you'll find all the information you need on the water you
            can consume using Refill.
          </p>
        </section>
        <section>
          <h2>Public fountains in Paris</h2>
          <p>
            The free fountains you can find outdoors in Paris get their water
            from underground sources and rivers. The water then undergoes a
            treatment process in order to be made drinkable.
          </p>
          <p>
            River water is clarified three times during a process that mimicks
            natural underground filtration. The second step consists in a UV
            treatment that eliminates any remaining traces of viruses or
            bacteria.
          </p>
          <p>
            Underground water are treated for pesticides, bacteria, parasites
            and turbidity using a process of decantation, ultrafiltration and
            disinfection.
          </p>
        </section>
        <section>
          <h2>Sparkling water fountains</h2>
          <p>
            The city of Paris started implementing free sparkling water
            fountains in 2010. The water quality of these fountains is the same
            as still water fountains, with one extra step added to make the
            water sparkling.
          </p>
          <p>
            The water is carbonated directly inside the fountain. The fountain
            is plugged to the public water system, then an ice bank cools the
            water down to 12°C. Lastly, C02 in gas form is added to the cooled
            down water.
          </p>
        </section>
        <section>
          <h2>Reverse osmosis filtered water</h2>
          <p>
            Some businesses in Paris may offer free water that has undergone a
            reverse osmosis filtration process.
          </p>
          <p>
            This process was created by NASA and is one of the most efficient
            ways to filter water. The water undergoes two filters to get rid of
            particules and chlorine. It then goes through a third filter for
            reverse osmosis. This last ultrafine filter gets rid of 99% of
            impurities (pesticides, nitrates, bacteria, lead, mercury,
            hormones...) but it 'destructures' the water by changing its
            electromagnetic angle. The water has to be revitalized via injection
            of high frequency waves using silver electrodes. After this
            dynamization process, the water quality is similar to moutain water.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
