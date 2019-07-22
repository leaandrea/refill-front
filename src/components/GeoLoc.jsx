// import React from "react";

// const Btn = ({ handleClick, color, children }) => {
//   return (
//     <button
//       className="geoloc-btn"
//       style={{ background: color }}
//       onClick={handleClick}
//     >

//       {children}
//     </button>
//   );
// };

// export default Btn;

//  export function Btn() {
//    let geolocBtn = "Get my location";
//    console.log(this.props.coords)
//    return (

//      < div >
//        <Link
//          to={{
//            pathname: "/main-map",
//            state: {
//              initialLat: this.props.coords,
//              initialLng: this.props.coords
//            }
//          }}
//        >
//          <Btn className="geoloc-btn">
//            <div className="icon-cont">
//              <FontAwesomeIcon
//                icon={faDotCircle}
//                className="icon-dot-circle"
//              />
//            </div>
//            {geolocBtn}
//          </Btn>
//        </Link>
//      </div >
//    )
//  }

//  export default geolocated({
//    positionOptions: {
//      enableHighAccuracy: false
//    },
//   apiKey: `${process.env.REACT_APP_API_KEY}`,
//    userDecisionTimeout: 5000
//  })(GeoLocButton);

// import React, { Component } from "react";
// import { geolocated } from "react-geolocated";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDotCircle } from "@fortawesome/free-regular-svg-icons";

// class GeoLocBtn extends Component {
// state = {
//   geoloc: false
// }

// getGeoLoc = () => {
//   this.setState({ geoloc: true })
// }

// getContent = () => {
//   let geolocBtn = "Get my Location";
//   var content = (<button className="geoloc-btn" onClick={this.props.onClick}>{geolocBtn}
//     <div className="icon-cont">
//       <FontAwesomeIcon
//         icon={faDotCircle}
//         className="icon-dot-circle"
//       />
//     </div>
//   </button>)
//   if (this.props.geoState) {
//     content = 

//     (!this.props.isGeolocationAvailable ? (
//       <p>Your browser does not support Geolocation</p>
//     ) : !this.props.isGeolocationEnabled ? (
//       <p>Geolocation is not enabled</p>
//     ) : this.props.coords ? (
//       <>
//         < div >
//           <Link
//             to={{
//               pathname: "/main-map",
//               state: {
//                 initialLat: this.props.coords.latitude,
//                 initialLng: this.props.coords.longitude
//               }
//             }}
//           >
//             <button className="geoloc-btn">{geolocBtn}

//               <div className="icon-cont">
//                 <FontAwesomeIcon
//                   icon={faDotCircle}
//                   className="icon-dot-circle"
//                 />
//               </div>

//             </button>
//           </Link>
//         </div >

//       </>
//     ) : (
//             null
//           ))
//   }
//   return content
// }

// render() {
// return
// this.getContent()
// console.log(this.props);
// let geolocBtn = "Get my Location";

//   return( !this.props.isGeolocationAvailable? (
//     <p>Your browser does not support Geolocation</p>
//   ) : !this.props.isGeolocationEnabled ? (
//     <p>Geolocation is not enabled</p>
//   ) : this.props.coords ? (
//     <>
//       < div >
//         <Link
//           to={{
//             pathname: "/main-map",
//             state: {
//               initialLat: this.props.coords.latitude,
//               initialLng: this.props.coords.longitude
//             }
//           }}
//         >
//           <button className="geoloc-btn">{geolocBtn}

//             <div className="icon-cont">
//               <FontAwesomeIcon
//                 icon={faDotCircle}
//                 className="icon-dot-circle"
//               />
//             </div>

//           </button>
//         </Link>
//       </div >

//     </>
//   ) : (
//         null
//       );

// }

// export { GeoLocBtn };

// export default geolocated({
//   positionOptions: {
//     enableHighAccuracy: false
//   },
//   apiKey: `${process.env.REACT_APP_API_KEY}`,
//   userDecisionTimeout: 5000
// })(GeoLocBtn);



import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import { Link, Redirect } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";

class GeoLoc extends Component {

  state = {
    geoloc: false
  }

  // getGeoLoc = () => {
  //   this.setState({ geoloc: true })
  // }

  componentDidMount() {

  }

  render() {
    console.log(this.props.history)
    let geolocBtn = "Get my Location";
    return !this.props.isGeolocationAvailable ? (
      <p>Your browser does not support Geolocation</p>
    ) : !this.props.isGeolocationEnabled ? (
      null
    ) : this.props.coords ? (
      <>
        <Redirect
          to={{
            pathname: "/main-map",
            state: {
              initialLat: this.props.coords.latitude,
              initialLng: this.props.coords.longitude
            }
          }}
        />
      </>
    ) : (
            null
          );
  }
}

export { GeoLoc };

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  userDecisionTimeout: 5000
})(GeoLoc);