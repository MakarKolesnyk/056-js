const names = ['Sasha', 'Marta', 'Sasha', 'Andrii', 'Marta', 'Oleh'];
const set = new Set(names);
console.log(set.size);
console.log(...set);
set.add("Bob")
console.log(...set);
set.delete("Bob")
console.log(...set);
set.has('Bob')
console.log(set.has('Bob'));

const studentWithGrade = new Map();

function addNewStudentWithGrade (name, grade){
    if(studentWithGrade.has(name)){
       const grades = studentWithGrade.get(name)
       grades.push(grade)
       studentWithGrade.set(name, grades)
    } else {
        studentWithGrade.set(name, [grade])
    }
}
addNewStudentWithGrade('Alex', 5)
addNewStudentWithGrade('Bob', 4)
addNewStudentWithGrade('Bob', 4)
addNewStudentWithGrade('Bob', 4)
addNewStudentWithGrade('Bob', 5)
addNewStudentWithGrade('Anna', 4)
addNewStudentWithGrade('Steve', 3)
addNewStudentWithGrade('Andrey', 3)
console.log(studentWithGrade);


//Створи новий масив без піц, у назві яких є "ананас" (нечутливо до регістру).

const pizzas = ["Пепероні", "Гавайська", "Маргарита", "Ананасова", "Чотири сири"];

const newPizzas = pizzas.filter((el)=>el.toLowerCase().includes("ананас")===false)
console.log(newPizzas);

// Знайди всіх контактів, чиї імена починаються з літери "А".
const contacts = ["Анна", "Артем", "Богдан", "Аліна", "Іван"];
const newConcats = contacts.filter((el)=>el.startsWith("А"))
console.log(newConcats);

// Зроби так, щоб кожне слово в заголовку починалось з великої літери.
const titles = ["новини дня", "погода завтра", "нові технології", "спорт сьогодні"]
const newTitles = titles.map((title)=>{
    const words = title.split(' ').map((word)=>word[0].toUpperCase()+word.slice(1))
    return words.join(" ")
})
console.log(newTitles);

//Створи масив окремих слів і порахуй, скільки їх.
const text = "Сьогодні гарна погода і ми йдемо гуляти і ми йдемо гуляти";
const newText = text.split(" ")
const textSet= new Set(newText)
console.log(textSet.size);

//Створи новий масив, де кожне завдання має номер:
// "1. Почитати"
// "2. Піти в спортзал"
// "3. Погуляти з собакою"
const tasks = ["Почитати", "Піти в спортзал", "Погуляти з собакою"];
const newTasks = tasks.map((task, index)=>`${index+1}. ${task}`)
console.log(newTasks);

//Створи новий масив скорочень (перші три літери).
const months = ["Січень", "Лютий", "Березень", "Квітень"];
const newMonths = months.map((month)=>month.slice(0, 3).toUpperCase())
console.log(newMonths);

