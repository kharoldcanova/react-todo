import React from "react";
import { useState } from "react";
import "./styles/index.css";

//main function
function App() {
  //use state to save the value
  const [newTask, setnewTask] = useState();

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Ingresa una nueva tarea"
        //send to method
        onChange={(e) => setnewTask(e.target.value)}
      />
      {/*Show the value  */}
      <button onClick={() => alert(newTask)}>Guardar</button>
    </div>
  );
}

export default App;
