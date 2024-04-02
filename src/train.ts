/*** U-TASK:

Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha 
bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;
 */

function sumOdds (num: number) {
  let count:number = 0;
  for(let i = 0; i < num; i++){
    if( i % 2 !== 0){
       count ++
    }
  }
  return count
  }

 console.log(sumOdds(9))



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