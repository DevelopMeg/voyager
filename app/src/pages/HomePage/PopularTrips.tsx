import * as React from "react";
import { NavLink } from "react-router-dom";

const PopularTrips = (): JSX.Element => {
  return (
    <>
      <h3>Popular destination</h3>
      <div></div>
      <NavLink to="/popular-trips">view all popular destination</NavLink>
    </>
  );
};

export default PopularTrips;
