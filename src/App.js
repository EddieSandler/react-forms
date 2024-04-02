import './App.css';
import BoxList from "./BoxList"
import NewBoxForm from "./NewBoxForm"
import TodoList from './TodoList';




function App() {
  return (
    <div className="App">
      <header className="App-header">


        <h1> Color Box Maker</h1>
        <BoxList />
        <h1> Todo List</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
