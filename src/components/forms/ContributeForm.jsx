import React, { Component } from "react";
import APIHandler from "../../ApiHandler/apiHandler";
import Geocode from "react-geocode";
import NavMain from "../../components/NavMain";

Geocode.setApiKey(`${process.env.REACT_APP_API_KEY}`);

const apiHandler = new APIHandler();

export default class ContributeForm extends Component {
  state = {
    gazeuse: false,
    address: "3 rue Jules César",
    verified: false,
    potable: 1,
    lat: null,
    lng: null,
    en_service: true,
    type: "fontaine",
    name: "Coucou",
    noDbError: false,
    dbError: false
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  getLatLng(clbk) {
    Geocode.fromAddress(this.state.address).then(
      response => {
        this.setState({
          lat: response.results[0].geometry.location.lat,
          lng: response.results[0].geometry.location.lng
        });
        console.log(this.state);
        clbk();
      },
      error => {
        console.error(error);
      }
    );
  }

  addToDb = () => {
    console.log(this);
    const formData = new FormData();
    formData.append("gazeuse", this.state.gazeuse);
    formData.append("address", this.state.address);
    formData.append("verified", this.state.verified);
    formData.append("potable", this.state.potable);
    formData.append("lat", this.state.lat);
    formData.append("lng", this.state.lng);
    formData.append("en_service", this.state.en_service);
    formData.append("type", this.state.type);
    formData.append("name", this.state.name);
    apiHandler
      .post(`/api/fontaines`, this.state)
      .then(serverRes => {
        console.log(serverRes);
        this.setState({ dbError: false, noDbError: true });
        this.props.history.push("/contribute");
      })
      .catch(serverErr => {
        this.setState({ noDbError: false, dbError: true });
        console.log(`server error: ${serverErr}`);
      });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.getLatLng(this.addToDb);
  };

  render() {
    return (
      <>
        <NavMain color={"#2E4379"} />
        <div className="contribute-section">
          <div className="contribute-text">
            <h3>Help other Refill users find free water close to them!</h3>
            <p>
              You can use the form below to submit a new source of water that we
              might have missed.
            </p>
            <p>Feel free to submit a public fountain!</p>
            <p>
              If you own a restaurant or a business and you're willing to give
              away free water to Refill users, we will gladly add your company
              to our database.
            </p>
          </div>
          <form
            id="contribute_form"
            className="contribute-form"
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          >
            <label>I am</label>

            <select name="type">
              <option value="fontaine">An individual</option>
              <option value="commerce">A business owner</option>
            </select>
            {this.state.type === "commerce" ? (
              <>
                <label htmlFor="name">What's the name of the business?</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={this.state.name}
                />
              </>
            ) : (
              <></>
            )}
            <label>Type of water</label>
            <select name="gazeuse">
              <option value="false">Still</option>
              <option value="true">Sparkling</option>
            </select>

            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="address"
              defaultValue={this.state.address}
            />

            <button>Send</button>
          </form>

          {this.state.noDbError ? (
            <div>
              <p>Your source has been added to the database!</p>
            </div>
          ) : (
            ""
          )}
          {this.state.dbError ? (
            <div>
              <p>There was a problem adding your source. Please try again.</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
