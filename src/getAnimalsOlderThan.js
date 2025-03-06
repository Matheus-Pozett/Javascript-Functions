const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalsOlderThan = data.species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);

  return animalsOlderThan;
};

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
