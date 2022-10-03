import FilterTodo from "./components/FilterTodo/FilterTodo";
import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <FilterTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
