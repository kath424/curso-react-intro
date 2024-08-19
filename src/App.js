import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Tomar el curso de React.js', completed: false},
  {text:'Llorar con la llorona', completed: false},
  {text:'lallallaa', completed: false},
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
