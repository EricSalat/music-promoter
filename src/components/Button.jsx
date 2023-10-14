import * as React from "react";
import { FiShare2 } from "react-icons/fi";


function Button({text, style}){
  return (
    <a className="button" style={style} href="#tracklist">
      {text}
    </a>
  );
 }  
  export default Button;