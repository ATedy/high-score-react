import React from "react";
import "./App.css";
import CountryName from "./CountryName";
import {allCountryScores} from "./countryScoreData";
import PlayerScore from "./PlayerScore";

function App() {
  allCountryScores.sort((a, b) => {
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
      {allCountryScores.map((country) => (
        <div className="card-header">
          <CountryName oneCountry={country} />
          <PlayerScore countryScore={country.scores} />
        </div>
      ))}
    </div>
  );
}

export default App;
