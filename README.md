
convert a time string like "2:00" to minutes
``` js
const hhmmToMinutes = (hhmm) => {
  const a = hhmm.split(':');
  return Number(a[0]) * 60 + Number(a[1]); 
}
```