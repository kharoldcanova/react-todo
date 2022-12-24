import React from "react";
import "./styles/index.css";
import { TaskCreate } from "./components/taskCreate";
import { useState } from "react";

//main function
function App() {
  //use state
  const [taskItem, settaskItem] = useState([
    { name: "mi primer tarea", donde: false },
    { name: "mi segunda tarea", donde: false },
    { name: "mi tercera tarea", donde: false },
  ]);
  //create new task
  function createNewTask(taskName){
   if(!taskItem.find(task => task.name === taskName)) {
    settaskItem([...taskItem, {name: taskName, done: false}])
   }
  
  }
  return <div className="App">
    <TaskCreate createNewTask={createNewTask} />
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {
        taskItem.map(task =>(
          <tr key={task.name}>
     <td>       {task.name}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
    
  </div>
  
}

export default App;
