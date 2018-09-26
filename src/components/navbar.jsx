//import React, { Component } from "react";
// class NavBar extends Component {
//   //state = {};
//   // Statelss functional component
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           {" - "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }
// export default NavBar;

import React from "react";
// Statelss functional component
const NavBar = props => {
  console.log("Navbar Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="">
        Navbar
        {" - "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;
