import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
      
//     </div>
//   );
// }

// export default App;

function LibraryPage() {
  return (
    <div className="pageWrapper">
      <header className="App-header">
        <h1>Reverb</h1>
      </header>
      <div className="nav-bar-left">
        <div className="navigation-button">Navigation</div>
        <div className="search-button">Search</div>
        <div className="library-button">Library</div>
        <div className="songs-button">Songs</div>
        <div className="albums-button">Albums</div>
        <div className="playlists-button">Playlists</div>
        <div className="podcasts-button">Podcasts</div>
      </div>

      <div className="middle-section">
        {/* <div className="user-display">Good morning, ${user}</div> */}
        <div className="login-button">
          <button>Login</button>
        </div>
        <div className="register-button">
          <button>Register</button>
        </div>
        <div className="featured-playlists">Featured Playlists</div>
        <div className="discover-playlist">Discover Weekly</div>
        <div className="recent-playlist">Recently Played</div>
      </div>

      <div className="nav-bar-right">
        <div className="login-button">Login</div>
        <div className="register-button">Register</div>
        <div className="genres-button">Genres</div>
        <div className="videos-button">Videos</div>
        <div className="settings-button">Settings</div>
      </div>
      <div className="bottom-player"></div>
    </div>
  );
};

export default LibraryPage;