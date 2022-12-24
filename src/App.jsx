import React, { useEffect } from "react";
import "./styles/index.css";
import { TaskCreate } from "./components/taskCreate";
import { useState } from "react";
import { TaskTable } from './components/taskTable'

//main function
function App() {
  //use state
  const [taskItem, settaskItem] = useState([]);
  const [showCompleted, setshowCompleted] = useState();

  //create new task
  function createNewTask(taskName){
   if(!taskItem.find(task => task.name === taskName)) {
    settaskItem([...taskItem, {name: taskName, done: false}])
   }
  }

  const toggleTask = (task) => {
    settaskItem(
      taskItem.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

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

  return (
    <div className="App">
      {/* input to create task */}
      <TaskCreate createNewTask={createNewTask} />
      {/* task table */}
      <TaskTable tasks={taskItem} toggleTask={toggleTask} />

      {/* check for show task table done */}
      <div>
        <input
          type="checkbox"
          onChange={() => setshowCompleted(!showCompleted)}
        />
        <label>Mostrar tareas realizadas</label>
      </div>

      {/* only show if the check is marked */}
      {showCompleted === true && (
        <TaskTable
          tasks={taskItem}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
    </div>
  );
  
}

export default App;
