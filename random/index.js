// max is exclusive
const getRandomNumber = (min, max) => (
  Math.random() * (max - min) + min
)

// max is exclusive
const getRandomInteger = (min, max) => (
  Math.floor(Math.random() * (max - min) + min)
);
