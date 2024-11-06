import { ListItem, TextField, InputAdornment, IconButton} from '@mui/material';

import { useState } from 'react';

import Create from "@mui/icons-material/Create";

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
                    //we can define the label we like
                    label="New Todo..." 
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
                    }   }
                />
            </form> 
        </ListItem>
    );

}
