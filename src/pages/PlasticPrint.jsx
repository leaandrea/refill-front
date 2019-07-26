import NavMain from "../components/NavMain";
import Footer from "../components/Footer";
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class PlasticPrint extends Component {
  state = {
    inputValue: -2,
    unrecycledValue: 30,
    petrolValue: 100,
    CO2Value: 129,
    charbonValue: 80,
    timeValue: 1000,
    gazValue: 42,
  };
  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
    console.log("STATE", this.state.inputValue);
  };
  render() {
    return (
      <>
        <NavMain history={this.props.history} />
        <div className="pageContainer">


          <div className="firstContainer">


            <div className="featureContainer">
              <h3 className="mainText">
                French people are among the largest consumers of plastic bottles in the world.
           In Paris, less than one in three plastic bottle is collected and recycled! The rest is either polluting the ground or the oceans.
              </h3>
            </div>

            <div className="plasticPrintInput">
              <label className="questionLabel" htmlFor="inputBottles">How many plastic bottles do you buy each week? We'll tell you about your plastic bottle footprint.</label>
              <input
                name="bottles"
                type="number"
                defaultValue=""
                className="input"
                onChange={this.handleChange}
              />
            </div>


            {/* <hr className="hrBorder" /> */}

          </div>



          <div className="secondContainer">


            {this.state.inputValue < 3 && this.state.inputValue >= 1 ? (
              <div>



                <div className="response">
                  <h4>
                    Your footprint corresponds to: </h4>
                </div>
                <div className="imagesContainer">
                  <div className="prompt1"> <div className="promptsContainers1">  <img className="responseImg1" src="./images/poubelle1.png" alt="drop" /><h4>{this.state.unrecycledValue * this.state.inputValue} grams of unrecycled plastic  </h4> </div>
                    <div className="promptsContainers2">   <img className="responseImg2" src="./images/usine.png" alt="drop2" /> <h4>{this.state.petrolValue * this.state.inputValue} mL of used petrol</h4></div> </div>
                  <div className="prompt2">    <div className="promptsContainers3">  <img className="responseImg3" src="./images/co2.png" alt="drop3" /><h4>{this.state.CO2Value * this.state.inputValue} grams of CO2 emissions</h4> </div>
                    <div className="promptsContainers4"> <img className="responseImg4" src="./images/charbon.png" alt="drop4" /> <h4>{this.state.charbonValue * this.state.inputValue} grams of coal produced</h4></div> </div>
                  <div className="prompt3">     <div className="promptsContainers5"> <img className="responseImg5" src="./images/earth.png" alt="drop5" /><h4>{this.state.timeValue} years of plastic on earth</h4></div>
                    <div className="promptsContainers6"> <img className="responseImg6" src="./images/gaz.png" alt="drop6" /><h4>{this.state.gazValue * this.state.inputValue} liters of gaz spent</h4></div>  </div>
                </div>
                <h4 className="responseText"> It's good! Your use of water bottles is lower than that of the average French person. But we know you can do even better! Do you know all <Link className="linksPlasticFeature" to="/main-map"> Paris's fabulous spots to refill your water bottle?</Link> They're great, and free. Try them! </h4>
              </div>
            ) : (
                <></>
              )}
            {this.state.inputValue === "3" ? (
              <div>
                <div className="response">
                  <h4> Your footprint corresponds to: </h4>
                </div>
                <div className="imagesContainer">
                  <div className="promptsContainers1">  <img className="responseImg1" src="./images/poubelle1.png" alt="drop" /><h4>{this.state.unrecycledValue * this.state.inputValue} grams of unrecycled plastic  </h4> </div>
                  <div className="promptsContainers2">   <img className="responseImg2" src="./images/usine.png" alt="drop2" /> <h4>{this.state.petrolValue * this.state.inputValue} mL of used petrol</h4></div>
                  <div className="promptsContainers3">  <img className="responseImg3" src="./images/co2.png" alt="drop3" /><h4>{this.state.CO2Value * this.state.inputValue} grams of CO2 emissions</h4> </div>
                  <div className="promptsContainers4"> <img className="responseImg4" src="./images/charbon.png" alt="drop4" /> <h4>{this.state.charbonValue * this.state.inputValue} grams of coal produced</h4></div>
                  <div className="promptsContainers5"> <img className="responseImg5" src="./images/earth.png" alt="drop5" /><h4>{this.state.timeValue} years of plastic on earth</h4></div>
                  <div className="promptsContainers6"> <img className="responseImg6" src="./images/gaz.png" alt="drop6" /><h4>{this.state.gazValue * this.state.inputValue} liters of gaz spent</h4></div></div>
                <h4 className="responseText"> You're using the same amount of water bottles than the average French person. And it's not really great. But we know you can do better! Do you know all <Link className="linksPlasticFeature" to="/main-map">Paris's fabulous spots to refill your water bottle?</Link> Try them!</h4>
              </div>
            ) : (
                <></>
              )}
            {this.state.inputValue > 3 ? (
              <div>

                <div className="response">
                  <h4>Your footprint corresponds to: </h4>
                </div>
                <div className="imagesContainer">
                  <div className="promptsContainers1">  <img className="responseImg1" src="./images/poubelle1.png" alt="drop" /><h4>{this.state.unrecycledValue * this.state.inputValue} grams of unrecycled plastic </h4> </div>
                  <div className="promptsContainers2">   <img className="responseImg2" src="./images/usine.png" alt="drop2" /> <h4>{this.state.petrolValue * this.state.inputValue} mL of used petrol </h4></div>
                  <div className="promptsContainers3">  <img className="responseImg3" src="./images/co2.png" alt="drop3" /><h4>{this.state.CO2Value * this.state.inputValue} grams of CO2 emissions </h4> </div>
                  <div className="promptsContainers4"> <img className="responseImg4" src="./images/charbon.png" alt="drop4" /> <h4>{this.state.charbonValue * this.state.inputValue} grams of coal produced</h4></div>
                  <div className="promptsContainers5"> <img className="responseImg5" src="./images/earth.png" alt="drop5" /><h4>{this.state.timeValue} years of plastic on earth </h4></div>
                  <div className="promptsContainers6"> <img className="responseImg6" src="./images/gaz.png" alt="drop6" /><h4>{this.state.gazValue * this.state.inputValue} liters of gaz spent</h4>
                  </div>
                </div>
                <h4 className="responseText">Your use of water bottles is larger than that of the average French person. And it's really a lot! Let's do better, here are all <Link className="linksPlasticFeature" to="/main-map">Paris's fabulous spots to refill your water bottle to help you.</Link> There's even free sparkling water just for you!</h4>
              </div>
            ) : (
                <></>
              )}
            {this.state.inputValue === "0" ? (
              <div>
                <div className="response">
                  <h2> Congratulations! You have no ecological plastic bottles footprint! It's really great! Do you know all
                    <Link className="linksPlasticFeature" to="/main-map"> Paris's fabulous water sources ?</Link>
                    <img className="smilingDrop" src="./images/smilingdrop.png" alt="smilingdrop" />  </h2>
                </div>
              </div>
            ) : (
                <></>
              )}
            {this.state.inputValue === "" ? (
              <></>
            ) : (
                <></>
              )}
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
