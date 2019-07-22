import React, { Component } from 'react'
import axios from "axios"

import APIHandler from "../../ApiHandler/apiHandlerMap"
const apiHandler = new APIHandler();

export default class EditForm extends Component {


  state = {
    edit: {}
  }


  handleChange = evt => {
    const edit = { ...this.state.edit };
    edit[evt.target.name] = evt.target.value;
    this.setState({ edit }, () => {
      console.log(this.state)
    })
  }



  handleSubmit = evt => {
    evt.preventDefault();
    apiHandler.update(`${process.env.REACT_APP_BACKEND_URL}/api/fontaines/${this.props.match.params.id}`, this.state.edit)
      .then(serverRes => console.log(serverRes)).catch(serverErr => console.log(serverErr))
  }



  // lat: Number,
  // lng: Number,
  // potable: { type: Number, enum: [0, 1] },
  // address: String,
  // en_service: Boolean,
  // gazeuse: Boolean,
  // verified: Boolean,
  // type: { type: String, enum: ["fontaine", "commerce"] }



  render() {
    console.log(this.state.edit)
    return (

      < div >
        <form
          id="contribute_form"
          className="contribute-form"
          onSubmit={this.handleSubmit}
          // onSubmit={() => this.deleteFountain(oneFountain._id)}
          onChange={this.handleChange}
        >
          {/* <label>I am a :</label> */}


          <label>Is-it sparkling water ?</label>
          <select name="gazeuse">
            <option value="false">Plate</option>
            <option value="true">Sparkling</option>
          </select>


          <label htmlFor="address">Address</label>
          <input id="address" name="address" type="text" />

          <label htmlFor="latitude">Latitude</label>

          <input id="latitude" name="lat" type="number" />


          <label htmlFor="longitude">Longitude</label>
          <input id="longitude" name="lng" type="number" />

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


          <button>edit</button>
        </form>
      </div >
    )
  }
}
