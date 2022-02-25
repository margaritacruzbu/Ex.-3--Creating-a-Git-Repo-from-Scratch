function aFunction() {
    console.log("A function was run")
    return 1
}

let functionReference = aFunction

function callFunction(functionParameter,times) {
    for (let i , 0; i < times) i++; {
    return functionParameter()
    }
}



//console.log(aFunction())
//console.log(functionReference())
//console.log(callFunction(functionReference, 3))

let aFunc = function () {
    return Math.random()
}
aFunc()
aFunc - undefined

let arrowFunction = () => Math.random()
//console.log(arrowFunction())
let arrowFunction2 = () => ({ a:5 })
console.log(arrowFunction2())
let arrowFunction3 = () => { 
    let ranNumber = Math.random ()
    return { a: ranNumber } 
}
//console.log(arrowFunction3())

let arrayValues = [1, 2, 3, 4]
for (let item of arrayValues) {
    console.log(item)
}

arrayValues.forEach((item) => console.log(item))
let sum = arrayValues.reduce((previousValue, currentValue) => previousValue + currentValue)
console.log("The sum is " + sum)
//3.1 flattening(list)
//Use the reduce method in combination with the concat method to "flatten" an array of arrays into a single array that has all the elements of the orginal arrays.

//what is the reduce method?

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
export function flattening(list) {
    return list.reduce((previousValue, currentValue) => previousValue.concat(currentValue))
}
// → [1, 2, 3, 4, 5, 6]
console.log(flattening(arrays))

//3-2. loop(value, test, update, body)
// Your code here.
export function loop(value, test, update, body) {
    for ( let curValue = value; test (curValue); curValue = update(curValue)) {
        body(curValue)
    } 
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
loop(0, n => n > 3, n => n + 1, console.log);
// → 3
// → 2
// → 

//3-3. everyLoop(array, test)
//3-4. everySome(array, test)

export function everyLoop(array, test) { 

}
{
    // Your code here.
    let returnValue = true
    for (let item of array) {
        returnValue = returnValue && test(item)
    }
    return returnValue
  }

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true

 export function everySome(array, test) 
{
// Your code here.
    return !array.some(item => {
        console.log("Applying the test to " + item + " with result " + test (item))
       if (!test(item)) {
           console.log ("I found an item that doesn't meet the test!" )
       }
        return !test(item)
    })
}
    
console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true

