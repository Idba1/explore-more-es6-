const student = [
    {id: 1, name: 'Idba', marks:200},
    {id: 2, name: 'Rifa', marks:400},
    {id: 3, name: 'tisha', marks:400},
    {id: 4, name: 'anisha', marks:200},
    {id: 5, name: 'mimmi', marks:430},
]

student.forEach(id => console.log(id.id));

const name = student.map(name => name.name);
console.log(name);

const even = student.filter(num => num.marks>=400);
console.log(even)


const even2 = student.find(num => num.marks>=400);
console.log(even2)


const mark3 = student.reduce((previou,present) => previou + present.marks,0)
console.log(mark3)

const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
]

// map
const names = products.map(product => product.name)
// console.log(names)
const prices = products.map(p => p.price)
// console.log(prices)

// forEach
products.forEach(p => console.log(p.id))

// filter
const expensive = products.filter(p => p.price > 50000)
// console.log(expensive)

// find 
const affordable = products.find(p => p.price < 50000)
console.log(affordable)

// reduce
const total = products.reduce( (acum, current) => acum + current.price , 0)
console.log(total)
