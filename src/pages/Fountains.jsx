import NavPages from "../components/NavPages";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import APIHandler from ".././ApiHandler/apiHandler";
import Footer from "../components/Footer";
import { AuthConsumer } from "../auth/Guard";

const apiHandler = new APIHandler();

export default class Foutains extends Component {
  state = {
    fountains: []
  };

  componentDidMount() {
    apiHandler
      .get(`/api/fontaines`)
      .then(dbRes => {
        this.setState({ fountains: dbRes.data.slice(0, 40) });
      })
      .catch(apiErr => console.error(apiErr));
  }

  deleteFountain = id => {
    apiHandler
      .destroy(`/api/fontaines/`, id)
      .then(dbRes => {
        const removedId = dbRes.data._id; // get the removed id
        const tmp = [...this.state.fountains]; // make a copy of the users array
        //
        const remainingFountains = tmp.filter(
          fountain => fountain._id !== removedId
        );
        this.setState({ fountains: remainingFountains });

        console.log(dbRes);
      })
      .catch(dbErr => {
        console.log(dbErr);
      });
  };

  render() {
    console.log(this.props);
    // const { fountains } = this.state;
    return (
      <>
        <AuthConsumer>
          {({ loginStatus }) => (
            <>
              <hr className="top-home-line" />
              <NavPages history={this.props.history} />
              <div className="table-container">
                <table className="contributions-table ">
                  <thead>
                    <tr>
                      <th className="thead-address">Address</th>
                      <th>Fountain's type</th>
                      <th colSpan="3">CRUD</th>
                    </tr>
                  </thead>

                  {this.state.fountains.map((oneFountain, i) => {
                    return (
                      <tbody key={i}>
                        <tr>
                          <td>{oneFountain.address}</td>
                          <td>{oneFountain.type}</td>

                          <td>
                            <Link
                              to={{
                                pathname: `/edit-fountain/${oneFountain._id}`,
                                state: {
                                  address: oneFountain.address,
                                  type: oneFountain.type,
                                  lat: oneFountain.lat,
                                  lng: oneFountain.lng
                                }
                              }}
                            >
                              <button className="editButton">
                                <FontAwesomeIcon icon="edit" />
                              </button>
                            </Link>
                          </td>

                          <td>
                            <Link to="/create-fountain">
                              <button className="createButton">
                                <FontAwesomeIcon icon="plus" />
                              </button>
                            </Link>
                          </td>

                          <td>
                            <button
                              className="deleteButton"
                              onClick={() =>
                                this.deleteFountain(oneFountain._id)
                              }
                            >
                              <FontAwesomeIcon icon="trash" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
              <Footer />
            </>
          )}
        </AuthConsumer>
      </>
    );
  }
}
