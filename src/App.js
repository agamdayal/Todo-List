import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import React , {useState, useEffect} from 'react';
import './components/style.css';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title,desc) => {
      let srno = todos.length;

      const newTodo = {
        srno: srno,
        title: title,
        desc: desc,
      }

      settodos([...todos,newTodo]);
  }

  const onDelete = (todo) =>{
      settodos(todos.filter((e) => {
        return e!==todo;
      }));
  };

 
  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <Router>
    <Header />
    <Switch>
          <Route exact path="/" render = { () => {
              return(
                <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
                </>
              )
          }}>
          </Route>
          <Route exact path="/about" render = {() => {
            return(
              <About />
            )
          }}>
            
          </Route>
      </Switch>
    <Footer />
    </Router>
  );
}

export default App;
 