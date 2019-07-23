import NavPages from "../components/NavMain";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import APIHandler from ".././ApiHandler/apiHandler";

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
        <hr className="top-home-line" />
        <NavPages />
        <table>
          <thead>
            <tr>
              <th>Address</th>
              <th>Fountain's type</th>
            </tr>
          </thead>

          {this.state.fountains.map((oneFountain, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <td>{oneFountain.address}</td>
                  <td>{oneFountain.type}</td>
                </tr>

                <Link to={`/edit-fountain/${oneFountain._id}`}>
                  <button className="editButton">
                    <FontAwesomeIcon icon="edit" />
                  </button>
                </Link>

                <Link to="/create-fountain">
                  <button className="createButton">
                    <FontAwesomeIcon icon="plus" />
                  </button>
                </Link>

                <button
                  className="deleteButton"
                  onClick={() => this.deleteFountain(oneFountain._id)}
                >
                  <FontAwesomeIcon icon="trash" />
                </button>
              </tbody>
            );
          })}
        </table>
      </>
    );
  }
}
