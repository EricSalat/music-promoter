import React from "react";
import  { useState } from "react";


function useToggleAudio() {
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
}

export default useToggleAudio();