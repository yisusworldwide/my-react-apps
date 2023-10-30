import List from '@mui/material/List';
import { useState } from 'react';
import TodoItem from "./TodoItem";

const initialTodos = [
    {id: 1, text: "do the workout", completed: true},
    {id: 3, text: "read the emails", completed: true},
    {id: 5, text: "customers' meetings", completed: false},
    {id: 7, text: "go sleep early", completed: false},
] 

export default function TodoList(){
    const [todos, setTodos] = useState(initialTodos);
    const removeTodo = (id) => {
      setTodos(prevTodos => {
        //we return all the todos which "id" are different from the one given as argument above
        return prevTodos.filter((t) => t.id != id);
      });
    };

    const toggleTodo = (id) => {
      setTodos(prevTodos => {
        return prevTodos.map(todo => {
          if(todo.id === id){
            //we're returning all the id's unchanged but the one we clicked
            return {...todo, completed: !todo.completed}
          } else {
            return todo;
          }
        })
      })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo)=> ( 
                <TodoItem 
                  todo={todo} 
                  key={todo.id}
                  remove={removeTodo}
                  toggle={() => toggleTodo(todo.id)}
                />
          ) ) }
      
        </List>
    );
}
