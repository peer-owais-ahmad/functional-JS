//we have a function which has arity of 2, we want to edit it so its arity becomes 1.
//we have a multiply function we want to edit it to make it multiple by 2.
const multply = (a,b) => a * b;
const prefilfunction = (fn,prefilledvalue) =>{
    const inner = (liveinput) =>{
        let output = fn(liveinput,prefilledvalue);
        return output;
    }
    return inner;
}
const multiplyby2 = prefilfunction(multply,2);
console.log(multiplyby2(5));
