import './style/App.css';
import './style/Tracks.css';
import './style/Playlist.css';

import Nav from "./components/Nav"
import PlayListVitals from "./components/PlayListVitals";
import PlayListToolbar from "./components/PlayListToolbar";
import PlayListHeader from "./components/PlayListHeader";
import Track from "./components/Track";

function App() {
  return ( 
    <div className="App">
      <header id="playlist-overlay">
        <Nav />
        <PlayListVitals />
        <PlayListToolbar />
      </header>

      <section id="tracks-section">
        <PlayListHeader />
        <hr />
        <ol id="tracks-list">
          <Track
            number = "1"
            albumCover = "./img/album art/Album Artwork.png"
            songName = "Space Ghoast Coast to Coast"
            artist = "Glass Animals"
            albumName = "Dreamland (+ Bonus Levels)"
            dateAdded = "2 months ago"
            duration = "3:07"
          />
        </ol>
      </section>

    </div>
  );
}

export default App;
