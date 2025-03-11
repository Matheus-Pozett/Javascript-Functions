const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  const employeeFound = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  return employeeFound;
};

module.exports = getEmployeeByName;
