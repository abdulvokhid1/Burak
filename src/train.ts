
/** P-TASK:

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]*/


function objectToArray(obj: Record<string, any>): [string, any][] {
  const result: [string, any][] = [];
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          result.push([key, obj[key]]);
      }
  }
  return result;
}

console.log(objectToArray({a: 10, b: 20}));





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