import './App.css';
import { useState } from "react";

function App() {
  const [ToDoList, Settodolist] = useState([]);
  const [NewTask, Setnewtask] = useState("");

  const handleChange = (event) => {
    Setnewtask(event.target.value);
  };

  const AddTask = () => {
    const task={
      id : ToDoList.length===0?1:ToDoList[ToDoList.length-1].id+1,
      taskname : NewTask,
      marked : false,
    };
    const newtodolist = [...ToDoList, task];
    Settodolist(newtodolist);
  };

  const deletetask = (id) => {
    const newtodolist = ToDoList.filter((task) => task.id !== id);
    Settodolist(newtodolist);
  };

  const markdone = (id) => {
    const updatedList = ToDoList.map(task => {
      if (task.id === id) {
        return { ...task, marked: true };
      }
      return task;
    });
    Settodolist(updatedList);
  };

  return (
    <div className="ToDoApp">
      <div className='AddTask'>
        <input onChange={handleChange} />
        <button onClick={AddTask}>Add task</button>
      </div>
      <div className='list'>
        {ToDoList.map((task) => (
          <div className='hhh'>
            <h3 className={task.marked ? 'crossed' : ''}>{task.taskname}</h3>
            {task.marked ? <div>Done!</div> : (
              <>
                <button onClick={() => deletetask(task.id)}>Delete</button>
                <button onClick={() => markdone(task.id)}>Done</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
