//passing the result of one function to another.
const multiplyby4 = a => a * 4;
const add4 = b => b + 4;
const divide4 = c => c/4;
console.log(divide4(add4(multiplyby4(4))));

/*if we analyze in this line we are reducing a function and a value into one then again that value and another
function into one entity and so on means we are reducing. so we can use reduce here.*/
const howtocombine = (value,func) => func(value)


console.log([multiplyby4,add4,divide4].reduce(howtocombine,4)); //this will also produce same output.

//array of functions.
