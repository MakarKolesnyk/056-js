// forEach
const numbers = [2, 4, 6, 9, 7, 10];
console.log(numbers);
// numbers.forEach((number, index, array) => {
//   console.log(number, index, array);
// });
// numbers.forEach((number) => {
//   console.log(number, number ** 2);
// });

// map
const newArrayNumbers = numbers.map((elem) => elem * elem);
console.log(newArrayNumbers);
console.log(numbers);

// filter
const evenNumbers = numbers.filter((item) => item % 2 === 0);
console.log(evenNumbers);
console.log(numbers);

// reduce
const summa = numbers.reduce((accumulator, number)=>accumulator+number)
console.log(summa);
console.log(numbers);
