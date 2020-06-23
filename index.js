"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = exports.factorial = exports.multiply = exports.add = void 0;
function add(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}
exports.add = add;
function multiply(...nums) {
    return nums.reduce((total, num) => total * num, 1);
}
exports.multiply = multiply;
function factorial(num) {
    return num ? num * factorial(num - 1) : 1;
}
exports.factorial = factorial;
function average(...nums) {
    const total = nums.reduce((t, num) => t + num);
    return total / nums.length;
}
exports.average = average;
