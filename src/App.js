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
            albumCover = "./img/album covers/graduation.jpg"
            songName = "Good Morning"
            artist = "Kanye West"
            albumName = "Graduation"
            dateAdded = "2 months ago"
            duration = "3:07"
          />
          <Track
            number = "2"
            albumCover = "./img/album covers/astroworld.jpg"
            songName = "SICKO MODE"
            artist = "Travis Scott"
            albumName = "ASTROWORLD"
            dateAdded = "Dec 20, 2021"
            duration = "3:07"
          />
          <Track
            number = "3"
            albumCover = "./img/album covers/thank me later.jpg"
            songName = "Find Your Love"
            artist = "Drake"
            albumName = "Thank Me Later"
            dateAdded = "Dec 20, 2021"
            duration = "3:29"
          />
          <Track
            number = "4"
            albumCover = "./img/album covers/sativa.jpg"
            songName = "Sativa"
            artist = "Jhene Aiko"
            albumName = "Trip"
            dateAdded = "Dec 20, 2021"
            duration = "4:37"
          />
          <Track
            number = "5"
            albumCover = "./img/album covers/house of balloons.jpg"
            songName = "The Morning"
            artist = "The Weeknd"
            albumName = "Trilogy"
            dateAdded = "Dec 20, 2021"
            duration = "5:14"
          />
          <Track
            number = "6"
            albumCover = "./img/album covers/man on the moon.webp"
            songName = "She Knows This"
            artist = "Kid Cudi"
            albumName = "Man On the Moon"
            dateAdded = "2 months ago"
            duration = "3:37"
          />
          <Track
            number = "7"
            albumCover = "./img/album covers/views.jpg"
            songName = "Controlla"
            artist = "Drake"
            albumName = "Views"
            dateAdded = "2 months ago"
            duration = "4:05"
          />

          <Track
            number = "8"
            albumCover = "./img/album covers/my beautiful dark twisted fantasy.jpg"
            songName = "Devil In A New Dress"
            artist = "Kanye West"
            albumName = "My Beautiful Dark Twisted Fantasy"
            dateAdded = "2 months ago"
            duration = "4:40"
          />
          <Track
            number = "9"
            albumCover = "./img/album covers/good kid, m.A.A.d city.jpg"
            songName = "Money Trees"
            artist = "Kendrick Lamar"
            albumName = "good kid, m.A.A.d city"
            dateAdded = "2 months ago"
            duration = "6:26"
          />
        </ol>
      </section>

    </div>
  );
}

export default App;
