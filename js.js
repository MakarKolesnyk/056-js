class Square {
  #side;
  constructor(side) {
    this.side = side;
  }
  set side(value) {
    if (typeof value !== "number") {
      throw new TypeError("type must be number");
    }
    if (value <= 0) {
      throw new RangeError("value must be positive");
    }
    this.#side = value;
  }
  get side() {
    return this.#side;
  }
  getArea() {
    return this.#side ** 2;
  }
}

try {
  const square = new Square(5);
  // console.log(square.getArea());
} catch (error) {
  console.error(error);
}

class Circle{
  #radius;
  constructor(radius){
    this.radius = radius
  }
  set radius(value) {
    if (typeof value !== "number") {
      throw new TypeError("type must be number")
    }
    if (value <=0) {
      throw new RangeError("value must be positive")
    }
    this.#radius = value;
  }
  getArea(){
    return Math.PI * this.#radius ** 2;
  }
  getPeremiter(){
    return 2 * Math.PI * this.#radius**2;
  }
}

try {
  const circle = new Circle(2)
  // console.log(circle.getArea());
  // console.log(circle.getPeremiter());
} catch (error) {
  console.error(error)
}

// console.log("1");


class User {
  #login;
  constructor(login){
    this.login = login
  }
  set login(value){
    if(typeof value !== "string"){
      throw new TypeError ('type must be string')
    }
    if(value.trim().length<3 || value.trim().length>15){
      throw new RangeError ('length 3..15')
    }
    this.#login = value
  }
  get login(){
    return this.#login;
  }
}

try {
  const user = new User("qwert")
} catch (error) {
  console.error(error)
}