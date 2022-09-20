const SelectType = () => {
  const dropDownChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <select name="idk-name" id="nothing-bro" onChange={dropDownChangeHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </>
  );
};

export default SelectType;
