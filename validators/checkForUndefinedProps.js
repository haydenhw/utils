export const getUndefinedProps = (obj) => {
  const undefinedProps = [];
  Object.keys(obj).forEach((key) => {
    const keyVal = obj[key];
    if (keyVal === null || keyVal === undefined) {
      undefinedProps.push(key);
    }
  });

  return undefinedProps;
};

export const throwUndefinedPropError = (undefinedProps) => {
  if (undefinedProps.length > 0) {
    const joinedProps = undefinedProps.length > 1 ? undefinedProps.join(', ') : undefinedProps[0];
    const message = `The following keys had undefined values: ${joinedProps}`;
    throw new Error(message);
  }
};

export const checkForUndefinedProps = (obj, undefinedPropGetter, errorThrower) => {
  const undefinedProps = undefinedPropGetter(obj);
  errorThrower(undefinedProps);
};

describe('checkForUndefinedProps functions', () => {
  test('throw an error if properties are undefined', () => {
    const testObj = { foo: null, bang: 'baz', biz: undefined };
    const testFunc = () => {
      checkForUndefinedProps(testObj, getUndefinedProps, throwUndefinedPropError);
    };
    expect(testFunc).toThrow('The following keys had undefined values: foo, biz');
  });
  test('don\'t throw an error if properties are defined', () => {
    const testObj = { foo: 'bar', bang: 'baz', biz: 'bang' };
    const testFunc = () => {
      checkForUndefinedProps(testObj, getUndefinedProps, throwUndefinedPropError);
    };
    expect(testFunc).not.toThrow();
  });
  test('don\'t throw an error if properties are 0 or empty strings', () => {
    const testObj = { foo: 0, bang: '', biz: 'bang' };
    const testFunc = () => {
      checkForUndefinedProps(testObj, getUndefinedProps, throwUndefinedPropError);
    };
    expect(testFunc).not.toThrow();
  });
});
