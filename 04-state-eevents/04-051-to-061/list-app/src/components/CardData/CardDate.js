const CardDate = (props) => {
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <>
      <div className="card-date-day"> --day:{day}</div>
      <div className="card-date-day"> --month:{month}</div>
      <div className="card-date-day"> --year:{year}</div>
    </>
  );
};

export default CardDate;
