// N-TASK:

function palindromCheck(str: string) {
  const result = str.split("").reverse().join("");
  return result === str ? true : false;
}
console.log(palindromCheck("dad"));
console.log(palindromCheck("son"));