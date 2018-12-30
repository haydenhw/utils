## Random Numbers

Numbers:
```js
const getRandomNumber = (min, max) => (
  Math.random() * (max - min) + min
)
```
Note: max is exclusive !!


```js
const getRandomInteger = (min, max) => (
  Math.floor(Math.random() * (max - min) + min)
);
```
Note: max is exclusive !!
