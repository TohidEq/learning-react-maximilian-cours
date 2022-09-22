import useCards from "../ShowCards/useCards";
import Card from "../Card/Card";

const ShowCards = (props) => {
  const { data: cards } = useCards();

  const myElement = cards.map((card) => {
    const { title, price, date, type } = card;
    console.log("selected type:", props.selected, " - this card type:", type);
    if (type === props.selected)
      return <Card date={date} price={price} title={title} type={type} />;
  });

  return <>{myElement}</>;
};

export default ShowCards;
