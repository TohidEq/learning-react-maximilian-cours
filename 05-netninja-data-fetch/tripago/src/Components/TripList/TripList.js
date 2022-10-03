import { useState, useEffect } from "react";
const TripList = () => {
  const [trips, setTrips] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((response) => response.json())
      .then((json) => setTrips(json));
  }, []);

  console.log(trips, "dsa");

  return (
    <div>
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li>{trip.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
