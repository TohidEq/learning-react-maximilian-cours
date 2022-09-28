import { useRef, useState } from "react";
import EventCard from "./EventCard";
const Events = () => {
  const [myEvents, SetMyEvents] = useState([
    {
      text: "text test",
      id: 1234,
    },
    {
      text: "tesesertestsetes",
      id: 65423,
    },
  ]);

  const myTextRef = useRef();
  const addEventHandler = (e) => {
    ////////////////////////////////////////////
    e.preventDefault(); // no refresh page :D //
    ////////////////////////////////////////////

    SetMyEvents((prevEvents) => {
      return [
        ...prevEvents,
        {
          text: myTextRef.current.value,
          id: Math.floor(Math.random() * 10000),
        },
      ];
    });
  };

  return (
    <>
      <form action="" onSubmit={addEventHandler}>
        <input type="text" required placeholder="Event?..." ref={myTextRef} />
        <button type="submit">Set Event</button>
      </form>
      <EventCard myEvents={myEvents} />
    </>
  );
};

export default Events;
