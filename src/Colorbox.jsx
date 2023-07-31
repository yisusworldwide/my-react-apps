import { useState } from "react";
import "./ColorBox.css";

//picks a random element from an array
function randomChoice(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  }

//in our function we are using the variable "colors" from the array in App.jsx  
export default function ColorBox({ colors }){
  //we employ "useState" to update the state of our object
  const [color, setColor] = useState (randomChoice(colors));
  //write a function using former one "randomChoice" to change colors from the array
  const changeColor = () => {
    //we set the random color generated from our previously created function
    const randomColor = randomChoice(colors);
    //set the color to a random one from the array
    setColor(randomColor); 
  }

  //we return our component styled upon a variable color we have set
  return (
    <div 
      //for the css to be working
      className="ColorBox" 
      //to trigger the logic due clicking
      onClick={changeColor}
      //apply the first argument before we "setColor" it
      style={{backgroundColor:color}}
    ></div>

  )

}