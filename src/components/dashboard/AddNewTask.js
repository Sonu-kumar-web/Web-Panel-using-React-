import React, { Fragment } from "react";

class AddNewTask extends React.Component {
   constructor(props) {
      super();
      this.id = 0;
      this.title = "hey";
      this.completed = true;
   }

   onSubmit = (e) => {
      e.preventDefault();
      const newTask = [
         {
            id: this.id,
            title: this.title,
            completed: this.completed,
         },
      ];
      console.log("FormData", newTask);
      this.props.formData(newTask);
      this.props.closeForm();
   };

   render() {
      return (
         <Fragment>
            <div>
               <h1 className="large text-primary">Add New task</h1>

               <form
                  className="form"
                  onSubmit={(e) => {
                     this.onSubmit(e);
                  }}
               >
                  <div className="form-group">
                     <input
                        type="text"
                        placeholder="id"
                        name="id"
                        // value={id}
                        onChange={(e) => (this.id = e.target.value)}
                        required
                     />
                  </div>
                  <div className="form-group">
                     <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        // value={title}
                        onChange={(e) => (this.title = e.target.value)}
                     />
                  </div>
                  <div className="form-group">
                     <input
                        type="text"
                        placeholder="Completed"
                        name="completed"
                        // value={completed}
                        onChange={(e) => (this.completed = e.target.value)}
                     />
                  </div>

                  <input type="submit" className="btn btn-primary my-1" />

                  <button
                     className="btn btn-primary my-1"
                     onClick={() => this.props.closeForm()}
                  >
                     Go Back
                  </button>
               </form>
            </div>
         </Fragment>
      );
   }
}

export default AddNewTask;
