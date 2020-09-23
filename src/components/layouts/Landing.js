import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Landing extends Component {
   //    if(true) {
   //       return <Redirect to="/" />;
   //    }

   render() {
      return (
         <section className="landing">
            <div className="dark-overlay">
               <div className="landing-inner">
                  <h1 className="x-large">Welcome to Kredence</h1>

                  <div className="buttons">
                     <Link to="/register" className="btn btn-primary">
                        Sign Up
                     </Link>
                     <Link to="/login" className="btn btn-light">
                        Login
                     </Link>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Landing;
