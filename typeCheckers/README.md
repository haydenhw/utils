## Type Checkers

Numbers:
```js
const isNumber = (val) => typeof val === 'number';
```
Strings:
```js
const isString = val => typeof val === 'string' || val instanceof String;
```
Bools:
```js
const isBool = val => typeof val === 'boolean';
```
Function:
```js
const isFunc = (val) => typeof val === 'function';
```
Arrays:
```js
const isArray = val => Array.isArray(val);
```
Object:
```js
const isObject = val => (
  val === null
    ? false
    : Array.isArray(val)
    ? false
    : typeof val === 'function'
    ? false
    : typeof val === 'object'
);
```
