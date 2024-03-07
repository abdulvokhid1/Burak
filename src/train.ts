// I-TASK:

function getDigits(str: string) {
  let digits: string = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      digits += str[i];
    }
  }
  return digits;
}
console.log(getDigits("m14i1t"));