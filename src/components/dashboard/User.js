import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class extends Component {
   render() {
      let username = localStorage.getItem("ChangePassword");
      let password = localStorage.getItem(username);
      // console.log(username, +"  " + password);

      return (
         <Fragment>
            <h1 className="x-large text-primary all-margin">User Detail</h1>
            <p className="lead"></p>

            <form className="form" onSubmit={(e) => this.onSubmit(e)}>
               <div className="form-group"></div>
               <div className="form-group">
                  <input
                     type="text"
                     placeholder="Username"
                     name="username"
                     value={username}
                     readOnly
                     required
                  />
               </div>
               <div className="form-group">
                  <input
                     type="password"
                     placeholder="Password"
                     name="password"
                     minLength="6"
                     value={password}
                     readOnly
                     required
                  />
                  <div className="change-pass-div">
                     <button className="btn btn-primary ">
                        <h1>
                           <Link
                              to="/change-password"
                              className="change-pass-log"
                           >
                              Change Password
                           </Link>
                        </h1>
                     </button>
                     <button
                        onClick={() => {
                           localStorage.removeItem("isAuthenticated");
                           window.location.reload(false);
                        }}
                        className="btn btn-primary "
                     >
                        <h1>
                           <Link to="/login" className="change-pass-log">
                              Logout
                           </Link>
                        </h1>
                     </button>
                  </div>
               </div>
            </form>
         </Fragment>
      );
   }
}
