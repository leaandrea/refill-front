import NavMain from "../components/NavMain";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditForm from "../components/forms/EditForm";
import APIHandler from "../ApiHandler/apiHandler";
import Footer from "../components/Footer";

const apiHandler = new APIHandler();
export default class Foutains extends Component {
  state = {
    fountains: [],
    isDisplayEditForm: false
  };

  componentDidMount() {
    this.getFountains();
  }

  getFountains = () => {
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
  };

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

  displayEditForm = i => {
    this.setState({ isDisplayEditForm: true, selectedFountain: i }, () => {
      // console.log("bad index ?", this.state.selectedFountain);
      // console.log(this.state.fountains[this.state.selectedFountain]);
    });
  };
  hideEditForm = () => {
    console.log("hide");
    this.setState({ isDisplayEditForm: false });
  };

  render() {
    return (
      <>
        <hr className="top-home-line" />
        <NavMain color={"#2E4379"} history={this.props.history} />
        <h2 className="check-text">Check Contributions</h2>

        <div className="table-container">
          <div className="table-content">
            <a className="go-admin-board-link" href="/fountains">
              Go to admin board
            </a>
            <table className="table">
              <thead className="table-head">
                <tr>
                  <th className="thead-address">Address</th>
                  <th>Type of source</th>
                  <th>Verified</th>
                  <th>Sparkling water?</th>
                  <th>In use?</th>
                  <th colSpan={2}>CRUD</th>
                </tr>
              </thead>

              {this.state.fountains.map((oneFountain, i) => {
                return (
                  <tbody key={i}>
                    {oneFountain && (
                      <tr>
                        <td>{oneFountain.address}</td>
                        <td>{oneFountain.type}</td>
                        <td>
                          {oneFountain.verified !== undefined &&
                            oneFountain.verified.toString()}
                        </td>
                        <td>
                          {oneFountain.gazeuse !== undefined &&
                            oneFountain.gazeuse.toString()}
                        </td>
                        <td>
                          {oneFountain.en_service !== undefined &&
                            oneFountain.en_service.toString()}
                        </td>
                        <td>
                          {/* <Link
                        to={{
                          pathname: `/edit-fountain/${oneFountain._id}`,
                          state: {
                            address: oneFountain.address,
                            type: oneFountain.type,
                            verified: oneFountain.verified,
                            gazeuse: oneFountain.gazeuse,
                            en_service: oneFountain.en_service
                          }
                        }}
                      > */}
                          <button
                            onClick={() => this.displayEditForm(i)}
                            className="btn-crud"
                          >
                            <FontAwesomeIcon icon="edit" />
                          </button>
                          {/* </Link> */}
                        </td>

                        <td>
                          <button
                            className="btn-crud"
                            onClick={() => this.deleteFountain(oneFountain._id)}
                          >
                            <FontAwesomeIcon icon="trash" />
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                );
              })}
            </table>
          </div>
          <EditForm
            isDisplayEditForm={this.state.isDisplayEditForm}
            fountain={this.state.fountains[this.state.selectedFountain]}
            hideEditForm={this.hideEditForm}
            getUpdateFountain={this.getFountains}
          />
        </div>
        <Footer />
      </>
    );
  }
}
