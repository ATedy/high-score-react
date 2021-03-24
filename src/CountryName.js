import React from "react";

// as props this component will receive a single country object from the array
const CountryName = (props) => {
  return (
    <p className="text-center">
      HIGH SCORES: &nbsp; &nbsp;{" "}
      <span className="mr-3"> {props.oneCountry.name}</span>
    </p>
  );
};

export default CountryName;
