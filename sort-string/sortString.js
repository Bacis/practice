String.prototype.sort = function () {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function (x) {
    return x.sort() === word.sort();
  });
}

function anagrams2(word, words) {
  word = word.split("").sort().join("");
  return words.filter(function (v) {
    return word == v.split("").sort().join("");
  });
}

console.log(anagrams("abba", ["bbaa", "bvas", "baba"]));
