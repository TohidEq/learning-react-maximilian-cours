import { useState, useEffect } from "react";
const TripList = () => {
  const [trips, setTrips] = useState();
  const [url, setUrl] = useState("http://localhost:3000/trips");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setTrips(json));
  }, [url]);

  console.log(trips, "dsa");
  const clickHandler = () => {
    setUrl("http://localhost:3000/trips?id=1");
  };

  const clickHandler2 = () => {
    setUrl("http://localhost:3000/trips");
  };

  return (
    <div>
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li>{trip.id}</li>
        ))}
      </ul>

      <button onClick={clickHandler}>id=1</button>
      <button onClick={clickHandler2}>id=all</button>
    </div>
  );
};

export default TripList;
