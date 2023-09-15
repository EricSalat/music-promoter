import * as React from "react";
import { IoPlayOutline , IoPauseOutline} from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
import { useState } from 'react';



function Track({trackNumber, trackName, trackTime}) {

    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        const audioPlayer = document.getElementById(`audio-player-${trackNumber}`);
        if (audioPlayer.paused) {
          audioPlayer.play();
          setIsPlaying(true);
        } else {
          audioPlayer.pause();
          setIsPlaying(false);
        }
      };


    return(
        <>
        <tr key={`track-${trackNumber}`} id={`track-${trackNumber}`} className="track">
            <td width="30px" className="track-number text-center">
                {trackNumber}
            </td>
            <td className="d-flex">
                <div onClick={toggleAudio} className="d-flex flex-column justify-content-center ms-2 me-1" >
                    {isPlaying ? (
                        // Cambiar el ícono a pausa cuando está reproduciendo
                        <IoPauseOutline style={{ color: "var(--text)", height: "26px", width: "26px" }} />
                    ) : (
                        // Ícono de reproducción cuando no está reproduciendo
                        <IoPlayOutline style={{ color: "var(--text)", height: "26px", width: "26px" }} />
                    )}
                </div>

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
            
       
        {/* Reproductor de audio HTML */}
        {/* Eliminar d-none para poder trabajar sobre el audio */}
        <audio id={`audio-player-${trackNumber}`} className="d-none" controls >
            <source src={`src/assets/tracks/mp3/${trackNumber}.mp3`} type="audio/mpeg" />        
            <source src={`src/assets/tracks/ogg/${trackNumber}.ogg`} type="audio/ogg" />        
            Your browser does not support the audio element.
        </audio>
  
    </>
    );
}

export default Track;

