import { ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem ({todo, remove, toggle}){
    const labelId = `checkbox-list-label${todo.id}`;
    const removeTodo = () => {
        remove(todo.id);
    }
    
    return (
        <ListItem
          secondaryAction={
            <IconButton size="large" color="warning" edge="end" aria-label="comments" onClick={removeTodo}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                onChange={toggle}
                //size="large"
              />
            </ListItemIcon>
            {/* we're trying to edit text font and size */}
            <ListItemText id={labelId} primary={todo.text} variant="" />
          </ListItemButton>
        </ListItem>
    );
}