import React from "react";

function Track(props){
    return(
        <li className="track">
            <img className="track-album-cover" src={props.albumCover}/>
            {/*Song name and artist*/}
            <div className="track-name-and-artist">
                <p>{props.songName}</p>
                <p>{props.artist}</p>
            </div>

            {/*Album name*/}
            <span className="track-album-name">{props.albumName}</span>

            {/*Date added*/}
            <span className="track-date-added">{props.dateAdded}</span>

            {/*Like button*/}
            <button></button>

            {/*Duration*/}
            <span className="track-duration">{props.duration}</span>

        </li>
    )
}

export default Track;