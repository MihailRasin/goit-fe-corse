//task_3

const findLongestWord = function (string) {
  let strokeMath = string.split(" ");
  let longestWord = strokeMath[0];
  for (let i = 0; i < strokeMath.length; i += 1) {
    let wordLenght = strokeMath[i].length;

    if (wordLenght > longestWord.length) {
      longestWord = strokeMath[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
