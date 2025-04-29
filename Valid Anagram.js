let s = "anagram";
let t = "nagaram";
var isAnagram = function (s, t) {
    if(s.length!==t.length) {
        return false;
    }
  let char1 = s.split("").sort().join();
  let char2 = t.split("").sort().join();
 if(char1===char2) {
    return true;
 }
};

isAnagram(s,t);