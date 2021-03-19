import React from "react";

const CountryName = (props) => {
  return (
    <p className="text-center">
      HIGH SCORES: &nbsp; &nbsp;{" "}
      <span className="mr-3"> {props.oneCountry.name}</span>
    </p>
  );
};

export default CountryName;
