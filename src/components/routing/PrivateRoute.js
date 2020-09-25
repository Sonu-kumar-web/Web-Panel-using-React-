import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

export default class PrivateRoute extends Component {
   render() {
      const { component: Component, ...rest } = this.props;
      return (
         <Fragment>
            <Route
               {...rest}
               render={(props) =>
                  !localStorage.getItem("isAuthenticated") ? (
                     <Redirect to="/login" />
                  ) : (
                     <Component {...props} />
                  )
               }
            />
         </Fragment>
      );
   }
}
