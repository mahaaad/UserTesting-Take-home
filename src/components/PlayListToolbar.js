import React, {useState} from "react";

function PlayListToolbar(){
    const [playButton, setPlayButton] = useState("./img/icons/play.png");
    const [favouriteButton, setFavouriteButton] = useState("./img/icons/favourite(white-outline).png");
  
    function handlePlayClick(){
      if (playButton === "./img/icons/play.png"){
        setPlayButton("./img/icons/pause.png");
      }
      else{
        setPlayButton("./img/icons/play.png");
      }
    }
  
    function handleFavouriteClick(){
      //set green or white outlined heart icon when user clicks button
      if (favouriteButton === "./img/icons/favourite(white-outline).png"){
        setFavouriteButton("./img/icons/Favourite Track.png");
      }
      else{
        setFavouriteButton("./img/icons/favourite(white-outline).png");
      }
    }

    return(
        <div id="playlist-toolbar">
            <div id="toolbar-buttons">
                <div id="play-button-container">
                  <button id="play-button" onClick={handlePlayClick}>
                      <img src={playButton}/>
                  </button>
                </div>
                <button id="favourite-button" onClick={handleFavouriteClick}>
                    <img src={favouriteButton}/>
                </button>
                <button id="download-button">
                    <img src="./img/icons/download.png"/>
                </button>
                <button id="settings-button">
                    <img src="./img/icons/settings.png"/>
                </button>
            </div>

            <div id="search-buttons">
              <button className='icon' id="search-icon">
                  <img src="./img/icons/search.png" />
              </button>
              <button className='button'>
                  Custom order
                  <img src="./img/icons/down.png" />
              </button>
            </div>
        </div>
    )
}

export default PlayListToolbar

