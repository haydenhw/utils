convert military to AmPm
``` js
export const militaryToAmPm = (timeStr) => {
  const splitTimeStr = timeStr.split(':');
  const minutes = splitTimeStr[1];
  let hours = Number(splitTimeStr[0]);

  if (hours === 0) {
    return `12:${minutes} am`;
  }

  if (hours === 12) {
    return `${hours}:${minutes} pm`;
  }

  if (hours > 12) {
    hours -= 12;
    return `${hours}:${minutes} pm`;
  }

  return `${hours}:${minutes} am`;
};
```

convert a time string like "2:00" to minutes
``` js
const hhmmToSeconds= (hhmm) => {
  const a = hhmm.split(':');
  return Number(a[0]) * 3600 + Number(a[1]) * 60; 
}
```

covert seconds since midnight to hh:mm or hh:mm:ss timestamp
``` js
const secondsToHHMM = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  let minutes = Math.floor(seconds / 60);
  minutes = (minutes + '').length < 2 ? '0' + minutes : minutes;
  return `${hours}:${minutes}`;
}

const secondsToHHMMSS = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  let minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  minutes = (minutes + '').length < 2 ? '0' + minutes : minutes;
  seconds = (seconds + '').length < 2 ? '0' + seconds : seconds;
  return `${hours}:${minutes}:${seconds}`;
}
```