import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import {Box, Typography}  from '@mui/material';

// const initialTodos = [
//     {id: 1, text: "do the workout", completed: false},
//     {id: 3, text: "read the emails", completed: false},
//     {id: 5, text: "customers' meetings", completed: false},
//     {id: 7, text: "attend remaining tasks", completed: false},
//     {id: 9, text: "go sleep early", completed: false},
// ] 

//by this function we request the initial data, if any
//we can erase all our entries in the form by "localStorage.clear()" in the console in Chrome
const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  //in case there is no data, we return empty string or otherwise it will return null
  if (!data) return [];
  return data;
};

export default function TodoList(){


    const [todos, setTodos] = useState(getInitialData);
    //we invoke localStorage through 'useEffect'
    useEffect(() => {
      localStorage.setItem(
        'todos',
        JSON.stringify(todos)
      )}, [todos])

    //function to REMOVE todos
    const removeTodo = (id) => {
      setTodos(prevTodos => {
        //we return all the todos which "id" are different from the one given as argument above
        return prevTodos.filter((t) => t.id != id);
      });
    };
    //function to change from true to false and likewise 
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

    const addTodo = (text) => {
      setTodos ((prevTodos) => {

        return [...prevTodos, {text:text, id:crypto.randomUUID(), completed: false}];
        }
      );
    }
    //returns the original list giving the above hardcoded todos
    return (
      <Box
        sx={{ 
          display: "flex",
          flexDirection:"column",
          alignItems:"center",
          m: 3,
      }}
      >
        
      <Typography variant="h5" color="common.green" font="bold" component="div" sx={{ flexGrow: 1, mb:3, fontWeight: 'bold', fontStyle: 'oblique' }}>
            My Todo List
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

        {todos.map((todo)=> ( 
              
            <TodoItem 
              todo={todo} 
              key={todo.id}
              //try to remove item with this variable commented out
              remove={removeTodo}
              toggle={() => toggleTodo(todo.id)}
              // addTodo={addTodo} try to explain why here NOT working
            />
                
        ) ) }
          
        <TodoForm addTodo={addTodo}/> 
      
      </List>
      </Box>
    
    );
}
