import React from "react";

function PlayListHeader(){
    return(
        <div id="playlist-header">
            <span id="hashtag">#</span>
            <h2>TITLE</h2>
            <h2>ALBUM</h2>
            <h2>DATE ADDED</h2>
            <button className='icon' >
                <img src="./img/icons/time.png" id="time-icon" className="icon"/>
            </button>
        </div>
    )
}

export default PlayListHeader