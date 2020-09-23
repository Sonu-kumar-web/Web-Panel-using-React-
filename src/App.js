import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/App.css";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import ChangePassword from "./components/auth/ChangePassword";
import PrivateRoute from "./components/routing/PrivateRoute";

class App extends Component {
   render() {
      return (
         <Router>
            <Fragment>
               <Navbar />
               <Route exact path="/" component={Landing} />
               <section className="container">
                  <Switch>
                     <Route exact path="/register" component={Signup} />
                     <Route exact path="/login" component={Login} />
                     <PrivateRoute
                        exact
                        path="/change-password"
                        component={ChangePassword}
                     />
                  </Switch>
               </section>
            </Fragment>
         </Router>
      );
   }
}

export default App;
