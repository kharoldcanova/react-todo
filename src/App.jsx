import React, { useEffect } from "react";
import { TaskCreate } from "./components/taskCreate";
import { useState } from "react";
import { TaskTable } from './components/taskTable'
import { VisibilityControl } from "./components/visibilityControl";
import {Container} from './components/container'

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

  //delete task
  const cleanTasks = ()=>{
    settaskItem(taskItem.filter(task => !task.done))
    setshowCompleted(false)
  }

  return (
    <main className="bg-dark vh-100 text-white">
     <Container>
      {/* input to create task */}
      <TaskCreate createNewTask={createNewTask} />
        {/* task table */}
        <TaskTable tasks={taskItem} toggleTask={toggleTask} />

        {/* check for show task table done */}
        <VisibilityControl
          isChecked={showCompleted}
          setshowCompleted={(checked) => setshowCompleted(checked)}
          cleanTasks={cleanTasks}
        />

        {/* only show if the check is marked */}
        {showCompleted === true && (
          <TaskTable
            tasks={taskItem}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}

     </Container>
        
    </main>
  );
  
}

export default App;
