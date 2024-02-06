/**
 * Analyzes car mileage data using high order array methods.
 * @param {Array} cars - An array of car objects.
 * @returns {Object} - An object containing calculated values.
 */
function analyzeCarMileage(cars) {
  let lowestMileageCar = { mileage: Infinity };
  let highestMileageCar = { mileage: 0 };
  let totalMileage = 0;

  cars.map((car) => {
    if (car.mileage < lowestMileageCar.mileage) lowestMileageCar = car;
    if (car.mileage > highestMileageCar.mileage) highestMileageCar = car;
    totalMileage += car.mileage;
  });

  return {
    averageMileage: totalMileage / cars.length,
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
