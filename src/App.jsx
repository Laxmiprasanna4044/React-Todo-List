import { useState } from 'react';
import './App.css';
const App = () => {
  const [task,setTask] = useState("");
  const[isCompleted,setIsCompleted] = useState(false);
  const [todos, setTodos] = useState([
    {
      text:"complete React project",
      date:"2016-05-2026 04:00 pm",
      completed:false,
    }
  ]);

  const addTodo=()=>{
    if(!task.trim()) return;

    const newTodo={
      text:task,
      date:new Date().toLocaleString(),
      completed:isCompleted,
    };
    setTodos([...todos,newTodo])
    setTask("");
    isCompleted(false);

    
  }

  const deleteTodo=(index)=>{
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  const toggleCompleted=(index)=>{
    const newTodos=[...todos];
    newTodos[index].completed=!newTodos[index].completed;
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <h2 className="title">React Todo List</h2>
      <div className="input-section">
        <input type="text" placeholder="Enter your todo.." value={task} onChange={(e)=>setTask(e.target.value)} className="input-box" />
        <label className="checkbox-label">
          <input type="checkbox" checked={isCompleted} onChange={(e)=>setIsCompleted(e.target.checked)} className="checkbox" />
         completed?
         </label>
         <button className="add-btn" onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo,index)=>(
          <li className={`todo-item ${todo.completed ? "completed" : "not-completed"}`}>
            <div className="todo-info">
              <div className="todo-text-date">
                <p className="todo-text">{todo.text}</p>
                <small className="todo-date">{todo.date}</small>
              </div>
            </div>
            <div className="actions">
              <button onClick={()=>toggleCompleted(index)} className={`status-btn ${todo.completed?"green":"red"}`}>{todo.completed?"Mark Not Done":"Mark Done"}</button>
              <button className="delete-btn" onClick={()=>deleteTodo()}>{"\u{1F5D1}"}</button>            
              </div>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App