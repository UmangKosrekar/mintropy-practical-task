// Debugging Exercise
// In this exercise, you will review a code snippet and identify potential issues or suggest improvements. The goal is to evaluate your problem-solving skills, attention to detail, and understanding of backend principles.
// Code Snippet
// Node.js Code Snippet

function processData(dataArray) {
  try {
    const result = []; // let is not required over here, cause we are not changing the type of it or value of the same

    return dataArray.map((item) => (item % 2 === 0 ? item : "Odd"));

    for (const item of dataArray) {
      // let i = 0; i <= dataArray.length; i++ (old code, <= wrong, < right)
      // redone this to for of loop

      if (!Number.isInteger(item)) {
        throw new Error("Input must be an array of integers.");
      }

      if (item % 2 === 0) {
        result.push(item);
      } else {
        result.push("Odd");
      }
    }

    return result;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

const data = [2, 4, 7, 8, 10];
console.log(processData(data));

// Questions
// 1.	1. Identify any logical or syntactical errors in the code snippet.
// 2.	2. Suggest improvements to optimize the code.
// 3.	3. How would you handle cases where the input data is not an array of integers?
// 4.	4. Propose additional tests to ensure the function behaves as expected for edge cases.
// 5.	5. Suggest how you could handle large datasets efficiently.

/**
1. Line 8 instead of <=, < is correct as the array will flow out of bound
2. Converted traditional loop form to for of loop which will save a memory of storing and incrementing value of 'i'
3. If the data type is Object, we can use Object.values(x) to get values to array
    If the data type is String, we can use string.split(,) to get values to array separated by comma
4. Can use null and undefined in the given data
5.  
 */
