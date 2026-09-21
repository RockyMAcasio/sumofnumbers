"use strict";
function sumFor(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total;
}
function sumWhile(numbers) {
    let total = 0;
    let index = 0;
    while (index < numbers.length) {
        total += numbers[index];
        index += 1;
    }
    return total;
}
function sumRecursion(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const [first, ...remaining] = numbers;
    return first + sumRecursion(remaining);
}
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((total, currentNumber) => total + currentNumber, 0);
}
const testNumbers = [1, 2, 3, 4];
console.log(sumFor(testNumbers));
console.log(sumWhile(testNumbers));
console.log(sumRecursion(testNumbers));
console.log(sumTheFunctionalWay(testNumbers));
