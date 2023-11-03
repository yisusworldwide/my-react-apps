import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Create from "@mui/icons-material/Create";
import IconButton from '@mui/material/IconButton';


export default function TodoItem (){
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    }
    return(
        <ListItem>
            <form>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} value={text} 
                    InputProps = {{
                        endAdornment:
                            <InputAdornment position="end">
                            <IconButton aria-label="create todo" edge="end">
                                <Create />
                            </IconButton>
                            </InputAdornment>
                    }}
                />
            </form> 
        </ListItem>
    );

}

{/* <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            
            label="Password"
          /> */}