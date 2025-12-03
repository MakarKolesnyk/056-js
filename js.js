function throwErrorNumber(value, minValue=0) {
  if (typeof value !== "number" || value <= minValue) throw new Error("invalid value");
}

class Product {
  #name;
  #price;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  set name(value) {
    if (typeof value !== "string" || value.trim().length < 3) {
      throw new Error("invalid value");
    }
    this.#name = value;
  }
  get name() {
    return this.#name;
  }
  set price(value) {
    throwErrorNumber(value);
    this.#price = value;
  }
  get price() {
    return this.#price;
  }
  getInfo(){
   return this.#name +  ", price = " + this.#price;
  }
}

class RealProduct extends Product {
  #weight;
  constructor(name, price, weight) {
    super(name, price);
    this.weight = weight;
  }
  set weight(value) {
    throwErrorNumber(value);
    this.#weight = value;
  }
  get weight() {
    return this.#weight;
  }
  getInfo(){
    return super.getInfo() + ", weight = " + this.#weight + 'kg';
  }
}

class VirtualProduct extends Product{
  #size;
  constructor(name, price, size){
    super(name, price)
    this.size = size;
  }
  set size(value){
    throwErrorNumber(value)
    this.#size = value
  }
  get size(){
    return this.#size
  }
  getInfo(){
    return super.getInfo() + ", size = " + this.#size + "mb";
  }
}

try {
  const egg = new Product("egg", 3.54);
  console.log(egg.getInfo());
  const disk = new RealProduct("music disk", 154, 0.05);
  console.log(disk.getInfo());
  const albom = new VirtualProduct('new albom', 200, 110)
  console.log(albom.getInfo());
} catch (error) {
  console.error(error);
}
