import CardDate from "../CardData/CardDate";

const Card = (props) => {
  const card = (
    <>
      <div
        className="card"
        style={{ padding: 5, margin: 15, backgroundColor: "green" }}
      >
        <div className="card-title">title:{props.title}</div>
        <div className="card-price">price:{props.price}</div>
        <div className="card-date">
          ddd date:
          <CardDate date={props.date} />
        </div>
      </div>
    </>
  );
  return card;
};

export default Card;
