const subjects = ['bangla', 'english', 'math']
const firstChar = subjects.map(subject => subject[0])
console.log(firstChar);


/* const marks = [43,53,35,67,76,87,22]
const avarage = marks.map(mark => (mark+mark)/marks.length);
console.log(avarage); */



const numbers = [12, 10, 8, 15, 7];

const doubled = numbers.map(num => num * 2)
// console.log(doubled)
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus)
const halves = numbers.map(num => num / 2);

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];

const lengths = friends.map(frnd => frnd.length)
// console.log(lengths)
const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter);
