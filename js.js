const set = new Set()
set.add(7);
set.add("7");

console.log(set);

const num = [1,2,3,1,4,5,2,6,2,6,7,1,5,22,63,6,3,6,7,32,1,165,6,74,4,3,3,3,3,5,5,5,5,4,2,2,2,5,5,3,]
const uniqSetNumbers = new Set(num);
const uniqNumbers = [...uniqSetNumbers];
console.log(uniqNumbers);

const string = 'SyntaxError: Unexpected token \'const\'';
const word = "subscribe";
console.log(new Set(word));
console.log(new Set(string.toLowerCase()));
console.log(new Set(string.split(" ")));





const dictionary = new Map();
dictionary.set("copy", "копіювати");
dictionary.set("subscribe", "пiдписатися");
dictionary.set("send", "вiдправити");
dictionary.set("share", "подiлитися");
dictionary.set("add to cart", "додати в корзину");
dictionary.set("zoom", "збiльшити");
dictionary.set("play", "грати");

// const word = prompt('enter any word');
// if (dictionary.has(word)) {
//     console.log(dictionary.get(word));
// } else {
//     console.log(word);

// }

// const lang = prompt("1 - eu, 2 - uk");

// switch (lang) {
//   case "1":
//   case "en":
//     dictionary.keys().forEach((item) => console.log(item));
//     break;
//   case "2":
//   case "uk":
//     dictionary.values().forEach((el) => console.log(el));
//     break;

//   default:
//     break;
// }
