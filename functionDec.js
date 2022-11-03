//here we want to run function only once, means function have to remembre that it has been called once
//so it can be done using closure
const oncify = (convert) =>{
    let counter = 0;
    const inner = (input) =>{
        if(counter == 0)
        {
            output = multiplyby2(input);
            counter++;
            return output;
        }
        return "sorry";
    }
    return inner;
}
const multiplyby2 = (num) => num*2;
const oncifiedmulby2 = oncify(multiplyby2);
console.log(oncifiedmulby2(2));
console.log(oncifiedmulby2(2));
