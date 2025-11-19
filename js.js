// 1
// function User(name, age){
//     this.age = age;
//     this.name = name;
// }

// 2
// function UserPrototype(){
//     this.logName = function(){
//         console.log(this.name);
//     }
// }

// 3
// User.prototype = new UserPrototype

class Pet{
    constructor(name, type, age){
        this.name = name;
        this.type = type;
        this.age = age;
    }
    logEat(){
        console.log(this.name + " eating");
    }
    logSleep(){
        console.log(this.name + " sleeping");
    }
    logWalk(){
        console.log(this.name + " walking");
    }
}

const pet = new Pet("Dgina", 'dog', 9)
console.log(pet);
pet.logEat()
pet.logSleep()
pet.logWalk()


class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    logName(){
        console.log(this.name);
    }
}

// 4
const user = new User("Alex", 20)
console.log(user);
user.logName()
