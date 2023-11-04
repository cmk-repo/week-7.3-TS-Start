"use strict";
function gerFirstElement(arr) {
    return arr[0];
}
function getFirstItem(arr) {
    // Generic that will identify the type automatically 
    return arr[0];
}
function swap(a, b) {
    return [b, a];
}
// using arrow function 
const swap2 = (a, b) => {
    return [b, a];
};
// swap if a is string and b is number or vise versa
function swapGenericType(a, b) {
    return [b, a];
}
let ans = gerFirstElement([1, 2, 3]);
let ans2 = gerFirstElement(["one", "two", "three"]);
let ans3 = getFirstItem([1, 2, 3]);
let ans4 = getFirstItem(["one", "two", "three"]);
console.log(ans);
console.log(ans2);
console.log(ans3 * 10);
console.log(ans4.toUpperCase());
console.log(swap(1, 2));
console.log(swap("sas", "pas"));
console.log(swapGenericType(1, "second"));
console.log(swapGenericType("First", 2));
