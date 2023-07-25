import { useState } from "react";
import "./ColorBox.css";

//picks a random element from an array
// function randomChoice(arr) {
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
//   }

export default function ColorBox({colors}){
  //we employ "useState" to update the state of our object
  const [color, setColor] = useState ("grey");
  //write a function using former one "randomChoice" to change colors from the array
  const changeColor = () => {
    const idx = Math.floor(Math.random() * colors.length);
    const randomColor =  colors[idx];
    //const randomColor = randomChoice(color);
    //set the color to a random one from the array
    setColor(randomColor); 
  }

  return (
    <div 
      className="ColorBox" 
      onClick={changeColor}
      style={{backgroundColor:color}}
    ></div>

  )
  

}