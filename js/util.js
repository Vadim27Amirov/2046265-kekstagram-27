const getRandomInRange = (min, max) => {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);
  return (max <= min || min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number')
    ? NaN
    : Math.floor(Math.random() * ((maxRounded - minRounded + 1)) + minRounded);
};

getRandomInRange();

<<<<<<< HEAD
const getRandomArrayElement = (array) =>
  array[getRandomInRange(0, array.length - 1)];

export {getRandomInRange, getRandomArrayElement};
=======
const getEscapeEvent = (evt, action) => {
  if (evt.key === 'Escape') {
    action();
  }
};

const checkStringLength = (string, length) => string.length <= length;

checkStringLength('', 140);

const getRandomArrayElement = (array) =>
  array[getRandomInRange(0, array.length - 1)];

export {getRandomInRange, getEscapeEvent, getRandomArrayElement};
>>>>>>> fe8f099d90059c0afbf4c8d763c4bc0f45823af5
