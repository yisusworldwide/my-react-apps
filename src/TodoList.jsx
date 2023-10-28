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
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo)=> ( 
                <TodoItem todo={todo} key={todo.id}/>
          ) ) }
      
        </List>
    );
}


// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-label-${value}`;

//         return (
//           <ListItem
//             key={value}
//             secondaryAction={
//               <IconButton edge="end" aria-label="comments">
//                 <CommentIcon />
//               </IconButton>
//             }
//             disablePadding
//           >
//             <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//               <ListItemIcon>
//                 <Checkbox
//                   edge="start"
//                   checked={checked.indexOf(value) !== -1}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{ 'aria-labelledby': labelId }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }