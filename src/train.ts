// Task - ZE

function removeDuplicate(str: string): string {
  let arr: string[] = str.split("");
  let s = new Set<string>(arr);

  return Array.from(s).join("");
}

console.log(removeDuplicate("stringg"));




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