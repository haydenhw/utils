const compose = require('ramda.compose');

const isNumber = val => typeof val === 'number';
const isBool = val => typeof val === 'boolean';
const isFunc = val => typeof val === 'function';
const isString = val => typeof val === 'string' || val instanceof String;
const isArray = val => Array.isArray(val);

const isObject = val => (
  val === null
    ? false
    : Array.isArray(val)
    ? false
    : typeof val === 'function'
    ? false
    : typeof val === 'object'
);

const getType = (propVal) => {
  if (isNumber(propVal)) {
    return 'number';
  }

  if (isBool(propVal)) {
    return 'bool';
  }

  if (isString(propVal)) {
    return 'string';
  }

  if (isArray(propVal)) {
    return 'array';
  }

  if (isObject(propVal)) {
    return 'object';
  }

  if (isFunc(propVal)) {
    return 'func';
  }

  return 'FIX_ME';
}

const getPropType = (type) => `PropTypes.${type}`;

const getPropTypeLines = props => (
  Object.keys(props).reduce((acc, curr) => {
    acc[curr] = getPropType(getType(props[curr]));
    return acc;
  }, {})
);

const stringify = props => (
   JSON.stringify(props, null, 2)
);

const wrapPropTypes = componentName => propTypeLines => (
  `${componentName}.propTypes = ${propTypeLines}`
);

const removeQuotes = str => str.replace(/"/g, '');

const logPropTypes = componentName => (
  compose(
    console.log,
    removeQuotes,
    wrapPropTypes(componentName),
    stringify,
    getPropTypeLines
  )
);

module.exports = logPropTypes;
