import React, { Component, Fragment } from "react";
import axios from "axios";
import Task from "./Task";

export default class Tasks extends Component {
   state = { data: "", showData: [] };

   componentDidMount = async () => {
      let res = await axios.get("http://jsonplaceholder.typicode.com/todos");
      this.setState({ data: res.data });
      let filteredData = [];
      for (let i = 0; i < 10; i++) {
         filteredData.push(res.data[i]);
      }
      this.setState({ data: res.data, showData: filteredData });
      console.log("State", this.state.showData);
   };

   deleteTask = (index) => {
      let newData = this.state.showData;
      newData.splice(index, 1);

      // console.log("NewData", index);

      this.setState({ showData: newData });
   };

   render() {
      return (
         <Fragment>
            <div className="all-margin">
               {this.state.showData.map((task, index) => (
                  <Task
                     task={task}
                     key={index}
                     deleteTask={this.deleteTask}
                     index={index}
                  />
               ))}
            </div>
         </Fragment>
      );
   }
}
