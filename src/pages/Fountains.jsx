import NavMain from "../components/NavMain";
import axios from "axios";
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import APIHandler from ".././ApiHandler/apiHandlerMap"

const apiHandler = new APIHandler();



export default class Foutains extends Component {

  state =
    {
      fountains: [],
    }

  // IN PROCESS
  // addFountain = infos => {
  //   axios
  //     .post("http://localhost:9999/api/fontaines", infos)
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


  componentDidMount() {

    apiHandler
      .get(`/api/fontaines`)
      .then(dbRes => {
        this.setState({ fountains: dbRes.data.slice(0, 2) });
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
        const remainingFountains = tmp.filter(fountain => fountain._id !== removedId);
        this.setState({ fountains: remainingFountains });

        console.log(dbRes);
      })
      .catch(dbErr => {
        console.log(dbErr);
      });
  };




  render() {
    console.log(this.props)
    // const { fountains } = this.state;
    return (
      <div>



        <hr className="top-home-line" />
        <NavMain />
        <table>
          <tbody>
            <tr>
              <th>Address</th>
              <th>Fountain's type</th>
            </tr>
          </tbody>
        </table>
        {this.state.fountains.map((oneFountain, i) => {
          return (

            <table key={i}>
              <tbody>
                <tr>

                  <td>{oneFountain.address}</td>
                  <td>{oneFountain.type}</td>


                </tr>
              </tbody>

              <Link to={`/edit-fountain/${oneFountain._id}`}> <button className="editButton">
                <FontAwesomeIcon icon="edit" /> </button>
              </Link>
              <Link to='/create-fountain'> <button className="createButton">
                <FontAwesomeIcon icon="plus" /> </button>
              </Link>

              <button
                className="deleteButton"
                onClick={() => this.deleteFountain(oneFountain._id)}
              >  <FontAwesomeIcon icon="trash" />

              </button>




            </table>



          );
        })}

      </div>
    )
  }
}










// import React from 'react';
// import { render } from 'react-dom';
// import Pagination from 'react-paginating';

// const fruits = [
//   ['apple', 'orange', "orange", "orange", "orange", "orange", "orange"],
//   ['banana', 'avocado'],
//   ['coconut', 'blueberry'],
//   ['payaya', 'peach'],
//   ['pear', 'plum']
// ];


// const limit = 40;
// const pageCount = 3;
// const total = fruits.length * limit;

// export default class Fountains extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       currentPage: 1
//     };
//   }

//   handlePageChange = (page, e) => {
//     this.setState({
//       currentPage: page
//     });
//   };

//   render() {
//     const { currentPage } = this.state;
//     return (
//       <div>
//         <ul>
//           {fruits[currentPage - 1].map(item => <li key={item}>{item}</li>)}
//         </ul>
//         <Pagination
//           total={total}
//           limit={limit}
//           pageCount={pageCount}
//           currentPage={currentPage}
//         >
//           {({
//             pages,
//             currentPage,
//             hasNextPage,
//             hasPreviousPage,
//             previousPage,
//             nextPage,
//             totalPages,
//             getPageItemProps
//           }) => (
//               <div>
//                 <button
//                   {...getPageItemProps({
//                     pageValue: 1,
//                     onPageChange: this.handlePageChange
//                   })}
//                 >
//                   first
//               </button>

//                 {hasPreviousPage && (
//                   <button
//                     {...getPageItemProps({
//                       pageValue: previousPage,
//                       onPageChange: this.handlePageChange
//                     })}
//                   >
//                     {'<'}
//                   </button>
//                 )}

//                 {pages.map(page => {
//                   let activePage = null;
//                   if (currentPage === page) {
//                     activePage = { backgroundColor: '#fdce09' };
//                   }
//                   return (
//                     <button
//                       {...getPageItemProps({
//                         pageValue: page,
//                         key: page,
//                         style: activePage,
//                         onPageChange: this.handlePageChange
//                       })}
//                     >
//                       {page}
//                     </button>
//                   );
//                 })}

//                 {hasNextPage && (
//                   <button
//                     {...getPageItemProps({
//                       pageValue: nextPage,
//                       onPageChange: this.handlePageChange
//                     })}
//                   >
//                     {'>'}
//                   </button>
//                 )}

//                 <button
//                   {...getPageItemProps({
//                     pageValue: totalPages,
//                     onPageChange: this.handlePageChange
//                   })}
//                 >
//                   last
//               </button>
//               </div>
//             )}
//         </Pagination>
//       </div>
//     );
//   }
// }

// render(<Fountains />, document.getElementById('root'));








