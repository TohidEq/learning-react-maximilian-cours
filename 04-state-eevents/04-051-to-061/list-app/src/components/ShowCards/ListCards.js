import useCards from "./useCards";
import Card from "../Card/Card";
import CardDate from "../CardData/CardDate";

const ListCards = () => {
  const { data: cards } = useCards();

  const myElement = cards.map((card) => {
    const { title, price, date } = card;

    return <Card date={date} price={price} title={title} />;
  });

  return myElement;
};

export default ListCards;
