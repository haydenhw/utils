
format a timestamp
``` js
const formatTime = (timestamp) => new Date(timestamp).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
formatTime(Date.now()) // 6:44 PM
``` 

get time between function calls
``` js
const timeDiff = () => {
    return {
        evenMsg: false,
        lastMsgTime: Date.now(),
        measure() {
            if (!this.evenMsg) {
                console.log(this.evenMsg);
                this.lastMsgTime = Date.now();
                this.evenMsg = true;
            } else {
                const timeDiff = Date.now() - this.lastMsgTime;
                console.log({timeDiff});
                this.evenMsg = false;
            }
        }
    }
};
const printDiff = timeDiff();
printDiff.measure();
``` 


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

convert a time string like "2:00" to seconds 
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

get time string for right now
``` js
const currentHHMMSS = () => {
  const sm = secondsSinceMidnight();
  return (secondsToHHMMSS(sm));
}
```

get seconds since midnight
``` js
    const secondsSinceMidnight = () => {
        const now = new Date();
        const then = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(), 0, 0, 0); 

        return (now.getTime() - then.getTime()) / 1000;
    }
```

add hours to a time string
``` js
const addHours = (additionalHours) => (timeStr) => {
  const splitTimeStr = timeStr.split(':');
  let hours = Number(splitTimeStr[0]);
  const minutes = splitTimeStr[1];
  const seconds = splitTimeStr[2];
  hours += additionalHours;
  hours = hours > 23 ? hours - 24 : hours;
  hours = hours < 0 ? hours + 24 : hours;
  hours = (hours + '').length < 2 ? '0' + hours : hours;

  let resultStr =`${hours}:${minutes}`;
  return seconds ? resultStr + `:${seconds}` : resultStr;
};
```

run a command at given time (needs to be modified for use)
``` js
const at = (timeStr, callback, printDebugMsg) => {
    const debugDivisor = 1;
    const utc = pstToUTC(timeStr);
    const split = utc.split(':').map(Number);
    const hours = split[0];
    const minutes = split[1];
    const seconds = split[2] || 0;

    const now = new Date();
    const then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours,
        minutes,
        seconds,
        0
    );

    let milliSecsTillTime = (then - now) / debugDivisor;

    if (milliSecsTillTime < 0) {
        milliSecsTillTime += (24 * 60 * 60 / debugDivisor * 1000);
    }

    printDebugMsg(timeStr, milliSecsTillTime);

    return setTimeout(callback, milliSecsTillTime);
}
```
