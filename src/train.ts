// J-TASK:

function findLongestWord(input: string) {
  let words: string[] = input.split(" ");

  let longWord: string = "";
  let maxLength: number = 0;

  for (let word of words) {
    if (word.length > maxLength) {
      longWord = word;
      maxLength = word.length;
    }
  }
  return longWord;
}
console.log(findLongestWord("I come from Uzbekistan"));