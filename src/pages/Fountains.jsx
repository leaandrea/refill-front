import NavPages from "../components/NavPages";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import APIHandler from ".././ApiHandler/apiHandler";
import Footer from "../components/Footer";

const apiHandler = new APIHandler();

export default class Foutains extends Component {
  state = {
    fountains: [],
    offset: 0,
    ressourcesPerPage: 40,
    nbRessources: null
  };

  componentDidMount() {
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
  }

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

  handleClick = direction => {
    const setOffset = (count, clbk) => {
      this.setState({ offset: count }, clbk);
    };

    if (
      direction === "prev" &&
      this.state.offset - this.state.ressourcesPerPage >= 0
    ) {
      setOffset(this.state.offset - this.state.ressourcesPerPage, () => {
        console.log("yayyyy prev");
        console.log(this.state.offset);
        this.getFontainsByOffset();
      });
    } else if (
      direction === "next" &&
      this.state.offset + this.state.ressourcesPerPage <=
        this.state.nbRessources
    ) {
      setOffset(this.state.offset + this.state.ressourcesPerPage, () => {
        console.log("yayyyy next");
        console.log(this.state.offset);
        this.getFontainsByOffset();
      });
    }
    // let content = this.state.fountains.slice(0, 40).map((fountain, i) => {
    //   console.log(fountain);

    //   return (
    //     <ul key={i}>
    //       <li>{fountain.verified === true}</li>
    //     </ul>
    //   );
    // });
    // this.setState({ fountains: content });
  };
  // handleClick2 = () => {
  //   this.state.fountains.slice(40, 42).map((fountain, i) => {
  //     console.log("TWOO", fountain);

  //     return (
  //       <ul>
  //         <li key={i}>{fountain.verified === true}</li>
  //       </ul>
  //     );
  //   });
  // };

  render() {
    console.log(this.props);
    // const { fountains } = this.state;
    return (
      <>
        <hr className="top-home-line" />
        <NavPages />
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
                            type: oneFountain.type
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
        </div>

        <div className="pag-buttons-container">
          {/* <button onClick={this.handleClick}>1</button>
          <button onClick={this.handleClick2}>2</button> */}
          <button onClick={() => this.handleClick("prev")}>prev</button>
          <button onClick={() => this.handleClick("next")}>next</button>
        </div>
        <Footer />
      </>
    );
  }
}
