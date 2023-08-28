import * as React from "react";

function VideoYoutube( {width, height, src, title})  {
    return(
        <div className="video-container">
            <iframe 
            // width={width} 
            // height={height}
             src={src} title={title} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
}

export default VideoYoutube;
