import { useState, useEffect, useCallback } from "react";
const TripList = () => {
  const [trips, setTrips] = useState();
  const [load, setLoad] = useState(false);
  const [url, setUrl] = useState("http://localhost:3001/trips");

  const fetchTrips = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    setTrips(json);
    setLoad(true);
  }, [url]);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  console.log(trips, "dsa");
  const clickHandler = () => {
    setUrl("http://localhost:3001/trips?id=1");
  };

  const clickHandler2 = () => {
    setUrl("http://localhost:3001/trips");
    setUrl("http://localhost:3001/trips");
  };

  return (
    <div>
      <h2>Trip List</h2>
      <ul>
        {trips &&
          trips.map((trip) => (
            <li>
              id:{trip.id}, title:{trip.id}
            </li>
          ))}
      </ul>

      <button onClick={clickHandler}>id=1</button>
      <button onClick={clickHandler2}>id=all</button>
    </div>
  );
};

export default TripList;
