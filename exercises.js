//used ChatGPT to help with exercises
//3-1. flattening(list)
//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
//reduce method iterates over each element in the arrays array and accumuates the result into one value
let flattenedArray = arrays.reduce((accumulatedResult, arrayofArrays) => {
    //concatenates the arrayofArrays to the accumulatedResult and returns a new array
    return accumulatedResult.concat(arrayofArrays);
})
//prints the new flattened array to the console
console.log(flattenedArray)
// → [1, 2, 3, 4, 5, 6]


//3-2. loop(value, test, update, body)
//Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

//When defining the function, you can use a regular loop to do the actual looping.

//while loop taking in a value, testFunction, updateFunction, and bodyFunction
//value is the value for the loop
//testFunction continues the loop if it returns true and stops the loop if it returns false
//updateFunction generates a new value for the next iteration
//bodyFunction is called for each iteration with the current value
function loop(value, testFunction, updateFunction, bodyFunction) {
    while (testFunction(value)) { //continues iterating if testFunction is true
        bodyFunction(value); //updates the value
        value = updateFunction(value); //loop continues until it becomes false
    }
}

loop(3, n=> n > 0, n => n - 1, console.log);



//3-3. everyLoop(array, test)
//3-4. everySome(array, test)
/* Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement two versions of every (everySome and everyLoop) as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.*/

function everyLoop(array, test) 
{
  // Your code here.
  //for of loop to iterate through elements of the array
  //returns false if no elements satisfy the test function and true if they do
  for (const element of array) {
    if (!test(element)) {
        return false;
    }
  }
  return true;
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true

function everySome(array, test) 
{
// Your code here.
//some method checks if there's an element in the array that doesn't satisfy the test function
//returns true if all elements satisfy the test function and false if it does not
return !array.some(element => !test(element));
} 

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true