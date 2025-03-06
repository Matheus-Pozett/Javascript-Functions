const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((acc, item) => {
  if (item.age < 18) acc.child += 1;
  else if (item.age >= 18 && item.age < 50) acc.adult += 1;
  else acc.senior += 1;
  return acc;
}, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const valueEntrants = countEntrants(entrants);
  const { child, adult, senior } = valueEntrants;
  const { child: childPrice, adult: adultPrice, senior: seniorPrice } = data.prices;

  const sumPrices = child * childPrice + adult * adultPrice + senior * seniorPrice;
  const totalPrice = Number(sumPrices.toFixed(2));

  return totalPrice;
};

console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

module.exports = { calculateEntry, countEntrants };
