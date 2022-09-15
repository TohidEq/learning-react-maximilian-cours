const CardDate = (props) => {
  const myDate = new Date(props.date);

  const day = myDate.toLocaleDateString("en-US", { day: "2-digit" });
  const month = myDate.toLocaleDateString("en-US", { month: "long" });
  const year = myDate.getFullYear();

  return (
    <>
      <div className="card-date-day"> --day:{day}</div>
      <div className="card-date-day"> --month:{month}</div>
      <div className="card-date-day"> --year:{year}</div>
    </>
  );
};

export default CardDate;
