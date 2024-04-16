// Task-Z

function sumNums(numbers: number[]): number {
  let count = 0;
  for (let num of numbers) {
    if (num % 2 === 0) {
      count += num;
    }
  }
  return count;
}

console.log(sumNums([1, 2, 3]));




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