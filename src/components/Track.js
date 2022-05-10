import React, {useState} from "react";

function Track(props){
    const [trackNameColour, setTrackNameColour] = useState("white");
    const [playing, setPlaying] = useState(props.number)
    
    function handleClick(){
        if (trackNameColour === "white"){
            setTrackNameColour("#65D46E");
        }
        else{
            setTrackNameColour("white");
        }

        if (playing === props.number){
            setPlaying(<img src="./img/icons/Now Playing.png"/>);
        }
        else{
            setPlaying(props.number)
        }
    }
    return(
        <li className="track">
            <div className="track-number">
                {playing}
            </div>
            <div className="track-info">
                <img className="track-album-cover" src={props.albumCover} />
                {/*Song name and artist*/}
                <div className="track-name-and-artist">
                    <p className="track-name" style={{color:trackNameColour}} onClick={handleClick}>{props.songName}</p>
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