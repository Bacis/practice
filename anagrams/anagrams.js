module.exports = {
  anagrams: (word, words) => {
    const reducer = (countMap, currentValue) => {
      countMap[currentValue] = ++countMap[currentValue] || 1;
      return countMap;
    };
  
    const sortObject = (o) =>
      Object.keys(o)
        .sort()
        .reduce((r, k) => ((r[k] = o[k]), r), {});
  
    const wordLetters = word.split("").reduce(reducer, {});
  
    return words.filter((word) => {
      const followingWordLetters = word.split("").reduce(reducer, {});
  
      if (
        JSON.stringify(sortObject(followingWordLetters)) ===
        JSON.stringify(sortObject(wordLetters))
      ) {
        return word;
      }
    });
  }
}
