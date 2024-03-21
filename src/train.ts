// N-TASK:

function palindromCheck(str: string) {
  const result = str.split("").reverse().join("");
  return result === str ? true : false;
}
console.log(palindromCheck("dad"));
console.log(palindromCheck("son"));

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