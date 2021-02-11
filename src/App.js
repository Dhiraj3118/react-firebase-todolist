import { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import firebase from 'firebase'
import Todo from "./Todo";


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, text: doc.data().text})))
    });
  }, [])

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  };

  const deleteTodo = (id) => {
    db.collection('todos').doc(id).delete();
  }

  return (
    <div className="App">
      <h1>A new React Todo App Again</h1>
      
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />        
        <button onClick={addTodo} disabled={!input}>Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} deleteTodo={deleteTodo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
