import * as React from "react";
import { IoPlayOutline } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
FiShare2

/* Hacer el track con una TABLE!!*/
function Track() {
    return(
        <div>
            {/* <div>
                <p>1</p>
                <IoPlayOutline style={{ color: "var(--text)"}} />
            </div>
            <div>
                <p class="track-name">The Small Things</p>
                <p class="track-artist">Conro</p>
            </div>
            <div>
                <p>3:35</p>
                <IoPlayOutline style={{ color: "var(--text)"}} />
            </div> */}
//La table será parte de un componente que envolverá los tracks
            
                <tr id="track-number">
                    <td width="30px">1</td>
                    <td>
                        <a href="">
                            <IoPlayOutline />
                        </a>
                        <div>
                            The Small Things
                            <span>Conro</span>
                        </div> 
                   </td>
                    <td>3:35</td>
                    <td>
                        <a href="">
                            <FiShare2 style={{ color: "var(--text)"}} />
                        </a>
                    </td>
                </tr>
            
        </div>
    );
}

export default Track;

