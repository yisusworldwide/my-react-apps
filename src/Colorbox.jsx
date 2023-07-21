import { useState } from "react";
import "./ColorBox.css";

//picks a random element from an array
function randomChoice(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  }

export default function ColorBox(){

  return <div className="ColorBox" style={{backgroundColor:"orange"}}></div>

}