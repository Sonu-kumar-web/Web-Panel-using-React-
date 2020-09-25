import React, { Component, Fragment } from "react";

export default class Task extends Component {
   onClick = (index) => {
      //   console.log("Ind", index);
      this.props.deleteTask(index);
   };

   render() {
      const { id, title, completed } = this.props.task;

      let newCompleted,
         newTitle = "";
      if (true) {
         newCompleted = completed.toString() + " ";
         if (title.length > 10) {
            for (let i = 0; i < 15; i++) {
               newTitle = newTitle + title[i];
            }
            newTitle = newTitle + "...";
         }
      }

      return (
         <Fragment>
            <div className="table-div">
               <table className="task">
                  <tr className="task-con">
                     <div>
                        <td>{id}</td>
                     </div>
                     <div>
                        <td>{newTitle}</td>
                     </div>
                     <div>
                        <td>{newCompleted}</td>
                     </div>
                     <div>
                        <td>
                           <button
                              onClick={() => this.onClick(this.props.index)}
                           >
                              Delete
                           </button>
                        </td>
                     </div>
                  </tr>
               </table>
            </div>
         </Fragment>
      );
   }
}
