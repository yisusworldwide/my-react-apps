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

export default function Property({ name, price, id }){
    const [value, setValue] = useState(3);
    return (
        <div>
            <h2>{name}</h2>
            <h3>${price} per night</h3>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            />
            
        </div>
    );
}