import React, { Component, Fragment } from "react";
import Answers from "./Answers";

export default class Home extends Component {
   constructor(props) {
      super();
      this.state = {
         status: "dropdown",
      };

      this.index = -1;
   }

   onChange = (e) => {
      this.setState({ status: e.target.value });
      // console.log("Onchange", e.target.value);
      this.index = e.target.value;
   };

   render() {
      console.log("index", this.index);

      const { status } = this.state;
      return (
         <Fragment>
            <div className="all-margin">
               <form>
                  <select
                     className="dropdown"
                     name="status"
                     value={status}
                     onChange={(e) => {
                        this.onChange(e);
                     }}
                     required
                  >
                     <option>* Dropdown</option>
                     <option value="0">What is React</option>
                     <option value="1">What is Node</option>
                     <option value="2">What is MongoDB</option>
                     <option value="3">What is Javascript</option>
                  </select>
               </form>
            </div>
            {this.index >= 0 ? (
               <Answers index={this.index} />
            ) : (
               <h1>Please select any option</h1>
            )}
         </Fragment>
      );
   }
}
