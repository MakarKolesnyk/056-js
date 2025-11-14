function summa (...args){
    return args.reduce((sum, elem)=>sum+eleem, 0);
}

const map = new Map()

map.set('word', ()=>{console.log("hi");}
)
map.set(summa, 22);
map.set(20, null)

console.log(map);
console.log(map.size);
console.log(map.get(summa));
console.log(map.has(summa));

map.forEach((value, key)=>console.log(value, key))

const test = {
    props: 45,
    title: "Object",
    555:1000,
    age: 33,
    "01":"01"
}
for (const key in test) {
    // console.log(key, test[key]);
}