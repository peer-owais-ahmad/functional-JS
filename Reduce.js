//reduce function takes two entities and transform them into one entity.
//it does this with the array element by element.
//Implementation of reduce.
const reduce = (array,reducer,accumilator) => {
    for(let i = 0; i<array.length; i++)
    accumilator = reducer(accumilator,array[i])
    return accumilator
}
const add = (a,b) => a+b;
console.log(reduce([1,2],add,0));

//built in version of reduce for arrays.
console.log([1,2,3].reduce(add,0));   //this reduce fun is available in array.prototype(collection of functions)
//link to this array.prototype is because of the property called -proto-.
//this first arguement is automatically the array which is calling the reducue. 



//Builtin function filter
//this function filters the array in some way.
const greaterthan1 = a => a>1
console.log([1,2,3,4,5].filter(greaterthan1));
