import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

class Navbar extends Component {
   render() {
      return (
         <Fragment>
            <nav className="navbar bg-dark">
               <div>
                  <Link to="/">
                     <img src={logo} alt="logo" className="logo" />
                  </Link>
               </div>
               <div className="nav-div">
                  <button>
                     <h1>
                        <Link to="/home">Home</Link>
                     </h1>
                  </button>
                  <button>
                     <h1>
                        <Link to="/tasks">Tasks</Link>
                     </h1>
                  </button>
                  <button>
                     <h1>
                        <Link to="/user">User</Link>
                     </h1>
                  </button>
               </div>
            </nav>
         </Fragment>
      );
   }
}

export default Navbar;
