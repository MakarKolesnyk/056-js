// function declaration
logWord1('test before')
function logWord1 (word) {
  console.log(word);
}
logWord1('test')

// function expression
const logWord2 = function (word){
  console.log(word);
}
logWord2('new text')

// arow function
const logWord3 = (word) => {
  console.log(word);
}
logWord3('qwerty')