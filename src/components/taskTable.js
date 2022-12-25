import { TaskRow } from "./taskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false}) => {
  //function to compare the donevalue
  const taskTableRow = (doneValue) => {
    return ( 
        tasks.filter(task => task.done === doneValue)
        .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    )))
    ;
  };

  return (
    <table className="table table-dark table-striped table-borderer border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>{taskTableRow(showCompleted)}</tbody>
    </table>
  );
};
