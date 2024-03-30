// TASK-S

function missingNumber(arr: number[]): number {
  const n: number = arr.length;
  const numbers: number = (n * (n + 1)) / 2;
  const arrayNum: number = arr.reduce((num, num2) => num + num2, 0);
  return numbers - arrayNum;
}

console.log(missingNumber([3, 0, 1]));



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