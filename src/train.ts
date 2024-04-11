/*  X-TASK:

Shunday function yozing, uni object va string parapetrlari bolsin. 
Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

*/

// Define the function
function countOccurrences(obj: any): number {
  let count = 0;

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      count++;
    } else if (typeof obj[key] === "object") {
      count += countOccurrences(obj[key]);
    }
  }
  return count;
}
console.log(countOccurrences({ model: "Bugatti", steer: { model: "HANKOOK", size: 30 } })); 




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