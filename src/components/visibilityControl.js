export const VisibilityControl = ({ isChecked, setshowCompleted, cleanTasks}) => {

  //delete task
  const handleDelete = () => {
    if (window.confirm('¿Esta seguro de eliminar el elemento?')) {
       cleanTasks()
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setshowCompleted(e.target.checked)}
      />
      <label>Mostrar tareas realizadas</label>

      <button onClick={handleDelete}>Limpiar</button>
    </div>
  );
};
