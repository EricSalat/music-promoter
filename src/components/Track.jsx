import * as React from "react";
import { IoPlayOutline } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
FiShare2


function Track({trackNumber, trackName, trackTime}) {
    return(
        <tr id="track-number" class="track">
            <td width="30px" class="track-number text-center">
                {trackNumber}
            </td>
            <td class="d-flex">
                <a href="" class="d-flex flex-column justify-content-center ">
                    <IoPlayOutline style={{ color: "var(--text)", height: "26px", width: "26px"}} />
                </a>
                <div class="track-name d-inline-flex flex-column">
                    {trackName}
                    <span class="track-artist d-block">Tessa Violet</span>
                </div> 
            </td>
            <td class="track-time text-center">{trackTime}</td>
            <td class="text-center">
                <a href="">
                    <FiShare2 style={{ color: "var(--text)"}} />
                </a>
            </td>
        </tr>
            
       
    );
}

export default Track;

