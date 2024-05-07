// TASK - ZH

function findDisappearedNumbers(arr: number[]) {
  const num = arr[arr.length - 1];
  const result = [];
  for (let i = 1; i <= num; i++) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }
  return result;
}
console.log(findDisappearedNumbers([1, 3, 4, 7]));

/* Project Standards:s
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
