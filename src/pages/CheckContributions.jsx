import NavPages from "../components/NavPages";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import APIHandler from "../ApiHandler/apiHandler";

const apiHandler = new APIHandler();
export default class Foutains extends Component {
  state = {
    fountains: []
  };

  componentDidMount() {
    apiHandler
      .get(`/api/fontaines`)
      .then(fontaines => {
        console.log("allfount", fontaines);

        let unverifiedContributions = fontaines.data.filter(
          fontaine => fontaine.verified === false
        );
        this.setState({ fountains: unverifiedContributions });
      })
      .catch(apiErr => console.error(apiErr));
  }

  deleteFountain = id => {
    apiHandler
      .destroy(`/api/fontaines/`, id)
      .then(dbRes => {
        const removedId = dbRes.data._id;
        const tmp = [...this.state.fountains];
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
    console.log("ici");

    console.log(this.state.fountains);

    return (
      <>
        <hr className="top-home-line" />
        <NavPages />
        <h1>Check Contributions</h1>
        <div className="table-container">
          <table className="contributions-table">
            <thead className="table-head">
              <tr>
                <th>Address</th>
                <th>Fountain's type</th>
                <th>Verified</th>
                <th>Gazeuse?</th>
                <th colSpan={3}>CRUD</th>
              </tr>
            </thead>

            {this.state.fountains.map((oneFountain, i) => {
              return (
                <tbody key={i}>
                  <tr>
                    <td>{oneFountain.address}</td>
                    <td>{oneFountain.type}</td>
                    <td>{oneFountain.verified}</td>
                    <td>{oneFountain.gazeuse}</td>
                    <td>
                      <Link
                        to={{
                          pathname: `/edit-fountain/${oneFountain._id}`,
                          state: {
                            address: oneFountain.address,
                            type: oneFountain.type,
                            verified: oneFountain.verified
                          }
                        }}
                      >
                        <button className="editButton">
                          <FontAwesomeIcon icon="edit" />
                        </button>
                      </Link>
                    </td>

                    <td>
                      <button
                        className="deleteButton"
                        onClick={() => this.deleteFountain(oneFountain._id)}
                      >
                        <FontAwesomeIcon icon="trash" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>

          <a href="/fountains">Go to admin board</a>
        </div>
      </>
    );
  }
}
