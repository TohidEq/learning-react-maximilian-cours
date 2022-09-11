// i hate to wrrite console.log =D
const log = (...x) => {
  console.log(x);
};

// == refrence == //
const person = {
  name: "tohid",
};
const newPerson = person;
newPerson.name = "ali";

const newPersonNumber2 = {
  ...person,
};
newPersonNumber2.name = "mmd";

log("1: ", newPerson);
log("2: ", newPersonNumber2);
