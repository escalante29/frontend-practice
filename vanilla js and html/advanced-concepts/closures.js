// /**
//  * Download data from the specified URL.
//  *
//  * @async
//  * @function downloadData
//  * @param {string} url - The URL to download from.
//  * @returns {Promise<string>} The data from the URL.
//  */
function createCaffeineAddict(coffeeType) {
  const addiction = `addicted to ${coffeeType}`;
  return function getHigh() {
    const highMessage = `Feeling wired and ${addiction}!`;
    console.log(highMessage);
  };
}
const espressoJunkie = createCaffeineAddict("espresso");
const latteLover = createCaffeineAddict("latte");
espressoJunkie();
latteLover();
