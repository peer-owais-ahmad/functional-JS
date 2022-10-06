 map = (array,instruction) =>
{
    const output = [];
    for(let i = 0; i < array.length; i++)
    {
        output.push(instruction(array[i]));
    }
    return output;
}
const multi2 = input1 => {let a = input1 * 2; return a * 2;}
const myarr = map([1,2,3],input1 => {let a = input1 * 2; return a * 2; });

console.log(myarr);


/*reduce 

const reduce = (ar,howtocombine, buildingup) =>
{
    for(let i = 0; i< ar.length; i++)
    {
        buildingup = howtocombine(buildingup,ar[i]);
    }
    return buildingup;
}
const multiarrayelements = (a,b) => a * b;
let ovi = reduce([1,2,3,4],multiarrayelements,1);
console.log(ovi);

*/

//lets use the built in version of reduce 
const myadd2 = (a,b) => b - a;
let myvar = [1,2,3].reduce(myadd2,0);
console.log(myvar);
