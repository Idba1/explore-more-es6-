const counts = [23,454,23,12,34,56,712,45,76];
function doubleIt2(count){
    return count*2;
}
const count = counts.map(doubleIt2)
console.log(count);


const count2 = counts.map(x => x*5);
console.log(count2);



// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array





const numbers = [4, 5, 2, 8, 10];

function doubleIt(num) {
    // console.log('num now', num)
    return num * 2;
}

const double2 = n => n * 2;

const result = numbers.map(doubleIt);
// console.log(result)

const output = numbers.map(double2)
// console.log(output)
const output2 = numbers.map(n => n * 2);

// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }

// console.log(doubled)