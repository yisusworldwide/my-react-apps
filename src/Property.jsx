// export default function Property({ name, price, rating, id }){
//     return (
//         <div>
//             <h2>{name}</h2>
//             <h3>${price} per night</h3>
//             <h4>{rating} stars</h4>
//         </div>
//     );
// }

import { useState } from "react";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Property({ name, price, id }){
    const [value, setValue] = useState(3);
    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <h2>{name}</h2>
                <h3>${price} per night</h3>
                <p>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                </p>
                <p disabled aria-label="like">
                    <FavoriteIcon />
                </p>
            </Box>
        </div>
    );
}