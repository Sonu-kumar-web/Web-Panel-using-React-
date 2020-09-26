import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

export default class extends Component {
   state = { username: "", password: "" };

   onSubmit = (e) => {
      e.preventDefault();
      const { username, password } = this.state;

      if (localStorage.getItem(username) === password) {
         localStorage.setItem("isAuthenticated", true);
      }
      window.location.reload(false);
   };

   render() {
      const { username, password } = this.state;

      if (localStorage.getItem("isAuthenticated")) {
         return <Redirect to="/home" />;
      }
      return (
         <Fragment>
            <h1 className="x-large text-primary all-margin">Sign In</h1>
            <p className="lead">
               <i className="fas fa-user"></i> Sign Into Your Account
            </p>
            <form className="form" onSubmit={(e) => this.onSubmit(e)}>
               <div className="form-group"></div>
               <div className="form-group">
                  <input
                     type="text"
                     placeholder="Username"
                     name="username"
                     value={username}
                     onChange={(e) => {
                        this.setState({ username: e.target.value });
                     }}
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
                     onChange={(e) => {
                        this.setState({ password: e.target.value });
                     }}
                     required
                  />
               </div>

               <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
               Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
         </Fragment>
      );
   }
}
