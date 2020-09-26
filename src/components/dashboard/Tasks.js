import React, { Component, Fragment } from "react";
import axios from "axios";
import Task from "./Task";
import AddNewTask from "./AddNewTask";

export default class Tasks extends Component {
   state = { data: "", showData: [], newTask: false };

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

   addNewTask = (formData) => {
      this.setState((prevState) => ({
         showData: [...formData, ...prevState.showData],
      }));
   };

   closeForm = () => {
      this.setState({ newTask: false });
   };

   render() {
      return (
         <Fragment>
            <button
               type="submit"
               className="btn btn-primary addTask"
               value="addTask"
               onClick={() => this.setState({ newTask: true })}
            >
               Add Task
            </button>

            {this.state.newTask && (
               <AddNewTask
                  formData={this.addNewTask}
                  closeForm={this.closeForm}
               />
            )}

            <div>
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
