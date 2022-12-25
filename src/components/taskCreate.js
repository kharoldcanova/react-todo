import { useState } from "react";

export const TaskCreate = ({ createNewTask }) => {
  //use state to save the value
  const [newTask, setnewTask] = useState("");
  //function for submit a value
  const HandleSubmit = (e) => {
    //previene elcomportamiento por defecto de vaciar el input
    e.preventDefault();
    //call function in app.jsx
    createNewTask(newTask);
    //reset the input task
    setnewTask("");
  };

  return (
    <form onSubmit={HandleSubmit} className="my-2 row">
      {/*text input */}
      <div className="col-9">
        <input
          type="text"
          placeholder="Ingresa una nueva tarea"
          //send to method
          value={newTask}
          onChange={(e) => setnewTask(e.target.value)}
          className="form-control"
        />
      </div>
      {/*buttom to save */}
      <div className="col-3">
      <button 
      className="btn btn-primary">
        Guardar</button>
      </div>
    </form>
  );
};
