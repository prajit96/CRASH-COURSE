// Custom map function
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
  const numbers = [1, 2, 3, 4];
  const squared = customMap(numbers, (num) => num * num);
  console.log(squared); // Output: [1, 4, 9, 16]
  