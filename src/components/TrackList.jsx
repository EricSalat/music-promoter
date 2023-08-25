import * as React from "react";
import Track from "../components/Track";

function TrackList() {
    return(
        <table className="table">
            <Track trackNumber="1" trackName="Prelude" trackTime="1:03"/>
            <Track trackNumber="2" trackName="Crush" trackTime="3:36"/>
            <Track trackNumber="3" trackName="Bad Ideas" trackTime="2:59"/>
            <Track trackNumber="4" trackName="I Like (the idea of) You" trackTime="2:48"/>
            <Track trackNumber="5" trackName="Games" trackTime="3:41"/>
            <Track trackNumber="6" trackName="Feelin" trackTime="3:04"/>
            <Track trackNumber="7" trackName="Words Ain't Enough" trackTime="2:04"/>
            <Track trackNumber="8" trackName="Bored" trackTime="3:03"/>
            <Track trackNumber="9" trackName="Wishful Drinking" trackTime="3:15"/>
            <Track trackNumber="10" trackName="Honest" trackTime="4:12"/>
            <Track trackNumber="11" trackName="Interlude III" trackTime="2:49"/>
        </table>
    ); 
}

export default TrackList;