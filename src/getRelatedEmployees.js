const data = require('../data/zoo_data');

const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

const isManager = (id) => {
  if (id === '9e7d4524-363c-416a-8759-8aa7e50c0992' || id === olaId || id === burlId) {
    return true;
  }
  return false;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === true) {
    return data.employees.filter((e) => e.managers.includes(managerId))
      .map((e) => `${e.firstName} ${e.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
