//function returning another function
const funcCreator = function()
{
    let counter = 0;
    const add3 = num => num + 3;
    return add3;
}
const generatedfunc = funcCreator();
console.log(generatedfunc(2));

/*here the function definition of add3 gets stored in generatedfunc, now generated func will never reference 
funcCreator anymore, because it was not its own copy of code what is there in add3. */

