const EventCard = ({ myEvents }) => {
  return myEvents.map((event) => {
    return (
      <div className="" key={event.id}>
        text: {event.text}
      </div>
    );
  });
};

export default EventCard;
