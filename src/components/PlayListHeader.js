import React from "react";

function PlayListHeader(){
    return(
        <div id="playlist-header">
            <small id="hashtag">#</small>
            <button>TITLE</button>
            <button>ALBUM</button>
            <button>DATE ADDED</button> 
            <button className='icon' >
                <img src="./img/icons/time.png" id="time-icon" className="icon"/>
            </button>
        </div>
    )
}

export default PlayListHeader