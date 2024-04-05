function getIdGeneratorFunction(startFrom) {
  throw new Error('Not implemented');
}


const getId4 = getIdGenerator(4);
const getId10 = gerIdGenerator(10);
console.log(getId4()) //=> 4
console.log(getId10()) //=> 10
console.log(getId4()) //=> 5
console.log(getId4()) //=> 6
console.log(getId4()) //=> 7
console.log(getId10()) //=> 11
