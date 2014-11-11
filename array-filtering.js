// make our array
var numbers = [1,2,3,4,5,6,7,8,9,10];


// make our filtered var, leaving it empty for now
var filtered;

// time to do some mean-ass filtering...
filtered = numbers.filter(function evenNumbers(number) {
  return number % 2 === 0; // returns even numbers to the function
})

console.log(filtered);