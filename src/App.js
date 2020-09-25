import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/App.css";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import ChangePassword from "./components/auth/ChangePassword";
import Home from "./components/dashboard/Home";
import Tasks from "./components/dashboard/Tasks";
import User from "./components/dashboard/User";

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
                     <PrivateRoute exact path="/home" component={Home} />
                     <PrivateRoute exact path="/tasks" component={Tasks} />
                     <PrivateRoute exact path="/user" component={User} />
                  </Switch>
               </section>
            </Fragment>
         </Router>
      );
   }
}

export default App;
