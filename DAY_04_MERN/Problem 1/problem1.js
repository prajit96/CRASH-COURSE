// Counter is using closure
function createCounter() {
    let count = 0;
    return function () {
      return ++count;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  
  // Rate limiter using closure
  function createRateLimiter(limit) {
    let count = 0;
    return function () {
      if (count >= limit) {
        console.log("Rate limit is exceeded");
        return false;
      }
      count++;
      return true;
    };
  }
  
  const limiter = createRateLimiter(3);
  console.log(limiter()); // Output: true
  console.log(limiter()); // Output: true
  console.log(limiter()); // Output: true
  console.log(limiter()); // Output: Rate limit exceeded
  