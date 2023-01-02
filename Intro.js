// Intro to JavaScript APIs: The Reduce Function

// Example 1

// The first example we will look at is a common one: 
// Calculating the sum of items in an array. 
// This requires a simple solution, and using a for loop should look like this
const arrayItems = [1,2,3,4,5,6];
let sum = 0;

for (let i = 0; i < arrayItems.length; i++) {
	sum = sum + arrayItems[i];
}
//sum = 21