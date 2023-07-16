import {useState} from 'react';

export default function Counter(){
    const [num, setNum] = useState(0);

    const changeNumInc = () => {
        setNum (num+1);
    };
    console.log(num);

    const changeNumDec = () => {
        setNum (num-1);
    };
    console.log(num);

    return (
        <div>
            <p>The count is: {num}</p>
            <button onClick={changeNumInc}>Increase</button>
            <button onClick={changeNumDec}>Decrease</button>
        </div>
    );
    
}