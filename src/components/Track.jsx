import * as React from "react";
import { IoPlayOutline } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";


function Track({trackNumber, trackName, trackTime}) {
    return(
        <tr id="track-number" className="track">
            <td width="30px" className="track-number text-center">
                {trackNumber}
            </td>
            <td className="d-flex">
                <a href="" className="d-flex flex-column justify-content-center ms-2 me-1">
                    <IoPlayOutline style={{ color: "var(--text)", height: "26px", width: "26px"}} />
                </a>
                <div className="track-name d-inline-flex flex-column">
                    {trackName}
                    <span className="track-artist d-block">Tessa Violet</span>
                </div> 
            </td>
            <td className="track-time text-center ">{trackTime}</td>
            <td className="text-center">
                <a href="">
                    <FiShare2 style={{ color: "var(--text)"}} />
                </a>
            </td>
        </tr>
            
       
    );
}

export default Track;

