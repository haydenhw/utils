
convert a time string like "2:00" to minutes
``` js
const hhmmToSeconds= (hhmm) => {
  const a = hhmm.split(':');
  return Number(a[0]) * 3600 + Number(a[1]) * 60; 
}
```

covert seconds to hh:mm timestamp
``` js
const secondsToHHMM = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  let minutes = Math.floor(seconds / 60);
  minutes = minutes === 0 ? '00' : minutes
  minutes = (minutes + '').length < 2 ? '0' + minutes : minutes;
  return `${hours}:${minutes}`;
}
```