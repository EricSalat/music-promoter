import * as React from "react";

function VideoYoutube( {width, height, src, title})  {
    return(
        <div className="video-container">
            <iframe 
             src={src} title={title} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
}

export default VideoYoutube;
