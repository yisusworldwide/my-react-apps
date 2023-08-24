import { useState } from "react";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

// export default function RatingDemo(){
//     const [score, setScore] = useState(2);
//     return (
//         <div>
//             <h1>Rating Demo. Current Score: {score}</h1>
//             <Rating
//             name="simple-controlled"
//             value={score}
//             onChange={(event, newValue) => {
//             setScore(newValue);
//             }}
//             />
//         </div>
//     );
// }

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  
  export default function RatingDemo() {
    const [score, setScore] = useState(2);
    const [hover, setHover] = useState(-1);
  
    return (
      <div
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h2>Rating Demo. Current Score: {score}</h2>
        <Rating
          name="hover-feedback"
          value={score}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setScore(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {score !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : score]}</Box>
        )}
      </div>
    );
  }