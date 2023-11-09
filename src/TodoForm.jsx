import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Create from "@mui/icons-material/Create";
import IconButton from '@mui/material/IconButton';

export default function TodoForm ({ addTodo }){
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    };
    
    const handleSubmit = (e) => {
        //we prevent the form updating when clicking "enter"
        e.preventDefault();
        addTodo(text);
        setText("");
    };
    
    return(
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined" 
                    onChange={handleChange} 
                    value={text} 
                        InputProps = {{
                            endAdornment:
                                <InputAdornment position="end">
                                <IconButton aria-label="create todo" edge="end" type="submit">
                                    <Create />
                                </IconButton>
                                </InputAdornment>
                    }}
                />
            </form> 
        </ListItem>
    );

}
