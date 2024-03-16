// M-TASK:

function getSquareNumbers(numbers: number[]) {
  return numbers.map((number) => {
    const square = number ** 2;
    return { number, square };
  });
}

console.log(getSquareNumbers([1, 2, 3]));