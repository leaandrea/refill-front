import React from "react";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";

export default function QualityInfos() {
  return (
    <>
      <NavMain
        state={{ color: "black" }}
        // history={props.history}
      />
      <h1>Quality Info</h1>
      <p>
        Tap water is naturally greener than bottled water: it produces no
        plastic waste and requires no transportation to get to the consumer. Its
        quality is also on par with, if not better, bottled water.
      </p>
      <p>
        De l'eau filtrée de qualité Mis au point par la NASA, le procédé
        d'osmose inverse est le plus efficace pour filtrer l'eau.  L'eau passe
        par trois filtres : - Le premier est un filtre à sédiments qui retient
        les particules et les matières en suspension - Le deuxième est un filtre
        à charbon actif qui élimine principalement le chlore - Le troisième est
        le filtre de l'osmose inverse. L'eau passe à travers une membrane
        semi-perméable et ultra fine, via des pores qui ont une taille comprise
        entre 0,1 et 1 nanomètre (1 nanomètre = 1 milliardième de mètre). Pour
        information : la taille d'un virus se situe entre 10 et 400 nanomètres,
        celle d'un cheveu est de 40 000 à 100 000 nanomètres. L'eau est ainsi
        débarrassée de près de 99 % de ses impuretés : molécules chimiques
        (bactéries, pesticides, herbicides, nitrates ...) mais aussi métaux
        lourds, (plomb, mercure), hormones, résidus médicamenteux... Parce que
        ces processus modifient l'angle électromagnétique de l'eau, on dit
        qu'elle est " déstructurée ".  La dynamisation va lui redonner le bon
        angle électromagnétique (104,45°). Marcel Violet, un ingénieur français,
        a mis au point un procédé de dynamisation de l'eau qui permet de la "
        revitaliser", et d'obtenir ainsi une qualité comparable à celle des
        sources de montagne ou des pluies d'orage.  Le système de dynamisation
        injecte dans l'eau des ondes de très haute fréquence par le biais
        d'électrodes d'argent. L'eau qui en résulte est d'une douceur
        incomparable.
      </p>

      <p>
        Le principe de base pour rendre potable l’eau des rivières consiste
        d’abord à clarifier l’eau par trois étapes successives, selon un procédé
        qui reproduit la filtration naturelle par le sol. Les phénomènes sont
        accélérés pour garantir les quantités nécessaires aux besoins des
        consommateurs. Vient ensuite un traitement de pointe aux ultraviolets
        qui permet d’éliminer complètement les dernières traces de virus et de
        bactéries. Pour les eaux souterraines, les usines d’Eau de Paris
        traitent notamment les pesticides, les bactéries, les parasites et la
        turbidité de l’eau grâce à un processus de décantation,
        d’ultrafiltration et de désinfection.
      </p>
      <Footer />
    </>
  );
}
