import CardDate from "../CardData/CardDate";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-title">title:{props.title}</div>
      <div className="card-price">price:{props.price}</div>
      <div className="card-date">
        date:
        <CardDate date={props.date} />
      </div>
    </div>
  );
};

export default Card;
