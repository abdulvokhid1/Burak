// Task T

function mergeSortedArrays(num: number[], num1: number[]): number[] {
  return num.concat(num1).sort((a, b) => a - b);
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));



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