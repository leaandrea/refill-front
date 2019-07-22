import React, { Component } from 'react'
import axios from "axios"

import APIHandler from "../../ApiHandler/apiHandlerMap"

const apiHandler = new APIHandler();

export default class CreateForm extends Component {

  state = {
    create: {}
  }


  handleChange = evt => {
    const create = { ...this.state.create };
    create[evt.target.name] = evt.target.value;
    this.setState({ create }, () => {
      console.log(this.state)
    })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    apiHandler.post(`/api/fontaines`, this.state.create)
      .then(serverRes => console.log(serverRes)).catch(serverErr => console.log(serverErr))
  }

  // addFountain = infos => {
  //   apiHandler
  //     .post(`/create-fountain`, infos)
  //     .then(dbRes => {
  //       const tmp = [...this.state.users]; // create a copy of state.users array
  //       tmp.push(dbRes.data); // push the new user
  //       this.setState({ fountains: tmp }, () => {
  //         // update the state
  //         // access the state once it's updated in that callback
  //         console.log(this.state.fountains);
  //       });
  //     })
  //     .catch(dbErr => {
  //       console.log(dbErr);
  //     });
  // };



  // lat: Number,
  // lng: Number,
  // potable: { type: Number, enum: [0, 1] },
  // address: String,
  // en_service: Boolean,
  // gazeuse: Boolean,
  // verified: Boolean,
  // type: { type: String, enum: ["fontaine", "commerce"] }



  render() {
    return (
      <div>
        <form
          id="contribute_form"
          className="contribute-form"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          {/* <label>I am a :</label> */}


          <label>Is-it sparkling water ?</label>
          <select name="gazeuse">
            <option value="false">Plate</option>
            <option value="true">Sparkling</option>
          </select>


          <label htmlFor="address">Address</label>
          <input id="address" name="address" type="address" />

          <label htmlFor="latitude">Latitude</label>

          <input id="latitude" name="lat" type="text" />


          <label htmlFor="longitude">Longitude</label>
          <input id="longitude" name="lng" type="text" />

          <label>En service ?</label>
          <select name="en_service">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label>Type of source ?</label>
          <select name="type">
            <option value="commerce">Commerce</option>
            <option value="fontaine">Fontaine</option>
          </select>

          <button>Create</button>
        </form>
      </div>
    )
  }
}