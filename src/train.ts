

// K-TASK:

function countVowels(str: string): number {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count++;
  }
  return count;
}

console.log(countVowels("string"));