let word1 = "abc";
let word2 = "pqr";
var mergeAlternately = function (word1, word2) {
  let len1 = word1.length;
  let len2 = word2.length;
  let concat = "";
  let i = 0;
  let j = 0;
  while (i < len1 || j < len2) {
    if (i < len1) {
      concat = concat + word1[i];
      i++;
    }
    if (j < len2) {
      concat = concat + word2[j];
      j++;
    }
  }
  return concat;
};
mergeAlternately(word1,word2);