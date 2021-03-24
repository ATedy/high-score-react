import React, {useState} from "react";
import "./App.css";
import CountryName from "./CountryName";
import {allCountryScores} from "./countryScoreData";
import PlayerScore from "./PlayerScore";

function App() {
  const [countryView, setCountryView] = useState(false);

  function handler() {
    setCountryView(!countryView);
  }
  const highScore = allCountryScores.map((country) => country.scores).flat();
  console.log(highScore);
  allCountryScores.sort((a, b) => {
    // sorting the countries based on their names
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="card">
      <h3 className="text-center">High Scores per Country</h3>
      <button onClick={handler}>All-Country-HighScore</button>
      {countryView ? (
        allCountryScores.map((country) => (
          <div className="card-header">
            <CountryName oneCountry={country} />
            <PlayerScore oneCountryScore={country.scores} />
          </div>
        ))
      ) : (
        <PlayerScore oneCountryScore={highScore} />
      )}
    </div>
  );
}

export default App;
