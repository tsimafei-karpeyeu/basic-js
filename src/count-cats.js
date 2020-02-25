module.exports = function countCats(input) {
  let result = 0;
  const cat = '^^';
  for (let i = 0; i < input.length; i++) {
    // console.log(`external array`, input[i]);
    for (let j = 0; j < input[i].length; j++) {
      // console.log('internal', input[i][j]);
      if (cat === input[i][j]) {
        result += 1;
      }
    }

  }

  return result;
};
