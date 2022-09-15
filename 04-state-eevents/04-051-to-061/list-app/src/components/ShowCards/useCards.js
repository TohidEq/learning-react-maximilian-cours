import { useState, useEffect } from "react";

const useCards = (props) => {
  let defaultCards = [
    {
      title: "Title 1",
      price: 23,
      date: new Date(2022, 1, 1),
    },
    {
      title: "Title 2",
      price: 24,
      date: new Date(2022, 2, 2),
    },
  ];
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("myCards") || JSON.stringify(defaultCards))
  );
  useEffect(() => {
    localStorage.setItem("myCards", JSON.stringify(data));
  }, [data]);

  return { data };
};

export default useCards;
