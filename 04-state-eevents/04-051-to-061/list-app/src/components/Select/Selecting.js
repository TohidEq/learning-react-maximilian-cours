import ShowCards from "./ShowCards";
import SelectType from "./SelectType";
import { useState } from "react";
const Selecting = () => {
  const [customType, setCustomType] = useState(2); // 1, 2, 3 //
  const filterChangeHandler = (selectedType) => {
    setCustomType(parseInt(selectedType));
  };

  return (
    <>
      <SelectType selected={customType} onChangeType={filterChangeHandler} />
      <ShowCards selected={customType} />
    </>
  );
};

export default Selecting;
