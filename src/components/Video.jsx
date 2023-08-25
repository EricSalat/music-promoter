import * as React from "react";

function VideoYoutube( {width, height, src, title})  {
    return(
        <iframe className="col-12" width={width} height={height} src={src} title={title} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    );
}

export default VideoYoutube;
