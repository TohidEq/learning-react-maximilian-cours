import { useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3001/trips");
  const { data: trips, isPending, error } = useFetch(url, { type: "GET" });

  const [showTrips, setShowTrips] = useState(true);

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
      <button
        onClick={() => {
          setShowTrips(!showTrips);
        }}
      >
        {showTrips ? "hide" : "show"} trips
      </button>
      {showTrips && (
        <div className="">
          <button onClick={clickHandler}>id=1</button>
          <button onClick={clickHandler2}>id=all</button>
          {isPending && <div>Loading Trips...</div>}
          {error && <div>Error: {error}</div>}
          <ul>
            {trips &&
              trips.map((trip) => (
                <li>
                  id:{trip.id}, title:{trip.id}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TripList;
