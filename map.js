//map is a function which will manipulate array in some way.
//it will transfor array to another form.
//in this example we will add 2 to every element of array using map.
const map = (array,instruction) =>
{
    const output = [];
    for(let i = 0; i < array.length; i++)
    output.push(instruction(array[i]));
    return output;
}
const add = (a) => a + 2;
console.log(map([1,2,3],add)); //this line can also be written as:
//console.log(map([1,2,3],a => a + 2)) //we can directly pass function definition to the higer order function.


