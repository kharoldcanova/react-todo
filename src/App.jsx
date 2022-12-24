import React, { useEffect } from "react";
import "./styles/index.css";
import { TaskCreate } from "./components/taskCreate";
import { useState } from "react";

//main function
function App() {
  //use state
  const [taskItem, settaskItem] = useState([]);
  //create new task
  function createNewTask(taskName){
   if(!taskItem.find(task => task.name === taskName)) {
    settaskItem([...taskItem, {name: taskName, done: false}])
   }
  }
  //when the app load
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      settaskItem(JSON.parse(data));
    }
  }, []);
  //when the value change
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(taskItem))
  }, [taskItem])
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
