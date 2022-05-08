import './App.css';
import Track from "./components/Track"

function App() {
  return (
    <div className="App">
      <nav>

      </nav>

      <div className="playlist-vitals">

      </div>

      <div className="playlist-toolbar">

      </div>

      <div className="playlist-header">

      </div>

      <hr />

      <ol className="tracks-section">
        <Track
          albumCover = "./img/Album Artwork.png"
          songName = "Space Ghoast Coast to Coast"
          artist = "Glass Animals"
          albumName = "Dreamland (+ Bonus Levels)"
          dateAdded = "2 months ago"
          duration = "3:07"
        />
      </ol>
    </div>
  );
}

export default App;
