const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species, sex } = animal || {};

  if (!species) {
    return data.species.reduce((acc, item) => {
      acc[item.name] = item.residents.length;
      return acc;
    }, {});
  }

  const selectedSpecie = data.species.find((specie) => specie.name === species);

  if (!sex) {
    return selectedSpecie.residents.length;
  }

  return selectedSpecie.residents.filter((resident) => resident.sex === sex).length;
};

module.exports = countAnimals;
