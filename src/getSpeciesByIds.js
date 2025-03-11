const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids) {
    return [];
  }
  const speciesById = data.species.filter((specie) => ids.includes(specie.id));

  return speciesById;
};

module.exports = getSpeciesByIds;
