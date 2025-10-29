// const names = ["Anna", "Max", "Otto", "Leo", "Bred"];
// console.log(names);

// const indexOtto = names.indexOf("Otto");
// console.log(indexOtto);

// // names.splice(indexOtto, 1);

// names.splice(indexOtto, 1, 'Jack')
// console.log(names);

// const weekDays = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// const indexTuesday = weekDays.indexOf("Tuesday");

// weekDays.splice(indexTuesday, 2, "Friday");
// console.log(weekDays);

// const indexMonday = weekDays.indexOf("Monday");

// weekDays.splice(indexMonday, 1, "Saturday");
// console.log(weekDays);

// const indexThursday = weekDays.indexOf("Thursday");

// weekDays.splice(indexThursday);
// console.log(weekDays);

// const names = ["Anna", "Max", "Otto", "Leo", "Bred"];
// console.log(names);

// console.log(names.includes("Anna"));
// console.log(names.includes("Leo"));

// const numbers = [5, 7, 9, 1, 2, 98, 2, 9, 3];
// const key = 4
// if (numbers.includes(key) === false ) {
//   numbers.unshift(key)
// }
// console.log(numbers);

// const colors = [
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "purple",
//   "orange",
//   "pink",
//   "cyan",
// ];
// console.log(colors);


// const userFavoriteColor = prompt("Enter your favorite color");

// if (colors.includes(userFavoriteColor)) {
//   const indexUserFavoriteColor = colors.indexOf(userFavoriteColor);
//   colors.splice(indexUserFavoriteColor, 1);
// } else {
//   const userNumber = prompt(`Choose number from 0 to ${colors.length}`);
//   colors.splice(userNumber, 1, userFavoriteColor);
// }

// console.log(colors);

const colors = [
  "red",
  "green",
  "blue",
  "red",
  "yellow",
  "purple",
  "orange",
  "pink",
  "red",
  "cyan",
];

console.log(colors);
console.log(colors.indexOf("red", 1));
console.log(colors.lastIndexOf("red"));
