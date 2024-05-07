/*ZI-TASK:
 
Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
MASALAN: delayHelloWorld("Hello World") return "Hello World"
*/

function delayHelloWorld(str: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str);
    }, 3000);
  });
}
delayHelloWorld("Hello World").then((data) => console.log(data));

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
