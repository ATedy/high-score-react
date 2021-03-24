import React, {useState} from "react";
import "./App.css";
import CountryName from "./CountryName";
import {allCountryScores} from "./countryScoreData";
import PlayerScore from "./PlayerScore";

function App() {
  // based on this state page will render either all countires or for each country
  const [countryView, setCountryView] = useState(false);

  function viewHandler() {
    setCountryView(!countryView);
  }
  // It will map the scores of each country into a new array highScore
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

  /* 
    We have 2 conditions inside the return
    1. will change the button text based on the state of the countryView variable
    2. Will render either all the score or of each country based on the countryView variable
  */
  return (
    <div className="card">
      <h3 className="text-center">High Scores per Country</h3>
      <button onClick={viewHandler}>
        {countryView ? " All-Country-HighScore" : "Country-HighScore"}
      </button>

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
