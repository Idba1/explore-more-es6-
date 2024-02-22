const counts = [23,454,23,12,34,56,712,45,76];
const totalCount = counts.reduce((p,c)=> p+c, 0);
console.log(totalCount);


const numbers = [4, 5, 7, 1, 2, 66];
const total = numbers.reduce((previous, current) => previous + current, 0)
console.log(total)

const sum = numbers.reduce((p, c) => p + c, 0)
console.log(sum)