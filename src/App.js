import React,{useEffect, useState} from 'react';
import './style/App.css';
import './style/Tracks.css';
import './style/Playlist.css';

import Nav from "./components/Nav"
import PlayListVitals from "./components/PlayListVitals";
import PlayListToolbar from "./components/PlayListToolbar";
import PlayListHeader from "./components/PlayListHeader";
import Track from "./components/Track";

function App() {
  let tracks = [
    {
    "Good Morning": {
      "albumCover" : "graduation.jpg",
      "artist" : "Kanye West",
      "albumName" : "Graduation",
      "dateAdded" : "2 months ago",
      "duration" : "3:07",
    }},
    {
    "SICKO MODE": {
      "albumCover" : "astroworld.jpg",
      "artist" : "Travis Scott",
      "albumName" : "ASTROWORLD",
      "dateAdded" : "2 months ago",
      "duration" : "5:12",
    }},
    {
    "Find Your Love": {
      "albumCover" : "thank me later.jpg",
      "artist" : "Drake",
      "albumName" : "Thank Me Later",
      "dateAdded" : "Dec 20, 2021",
      "duration" : "3:29",
    }},
    {
    "Sativa": {
      "albumCover" : "sativa.jpg",
      "artist" : "Jhene Aiko",
      "albumName" : "Trip",
      "dateAdded" : "Dec 20, 2021",
      "duration" : "4:37",
    }},
    {
    "The Morning": {
      "albumCover" : "house of balloons.jpg",
      "artist" : "The Weeknd",
      "albumName" : "House of Balloons",
      "dateAdded" : "Dec 20, 2021",
      "duration" : "5:14",
    }},
    {
    "She Knows This": {
      "albumCover" : "man on the moon.webp",
      "artist" : "Kid Cudi",
      "albumName" : "Man On the Moon",
      "dateAdded" : "Dec 20, 2021",
      "duration" : "3:37",
    }},
    {
    "Controlla": {
      "albumCover" : "views.jpg",
      "artist" : "Drake",
      "albumName" : "Views",
      "dateAdded" : "Dec 20, 2021",
      "duration" : "4:05",
    }},
    {
    "Devil In A New Dress": {
      "albumCover" : "my beautiful dark twisted fantasy.jpg",
      "artist" : "Kanye West",
      "albumName" : "My Beautiful Dark Twisted Fantasy",
      "dateAdded" : "Dec 20, 2021",
      "duration" : "4:40",
    }},
    {
    "Money Trees": {
      "albumCover" : "good kid, m.A.A.d city.jpg",
      "artist" : "Kendrick Lamar",
      "albumName" : "good kid, m.A.A.d city",
      "dateAdded" : "Dec 20, 2021",
      "duration" : "6:26",
    }}, 
    {
    "Stronger": {
      "albumCover" : "graduation.jpg",
      "artist" : "Kanye West",
      "albumName" : "Graduation",
      "dateAdded" : "Dec 20, 2021",
      "duration" : "5:12",
    }}, 
  ]

  const [trackList, setTrackList] = useState(tracks);


  async function sortTracks(key){
    if(key === "title"){
      trackList.sort(function(a, b){
        a = Object.keys(a);
        b = Object.keys(b);
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0; 
      })
    }
    else if(key === "album"){
      trackList.sort(function(a, b){
        let aKey = Object.keys(a);
        let bKey = Object.keys(b);
        //console.log("ALBUM NAME: " + a[aKey].albumName)
        if(a[aKey].albumName < b[bKey].albumName) { return -1; }
        if(a[aKey].albumName > b[bKey].albumName) { return 1; }
        return 0; 
      })
    }
    else if(key === "duration"){
      trackList.sort(function(a, b){
        let aDuration = a[Object.keys(a)].duration;
        aDuration = aDuration[0] + aDuration.slice(2,3);
        let bDuration = b[Object.keys(b)].duration;
        bDuration = bDuration[0] + bDuration.slice(2,3);
        console.log("duration: " + aDuration + bDuration)
        if(aDuration < bDuration) { return -1; }
        if(aDuration > bDuration) { return 1; }
        return 0; 
      })
    }
    let newArr = trackList.slice();
    setTrackList(newArr);
  }

  return ( 
    <div className="App">
      <header id="playlist-overlay">
        <Nav />
        <PlayListVitals />
        <PlayListToolbar />
      </header>

      <section id="tracks-section">
        <div id="playlist-header">
            <span id="hashtag">#</span>
            <h2 onClick={()=>{sortTracks("title")}}>TITLE</h2>
            <h2 onClick={()=>{sortTracks("album")}}>ALBUM</h2>
            <h2 onClick={()=>{sortTracks("date")}}>DATE ADDED</h2>
            <button className='icon' onClick={()=>{sortTracks("duration")}} >
                <img src="./img/icons/time.png" id="time-icon" className="icon"/>
            </button>
        </div>
        <hr />
        <ol id="tracks-list">
          { 
            trackList.map((track, itemKey) => {
                let song = Object.keys(track);
                let src = `./img/album covers/${track[song].albumCover}`
                //console.log("src: " + track[song].albumCover );
                return(
                  <Track
                    key={itemKey}
                    number={itemKey+1}
                    songName={song}
                    albumCover={src}
                    artist={track[song].artist}
                    albumName={track[song].albumName}
                    dateAdded={track[song].dateAdded}
                    duration={track[song].duration}

                />)
              }     
          )}
        </ol>
      </section>
    </div>
  );
}

export default App;
