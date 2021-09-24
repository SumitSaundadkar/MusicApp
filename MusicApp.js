import React, { useState } from "react";
import "./Musicstyles.css";

const songs = {
  hindi: [
    {
      name: "Yeh HasinVadiyaan",
      artist: "A.R.Rahman,S.P.B,Chitra",
      link:
        "https://open.spotify.com/track/6NmGIj2leVHRKkHEGyechJ?si=9cf1639ecfe645e7"
    },
    {
      name: "Dil Se Re",
      artist: "A.R.Rahan,Anuradha",
      link:
        "https://open.spotify.com/track/30yySOIXHZYx94sLAySy2j?si=6a3d8857f70242d9"
    },
    {
      name: "Tum Ho",
      artist: "Mohit Chuahan",
      link:
        "https://open.spotify.com/track/7uNnlVit5qDvfOje0pqICF?si=c381662b1f4b4e0d"
    }
  ],
  Tamil: [
    {
      name: "Munbe Va",
      artist: "A.R.Rahman,Naresh Iyer,Shreya Ghoshal",
      link:
        "https://open.spotify.com/track/23MwjnLi2vYwS9fBuWpIMb?si=81ef386cd34d4db6"
    },

    {
      name: "Neethane",
      artist: "A.R.Rahman,Shreya Ghoshal",
      link:
        "hhttps://open.spotify.com/track/0aI4SOX8BknvAfOs607FlV?si=46b7c9a5ed6e4768"
    },
    {
      name: "Kadhal Sadugudu",
      artist: "S.P.B Charan",
      link:
        "https://open.spotify.com/track/4shmzSwbjpKUIlNhxzlVeC?si=c73dd87edc114d5c"
    }
  ],
  Marathi: [
    {
      name: "Jiv Dangla",
      artist: "Hariharan,Shreya Ghoshal",
      link:
        "https://open.spotify.com/track/5ILj64D0dUZjh5QWx0FfMT?si=b0bd7b2684124d5b"
    },
    {
      name: "Tik Tik Waje",
      artist: "Sonu Ngam,Sayli Pankaj",
      link:
        "https://open.spotify.com/track/3CY8kcVqpfGHhHC4wkBVpB?si=7a43b8a2a37f4c8e"
    },
    {
      name: "Mauli Mauli",
      artist: "Ajay-Atul",
      link:
        "https://open.spotify.com/track/2wlvvOjuDENy0b7DbdZ6Dr?si=cd2ef81204e54358"
    }
  ]
};
const songsRecommended = Object.keys(songs);

export default function App() {
  let [songName, setSongName] = useState("hindi");
  function btnClickHandler(genre) {
    setSongName(genre);
  }
  return (
    <div className="App">
      <header>
        <h1 className="heading"> Music horen</h1>
        <h2 className="description">
          <span>🍜Eat- 😴Sleep-💻code & 🎧Listen Music</span>
        </h2>
      </header>

      <div className="container">
        {songsRecommended.map(function (genre) {
          return (
            <button className="buttons" onClick={() => btnClickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        <ul className="result">
          {songs[songName].map(function (song) {
            return (
              <li>
                <h2>{song.name}</h2>
                <h4>{song.artist}</h4>
                <p>
                  <a href={song.link} target="_blank" rel="noopener noreferrer">
                    Listen Here
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <footer>
        <p>All songs link to spotify app.</p>
      </footer>
    </div>
  );
}
