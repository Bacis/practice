const object1 = { a: 2, b: 2 };
const object2 = { b: 2, a: 2 };

const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      return false;
    }
  }

  return true;
};

const sortObject = (o) =>
  Object.keys(o)
    .sort()
    .reduce((r, k) => ((r[k] = o[k]), r), {});

function anagrams(word, words) {
  const reducer = (countMap, currentValue) => {
    countMap[currentValue] = ++countMap[currentValue] || 1;
    return countMap;
  };

  const wordLetters = word.split("").reduce(reducer, {});

  return words.filter((word) => {
    const followingWordLetters = word.split("").reduce(reducer, {});

    if (isEqual(wordLetters, followingWordLetters)) {
      return word;
    }
  });
}

const test = anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
console.log(test);
