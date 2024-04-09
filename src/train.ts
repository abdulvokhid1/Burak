/* W-TASK:

Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]
*/

function chunkArray(arr: any[], size: number): any[][] {
  const chunkedArray: any[][] = [];
  let index = 0;

  while (index < arr.length) {
      chunkedArray.push(arr.slice(index, index + size));
      index += size;
  }

  return chunkedArray;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));


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