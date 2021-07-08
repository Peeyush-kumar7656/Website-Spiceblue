import React from 'react'
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@material-ui/icons/Add';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b></b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="TASKS 0"/>
      <AddIcon/>
      <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
      </Form.Group>

  </Form>
  );
}
function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
     <div className="parent">
     <div className="first"></div>
     <div className="second"></div>
     <div className="app">
     <div className="container">
       <FormTodo addTodo={addTodo} />
       <div>
         {todos.map((todo, index) => (
           <Card>
             <Card.Body>
               <Todo
               key={index}
               index={index}
               todo={todo}
               markTodo={markTodo}
               removeTodo={removeTodo}
               />
             </Card.Body>
           </Card>
         ))}
         <div>
         <label>Task Description</label><br/>
         <input type="text" placeholder="Follow up"/><br/>
         </div><br/>
         <div className="datetime">
        <input type="date" id="start" name="trip-start"
       value="2021-07-08"
       min="2000-01-01" max="2030-12-01" />
       <select id="dropdown">
       <AccessTimeIcon/>
       <option value="N/A">Time</option>
       <option value="1">8:30 am</option>
       <option value="2">9:00 am</option>
       <option value="3">9:30 am</option>
       <option value="4">10:00 am</option>
       <option value="4">10:30 am</option>
       <option value="4">11:00 am</option>
       <option value="4">11:30 am</option>
       <option value="4">12:00 pm</option>
       <option value="4">12:30 pm</option>
    </select>
       </div>
       </div>
     </div>
   </div>
    </div>
  );
}
export default App;
