import React, {useState} from "react";

function Track(props){
    const [trackNameColour, setTrackNameColour] = useState("white");
    const [playing, setPlaying] = useState(props.number);
    const [liked, setLiked] = useState("./img/icons/favourite(white-outline).png");
    const [likeButtonVisibility, setLikeButtonVisibility] = useState("hidden");
    
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
    function handleHover(){
        setLikeButtonVisibility("visible");
    }
    function handleMouseLeave(){
        if (liked !== "./img/icons/Favourite Track.png"){
            setLikeButtonVisibility("hidden");
        }
    }
    function handleLikeClick(){
        if (liked === "./img/icons/favourite(white-outline).png"){
            setLiked("./img/icons/Favourite Track.png");
        }
        else{
            setLiked("./img/icons/favourite(white-outline).png");
        }
    }
    return(
        <li className="track" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
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
                    <img src={liked} onClick={handleLikeClick} className="icon like-button" style={{visibility: likeButtonVisibility}}/>
                </button>

                {/*Duration*/}
                <span className="track-duration">{props.duration}</span>
            </div>
        </li>
    )
}

export default Track;