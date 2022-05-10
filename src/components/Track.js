import React from "react";

function Track(props){
    return(
        <li className="track">
            <small className="track-number">{props.number}</small>
            <div className="track-info">

                <img className="track-album-cover" src={props.albumCover} />
                {/*Song name and artist*/}
                <div className="track-name-and-artist">
                    <p className="track-name">{props.songName}</p>
                    <p className="track-artist">{props.artist}</p>
                </div>
            </div>
            {/*Album name*/}
            <span className="track-album-name">{props.albumName}</span>

            {/*Date added*/}
            <span className="track-date-added">{props.dateAdded}</span>

            <div className="like-and-duration">
                {/*Like button*/}
                <button>
                    <img src="./img/icons/Favourite Track.png" className="icon"/>
                </button>

                {/*Duration*/}
                <span className="track-duration">{props.duration}</span>
            </div>
        </li>
    )
}

export default Track;