const SelectType = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeType(event.target.value);
  };
  return (
    <>
      <select
        name="idk-name"
        id="nothing-bro"
        value={props.selected}
        onChange={dropDownChangeHandler}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </>
  );
};

export default SelectType;
