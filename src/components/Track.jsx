import React, { useRef, useState, useEffect } from "react";
import { IoPauseOutline, IoPlayOutline } from 'react-icons/io5';
import { FiShare2 } from 'react-icons/fi';

function Track({ trackNumber, trackName, trackTime, isPlaying: isPlayingProp, setIsPlaying: setIsPlayingProp, stopAll }) {
    const [isPlaying, setIsPlaying] = useState(isPlayingProp);
    const audioRef = useRef(null);
  
    useEffect(() => {
      setIsPlaying(isPlayingProp);
    }, [isPlayingProp]);
  
    const togglePlay = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        stopAll();
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setIsPlayingProp(!isPlaying);
    };

  return (
    <>
      <tr key={`track-${trackNumber}`} id={`track-${trackNumber}`} className="track">
        <td width="30px" className="track-number text-center">
          {trackNumber}
        </td>
        <td className="d-flex">
          <div
            onClick={togglePlay}
            className="d-flex flex-column justify-content-center ms-2 me-1"
          >
            {isPlaying ? (
              <IoPauseOutline
                style={{ color: "var(--text)", height: "26px", width: "26px" }}
              />
            ) : (
              <IoPlayOutline
                style={{ color: "var(--text)", height: "26px", width: "26px" }}
              />
            )}
          </div>

          <div className="track-name d-inline-flex flex-column">
            {trackName}
            <span className="track-artist d-block">Tessa Violet</span>
          </div>
        </td>
        <td className="track-time text-center ">{trackTime}</td>
        <td className="text-center">
          <a href="#">
            <FiShare2 style={{ color: "var(--text)" }} />
          </a>
        </td>
      </tr>

      <audio
        ref={audioRef}
        id={`audio-player-${trackNumber}`}
        className="d-none"
        controls
      >
        <source src={`src/assets/tracks/mp3/${trackNumber}.mp3`} type="audio/mpeg" />
        <source src={`src/assets/tracks/ogg/${trackNumber}.ogg`} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

export default Track;
