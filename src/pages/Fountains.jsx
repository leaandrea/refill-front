import NavMain from "../components/NavMain";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import APIHandler from ".././ApiHandler/apiHandler";
import Footer from "../components/Footer";
import EditForm from "../components/forms/EditForm";
import { AuthConsumer } from "../auth/Guard";
import CreateForm from "../components/forms/CreateForm";

const apiHandler = new APIHandler();

export default class Foutains extends Component {
  state = {
    fountains: [],
    offset: 0,
    ressourcesPerPage: 40,
    nbRessources: null,
    isDisplayEditForm: false,
    isDisplayCreateForm: false
  };

  componentDidMount() {
    this.getFountains();
  }
  getFountains = () => {
    apiHandler
      .get(`/api/fontaines`)
      .then(dbRes => {
        this.setState({
          nbRessources: dbRes.data.length,
          fountains: dbRes.data.slice(0, this.state.ressourcesPerPage)
        });
        // this.setState({ fountains: dbRes.data.slice(0, 100) });
      })
      .catch(apiErr => console.error(apiErr));
  };

  getFontainsByOffset = () => {
    apiHandler
      .get(`/api/fontaines?offset=${this.state.offset}`)
      .then(dbRes => {
        this.setState({ fountains: dbRes.data });
      })
      .catch(apiErr => console.error(apiErr));
  };

  deleteFountain = id => {
    apiHandler
      .destroy(`/api/fontaines/`, id)
      .then(dbRes => {
        const removedId = dbRes.data._id; // get the removed id
        const tmp = [...this.state.fountains]; // make a copy of the users array
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

  handleClick = direction => {
    const setOffset = (count, clbk) => {
      this.setState({ offset: count }, clbk);
    };

    if (
      direction === "prev" &&
      this.state.offset - this.state.ressourcesPerPage >= 0
    ) {
      setOffset(this.state.offset - this.state.ressourcesPerPage, () => {
        // console.log("yayyyy prev");
        // console.log(this.state.offset);
        this.getFontainsByOffset();
      });
    } else if (
      direction === "next" &&
      this.state.offset + this.state.ressourcesPerPage <=
        this.state.nbRessources
    ) {
      setOffset(this.state.offset + this.state.ressourcesPerPage, () => {
        // console.log("yayyyy next");
        // console.log(this.state.offset);
        this.getFontainsByOffset();
      });
    }
  };
  displayEditForm = i => {
    this.setState({ isDisplayEditForm: true, selectedFountain: i }, () => {
      console.log("bad index ?", this.state.selectedFountain);
      console.log(this.state.fountains[this.state.selectedFountain]);
    });
  };
  hideEditForm = () => {
    console.log("hide");
    this.setState({ isDisplayEditForm: false });
  };
  displayCreateForm = i => {
    this.setState({ isDisplayCreateForm: true, selectedFountain: i }, () => {});
  };
  hideCreateForm = () => {
    this.setState({ isDisplayCreateForm: false });
  };

  render() {
    console.log(this.props);
    // const { fountains } = this.state;
    return (
      <>
        <AuthConsumer>
          {({ loginStatus, user }) => (
            <>
              <hr className="top-home-line" />
              <div>
                <NavMain
                  style={{ color: "black" }}
                  history={this.props.history}
                />
                <h2 className="title-admin-board">
                  Hey{" "}
                  <span className="username">
                    {user &&
                      user.username.charAt(0).toUpperCase() +
                        user.username.slice(1)}
                  </span>{" "}
                  ! Welcome to the admin board
                </h2>

                <div className="pag-buttons-container">
                  {/* <button onClick={this.handleClick}>1</button>
        <button onClick={this.handleClick2}>2</button> */}
                  <button onClick={() => this.handleClick("prev")}>Prev</button>
                  <button onClick={() => this.handleClick("next")}>Next</button>
                </div>
                <div className="table-container">
                  <div className="table-content">
                    <div className="admin-headline">
                      <a
                        className="go-checkboard-link"
                        href="/check-contributions"
                      >
                        Go to check board
                      </a>
                      <h3 className="create-fountain-text">
                        Create a fountain
                        <button
                          onClick={() => this.displayCreateForm()}
                          className="create-button"
                        >
                          <FontAwesomeIcon icon="plus" />
                        </button>
                      </h3>
                    </div>

                    <table className="table">
                      <thead className="table-head">
                        <tr>
                          <th className="thead-address">Address</th>
                          <th> Fountain's type</th>
                          <th>Verified</th>
                          <th>Gazeuse?</th>
                          <th>En service ?</th>
                          <th colSpan="2">CRUD</th>
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
                                    className="editButton"
                                  >
                                    <FontAwesomeIcon
                                      icon="edit"
                                      className="btn-crud"
                                    />
                                  </button>
                                  {/* </Link> */}
                                </td>

                                <td>
                                  <button
                                    className="deleteButton"
                                    onClick={() =>
                                      this.deleteFountain(oneFountain._id)
                                    }
                                  >
                                    <FontAwesomeIcon
                                      icon="trash"
                                      className="btn-crud"
                                    />
                                  </button>
                                </td>
                              </tr>
                            )}
                          </tbody>
                        );
                      })}
                    </table>
                  </div>
                </div>

                <CreateForm
                  isDisplayCreateForm={this.state.isDisplayCreateForm}
                  hideCreateForm={this.hideCreateForm}
                />

                <EditForm
                  isDisplayEditForm={this.state.isDisplayEditForm}
                  fountain={this.state.fountains[this.state.selectedFountain]}
                  hideEditForm={this.hideEditForm}
                  getUpdateFountain={this.getFountains}
                />
              </div>
              <Footer />
            </>
          )}
        </AuthConsumer>
      </>
    );
  }
}
