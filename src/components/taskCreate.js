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
    <div className="App">
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Ingresa una nueva tarea"
          //send to method
          value={newTask}
          onChange={(e) => setnewTask(e.target.value)}
        />
        {/*Show the value  */}
        <button>Guardar</button>
      </form>
    </div>
  );
};
