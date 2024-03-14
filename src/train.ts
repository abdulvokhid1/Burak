
// L-TASK:



function reverseValue(input: string): string {
  const words: string[] = input.split(' ');

  const reversedWords: string[] = words.map(word => {
      return word.split('').reverse().join('');
  });
  return reversedWords.join(' ');
}
console.log(reverseValue("we like coding!")); 