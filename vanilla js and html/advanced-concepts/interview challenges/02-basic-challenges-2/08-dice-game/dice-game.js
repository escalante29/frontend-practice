/**
 * Simulates the dice game.
 * @param {number} numSimulations - The number of times to simulate the dice game.
 * @returns {Array} - An array of simulation result objects.
 */
function diceGameSimulation(numSimulations) {
  const result = Array.from(Array(numSimulations)).map((e, i, arr) => {
    const dice1 = getRandomIntInclusive(1, 6);
    const dice2 = getRandomIntInclusive(1, 6);
    const sum = dice1 + dice2;
    const result = getResultMessage(sum);

    return {
      dice1,
      dice2,
      sum: sum,
      result,
    };
  });
  return result;
}

function getResultMessage(sum) {
  let msg = '';
  switch (sum) {
    case 7:
    case 11:
      msg = 'win';
      break;
    case 2:
    case 3:
    case 12:
      msg = 'lose';
      break;
    default:
      msg = 'roll again';
      break;
  }
  return msg;
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

module.exports = diceGameSimulation;
