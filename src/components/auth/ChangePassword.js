import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

export default class extends Component {
   state = { password: "" };

   render() {
      const { password } = this.state;

      let username = localStorage.getItem("ChangePassword");
      console.log(username, +"    " + password);

      return (
         <Fragment>
            <h1 className="x-large text-primary all-margin">Change Password</h1>
            <p className="lead"></p>
            <form className="form">
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
                  <p className="lead">
                     <i className="fas fa-user"></i> Enter your new password
                  </p>
                  <input
                     type="password"
                     placeholder="Password"
                     name="password"
                     minLength="6"
                     value={password}
                     onChange={(e) => {
                        this.setState({ password: e.target.value });
                     }}
                     required
                  />
                  <div className="change-pass-div">
                     <button
                        className="btn btn-primary "
                        onClick={() => {
                           localStorage.setItem(username, password);
                           localStorage.removeItem("isAuthenticated");
                           window.location.reload(false);
                        }}
                     >
                        <h1>
                           <Link to="/login" className="change-pass-log">
                              Save Password
                           </Link>
                        </h1>
                     </button>
                     <button
                        onClick={() => {
                           localStorage.removeItem("isAuthenticated");
                           localStorage.removeItem("isLogin");
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
