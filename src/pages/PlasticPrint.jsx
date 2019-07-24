import NavPages from "../components/NavPages";
import Footer from "../components/Footer";
import React, { Component } from 'react'


export default class PlasticPrint extends Component {

  state = {
    inputValue: 0,
    unrecycledValue: 30,
    petrolValue: 100,
    CO2Value: 129,
    charbonValue: 80,
    timeValue: 1000,
    gazValue: 42,
  };

  handleChange = evt => {
    this.setState({ inputValue: Number(evt.target.value) });
    console.log("STATE", typeof this.state.inputValue);

  };




  render() {
    return (
      <>
        <NavPages />

        <div className="pageContainer">

          <div className="firstContainer">

            <div className="featureContainer">
              <h3 className="mainText">

                French people are ones of the biggest consumers of  plastic water bottles in the world.
           In Paris, less than one in three plastic bottle is collected and recycled. The rest is either polluting the ground or the ocean.
              </h3>

            </div>



            <div className="plasticPrintInput">
              <label className="questionLabel" htmlFor="inputBottles">Tell us how many plastic bottles you buy per week, we'll tell you about your "plastic bottle print".</label>
              <input

                name="bottles"
                type="number"
                defaultValue=""
                className="input"
                onChange={this.handleChange}
              />
            </div>

            <hr className="hrBorder" />



          </div>


          <div className="secondContainer">

            {this.state.inputValue < 3 && this.state.inputValue > 0 ? (


              <div className="bigPromptsContainer">


                <div className="response">
                  <h4>  Your water consumption is lower to the French average. But hey, it's not 0, and there's always something you can do. <br />
                    Because it still corresponds to </h4>
                </div>
                <div className="imagesContainer">
                  <div className="promptsContainers1">  <img className="responseImg1" src="./images/dot1.png" alt="drop" /><h4>{this.state.unrecycledValue * this.state.inputValue} grams of unrecycled plastic  </h4> </div>
                  <div className="promptsContainers2">   <img className="responseImg2" src="./images/dot1.png" alt="drop2" /> <h4>{this.state.petrolValue * this.state.inputValue} mL of used petrol</h4></div>
                  <div className="promptsContainers3">  <img className="responseImg3" src="./images/dot1.png" alt="drop3" /><h4>{this.state.CO2Value * this.state.inputValue} grams of CO2 emissions</h4> </div>
                  <div className="promptsContainers4"> <img className="responseImg4" src="./images/dot1.png" alt="drop4" /> <h4>{this.state.charbonValue * this.state.inputValue} grams of coal produced</h4></div>
                  <div className="promptsContainers5"> <img className="responseImg5" src="./images/dot1.png" alt="drop5" /><h4>{this.state.timeValue} years of plastic on earth</h4></div>
                  <div className="promptsContainers6"> <img className="responseImg6" src="./images/dot1.png" alt="drop6" /><h4>{this.state.gazValue * this.state.inputValue} liters of gaz spent</h4></div></div>
              </div>
            ) : (
                <></>
              )}


            {this.state.inputValue === 3 ? (

              <div>
                <div className="response">
                  <h4>  Your water consumption is equivalent to the French average. <br />
                    The thing is, it is sill way too much. It corresponds to </h4>
                </div>

                <div className="imagesContainer">
                  <div className="promptsContainers1">  <img className="responseImg1" src="./images/dot1.png" alt="drop" /><h4>{this.state.unrecycledValue * this.state.inputValue} grams of unrecycled plastic  </h4> </div>
                  <div className="promptsContainers2">   <img className="responseImg2" src="./images/dot1.png" alt="drop2" /> <h4>{this.state.petrolValue * this.state.inputValue} mL of used petrol</h4></div>
                  <div className="promptsContainers3">  <img className="responseImg3" src="./images/dot1.png" alt="drop3" /><h4>{this.state.CO2Value * this.state.inputValue} grams of CO2 emissions</h4> </div>
                  <div className="promptsContainers4"> <img className="responseImg4" src="./images/dot1.png" alt="drop4" /> <h4>{this.state.charbonValue * this.state.inputValue} grams of coal produced</h4></div>
                  <div className="promptsContainers5"> <img className="responseImg5" src="./images/dot1.png" alt="drop5" /><h4>{this.state.timeValue} years of plastic on earth</h4></div>
                  <div className="promptsContainers6"> <img className="responseImg6" src="./images/dot1.png" alt="drop6" /><h4>{this.state.gazValue * this.state.inputValue} liters of gaz spent</h4></div></div>
              </div>
            ) : (
                <></>
              )}

            {this.state.inputValue > 3 ? (

              < div >
                <div className="response">
                  <h4>Your water consumption is greater than the French average. <br />
                    It's a lot. It correspond to </h4>
                </div>
                <div className="imagesContainer">
                  <div className="promptsContainers1">  <img className="responseImg1" src="./images/dot1.png" alt="drop" /><h4>{this.state.unrecycledValue * this.state.inputValue} grams of unrecycled plastic </h4> </div>
                  <div className="promptsContainers2">   <img className="responseImg2" src="./images/dot1.png" alt="drop2" /> <h4>{this.state.petrolValue * this.state.inputValue} mL of used petrol </h4></div>
                  <div className="promptsContainers3">  <img className="responseImg3" src="./images/dot1.png" alt="drop3" /><h4>{this.state.CO2Value * this.state.inputValue} grams of CO2 emissions </h4> </div>
                  <div className="promptsContainers4"> <img className="responseImg4" src="./images/dot1.png" alt="drop4" /> <h4>{this.state.charbonValue * this.state.inputValue} grams of coal produced</h4></div>
                  <div className="promptsContainers5"> <img className="responseImg5" src="./images/dot1.png" alt="drop5" /><h4>{this.state.timeValue} years of plastic on earth </h4></div>
                  <div className="promptsContainers6"> <img className="responseImg6" src="./images/dot1.png" alt="drop6" /><h4>{this.state.gazValue * this.state.inputValue} liters of gaz spent</h4></div>
                </div>
              </div>
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
