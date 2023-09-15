import * as React from "react";
import { FiShare2 } from "react-icons/fi";


function Button({text, style}){
  return (
    <button className="button" style={style}>
      {text}
    </button>
  );
 }  
  export default Button;