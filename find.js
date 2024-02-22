const numbers1 = [1, 5, 6, 4, 15];
const num = numbers1.find(num => num%2 === 0);
console.log(num)

const players = [75, 65, 67, 72, 55, 59];

// const selected = players.find(player => player > 70)
const selected = players.find(player => player > 50)
console.log(selected)

/**
 * 1. map 
 * 2. forEach
 * 3. filter 
 * 4. find
 * 5.reduce
*/