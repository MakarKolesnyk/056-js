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
