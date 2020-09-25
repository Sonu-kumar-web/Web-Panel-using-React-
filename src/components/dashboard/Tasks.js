import React, { Component } from "react";
import axios from "axios";

export default class Tasks extends Component {
   componentDidMount = async () => {
      let res = await axios.get("http://jsonplaceholder.typicode.com/todos");
      console.log("Result", res);
   };

   render() {
      return <div>Tasks</div>;
   }
}
