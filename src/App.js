import { TodoCounter } from '../src/TodoCounter/TodoCounter';
import { TodoSearch } from '../src/TodoSearch/TodoSearch';
import { TodoList } from '../src/TodoList/TodoList';
import { TodoItem } from '../src/TodoItem/TodoItem';
import { CreateTodoButton } from '../src/CreateButton/CreateTodoButton';


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
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            complete={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
