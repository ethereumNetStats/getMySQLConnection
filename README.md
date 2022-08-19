# About
This package gets pool connections.  

# Usage
```javascript
import {currentTimeReadable, unixTimeReadable} from "@pierogi.dev/readable_time";

//This will display a current date time string like 2022-08-01 12:00:00
console.log(currentTimeReadable);

//This will display a specific date time string 2022-08-17 07:44:23
console.log(unixTimeReadable(1660722263));
```

# Note
Both functions return UTC time.  
An argument of `unixTimeReadable` must be on the second timescale, not on the micro second timescale.
