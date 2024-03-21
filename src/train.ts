// TASK-O

function calculateSumOfNumbers(arr: any[]): number {
  return arr.reduce((ele, num) => {
    if (typeof num === "number") return ele + num;
    else return ele;
  }, 0);
}

console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

/* Project Standards:
  - Logging standards
  - Naming standards
    CAMEL case : function, method, variable 
    PASCAL : class                            
    KEBAB case : folder - file
    SNAKE case : css
  - Error handling
*/

/* Request:
Traditional Api
Rest Api
GraphQL Api
*/

/* Cookie:
  request: join
  self: destroy
*/

/* Validation:
  Frontend: validation
  Backend: validation
  Database: validation
*/