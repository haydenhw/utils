const mockData = {
  "2017-12-31": 13860.1363,
  "2018-01-01": 13412.44,
  "2018-01-02": 14740.7563
};

const expected = [
  { date: "2017-12-31", value: 13860.1363 },
  { date: "2018-01-01", value: 13412.44 },
  { date: "2018-01-02", value: 14740.7563 }
];

const parseData = data => {
const dataSet = Object.keys(data).reduce((dataArray, key) => {
      const dataPoint = {
        date: key,
        value: data[key],
      };
      dataArray.push(dataPoint);
      return dataArray;
  }, []);

  return dataSet;
};

const actual = parseData(mockData);
console.log(actual);

test("foo", () => {
  expect(true).toBe(true);
});
