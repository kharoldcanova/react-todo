import { useState } from "react";

export const TaskCreate = () => {
    
  //use state to save the value
  const [newTask, setnewTask] = useState();
  //function for submit a value
  const HandleSubmit = (e) => {
    //previene elcomportamiento por defecto de vaciar el input
    e.preventDefault();
    //save the value in localstorage
    localStorage.setItem("task", newTask);
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
