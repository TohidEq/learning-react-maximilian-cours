// i hate to wrrite console.log =D
const log = (...x) => {
  console.log(x);
};

// == spread rest operator (017) == //
// spread <...>
const numbers = [1, 2, 3];

const numbersNew = [...numbers, 4, 5, 6];
log("new numbers: " + numbersNew);

const numbersWithoutSreadOp = [numbers, 4, 5, 6];
log("without spred operator: ", numbersWithoutSreadOp);

log("==========");

// rest operator func(...args)

const filter = (...args) => {
  return args.filter((element) => element === 2);
};

const testFilter = [1, 2, 3, 4, 5];
log(filter(testFilter));

// == destructing (018) == //
// array
const example1 = [1, 2, 3];
const [item1, , item3] = example1;
log("item1: ", item1);
log("item3: ", item3);

// object
const { bb } = { bb: "fdfsdf", ee: 45 }; //=>> bb = 'fdfsdf'

log("bb: ", bb);

const example = () => {};
