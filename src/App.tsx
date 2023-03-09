import React from 'react';
import './App.css';
import MyName from './Components/MyName/MyName';
import Counter from "./Components/Counter/Counter";
import ToDoList from "./Components/ToDoList/ToDoList";



function App() {
  return (
      <div className="App">
        {/*<Counter></Counter>*/}
        <ToDoList/>
        <Counter/>
        <MyName/>
      </div>
  );
}

export default App;
