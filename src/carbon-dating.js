const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(input) {
  const parsedInput = parseFloat(input);

  if (parsedInput > MODERN_ACTIVITY) {
    return false;
  }

  if (!input) {
    return false;
  }

  if (typeof input !== 'string') {
    return false;
  }

  if (typeof parsedInput !== 'number' || Number.isNaN(parsedInput)) {
    return false;
  }

  if (parsedInput <= 0) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / parsedInput) / (0.693 / HALF_LIFE_PERIOD));
};
