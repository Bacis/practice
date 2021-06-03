/*
 */
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const reducer = (digitMap, currentValue) => {
    digitMap[currentValue] = ++digitMap[currentValue] || 0;
    return digitMap;
  };

  const occurances = A.reduce(reducer, {});
  let keys = Object.keys(occurances);
  const sortedValues = keys.sort((a, b) => occurances[b] - occurances[a]);

  return parseInt(sortedValues[0]) === 1 ? 0 : parseInt(sortedValues[0]);
}

function solution2(T) {
  const visitedCities = [];
  let usedTicket = false;

  for (let P in T) {
    if (T[P] % 2 && !visitedCities.includes(visitedCities[P])) {
      usedTicket = true;

      visitedCities.push(P);
    } else if (!visitedCities.includes(visitedCities[P])) {
      visitedCities.push(P);
    }
  }

  return visitedCities.length;
}

console.log(solution2([0, 9, 0, 2, 6, 8, 0, 8, 3, 0]));
console.log(solution([5, 1, 2, 2, 3, 2, 3]));
