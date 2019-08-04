const sensorData = require("./sensorData");

const printLast = (dataArray) => {
  const lastEl = [
    dataArray[dataArray.length - 4],
    dataArray[dataArray.length - 3],
    dataArray[dataArray.length - 2],
    dataArray[dataArray.length - 1]
  ];
  console.log(lastEl);
}

const splitData = (data) => {
  const split = data.split("temp"); 

  return {
    OD: split[0],
    temp: split[1],
  }
} 


const ODtoArray = (data) => {
  const split = data.split(",");
  split.shift();
  split.pop();
  const dataArray = split.join().split(/,(?=\[)/g);
  dataArray.pop();
  const parsed = dataArray
    .map(point => JSON.parse(point))
    .map(point => point[0])
    .map(point => {
      const timestamp = point;
      var d = new Date(timestamp);

      return d;
    })
  
    printLast(parsed);
} 

const processData = data => {
  const { OD, temp } = splitData(data);
  const ODarray = ODtoArray(OD); 


  // const split = data.split(",");
  // split.shift();
  // split.pop();
  // split.pop();
  // const dataArray = split.join().split(/,(?=\[)/g);
  // .map(point => JSON.parse(point))
  // .map(point => point[0])


};

// console.log(lastEl);
const res = processData(sensorData);

test("foo", () => {
  expect(true).toBe(true);
});
