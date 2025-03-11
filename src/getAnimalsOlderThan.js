const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalsOlderThan = data.species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);

  return animalsOlderThan;
};

module.exports = getAnimalsOlderThan;
