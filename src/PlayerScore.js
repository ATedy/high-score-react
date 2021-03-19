import React from "react";

const PlayerScore = (props) => {
  props.oneCountryScore.sort(function (person1, person2) {
    return person2.s - person1.s;
  });
  return (
    <ul className="list-group">
      {props.oneCountryScore.map((score, index) => (
        <li className="list-group-item" key={index}>
          {score.n.toUpperCase()} {score.s}{" "}
        </li>
      ))}
    </ul>
  );
};

export default PlayerScore;
