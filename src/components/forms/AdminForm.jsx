import React, { Component } from 'react'
import axios from "axios"

export default class AdminForm extends Component {



  addFountain = infos => {
    axios
      .post(`${process.env.SITE_URL}/edit-fountain`, infos)
      .then(dbRes => {
        const tmp = [...this.state.users]; // create a copy of state.users array
        tmp.push(dbRes.data); // push the new user
        this.setState({ fountains: tmp }, () => {
          // update the state
          // access the state once it's updated in that callback
          console.log(this.state.fountains);
        });
      })
      .catch(dbErr => {
        console.log(dbErr);
      });
  };

  render() {
    return (
      <div>
        coucou
      </div>
    )
  }
}
