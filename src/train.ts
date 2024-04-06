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


 /** V-TASK:

Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}
  */


function countChars(input: string): { [key: string]: number } {
  const charCount: { [key: string]: number } = {};

  for (const char of input) {
      if (charCount[char]) {
          charCount[char]++;
      } else {
          charCount[char] = 1;
      }
  }
  return charCount;
}
console.log(countChars("letter"));
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