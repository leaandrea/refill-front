import NavPages from "../components/NavPages";
import Footer from "../components/Footer";


import React, { Component } from 'react'

export default class PlasticPrint extends Component {
  render() {
    return (
      <>
        <NavPages />
        <div className="pageContainer">

          <div className="mainContainer">
            <div className="featureContainer">
              <h3 className="mainText">


                France is one of the biggest consumers of plastic water bottles.
              In Paris, less than one in ten plastic bottles are collected and recycled. <br /> Take a minute to answer this questions, and turn your results into action. </h3>

            </div>
            <div className="titleFeatureContainer">
              <h2>How many bottles a week do you buy ?</h2>
            </div>
          </div>
        </div>
        <Footer />

      </>
    )
  }
}
