/*whenever function returns the function it takes along with it the surrouding variables available to it into its 
backpack, which is known to be the persistant memory for that function*/

const outer = () => {
    let counter = 0;
    const incrementcounter = () =>
    {
        counter++;
        console.log(counter);
    }
    return incrementcounter;
}
const myfun = outer();
myfun(); //console 1
const myfun2 = outer();
myfun2(); //console 1
myfun(); //console 2
