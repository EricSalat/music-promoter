import React, { useState } from "react";
import Track from "../components/Track";


function TrackList() {
  const [currentTrack, setCurrentTrack] = useState(null);
  

  const albumData = [
    { id: 1, trackNumber: "1", trackName: "Prelude", trackTime: "1:03" },
    { id: 2, trackNumber: "2", trackName: "Bad Ideas", trackTime: "2:59" },
    { id: 3, trackNumber: "3", trackName: "Crush", trackTime: "3:36" },
    { id: 4, trackNumber: "4", trackName: "I Like (the idea of) You", trackTime: "2:48" },
    { id: 5, trackNumber: "5", trackName: "Games", trackTime: "3:41" },
    { id: 6, trackNumber: "6", trackName: "Feelin", trackTime: "3:04" },
    { id: 7, trackNumber: "7", trackName: "Words Ain't Enough", trackTime: "2:04" },
    { id: 8, trackNumber: "8", trackName: "Bored", trackTime: "3:03" },
    { id: 9, trackNumber: "9", trackName: "Wishful Drinking", trackTime: "3:15" },
    { id: 10, trackNumber: "10", trackName: "Honest", trackTime: "4:12" },
    { id: 11, trackNumber: "11", trackName: "Interlude III", trackTime: "2:49" }
  ];

  const stopAllTracks = () => {
    const audioElements = document.querySelectorAll("audio");
    audioElements.forEach((audio) => {
      audio.pause();
    });
    setCurrentTrack(null);
  };

  return (
    <table className="table">
      {albumData.map((data) => (
        <Track
          key={data.id}
          trackNumber={data.trackNumber}
          trackName={data.trackName}
          trackTime={data.trackTime}
          isPlaying={currentTrack === data.id}
          setIsPlaying={() => setCurrentTrack(data.id)}
          stopAll={stopAllTracks}
        />
      ))}
    </table>
  );
}

export default TrackList;
