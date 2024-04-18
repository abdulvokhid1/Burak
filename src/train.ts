/** ZA-TASK:

Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin. 
MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]
 */

function sortByAge(objects: { age: number }[]): { age: number }[] {
  // Sort the array of objects by age
  const sortedArray = objects.sort((a, b) => a.age - b.age);
  
  return sortedArray;
}

console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));








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