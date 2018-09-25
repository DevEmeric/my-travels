import React from "react"

const Travel = ({ destination, country, photo, distance }) => (
    <div>
        <img src={photo} alt={country} />
        <p>{destination}</p>
        <p>{country}</p>
        <p>{distance}</p>
    </div>
  );
  
  export default Travel;