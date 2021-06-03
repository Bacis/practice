let numbers = [-1000, -3, 1, 2, 3];
numbers.sort((a, b) => a - b);

function solution(A) {
  let min = 1;
  A.sort((a, b) => a - b);

  for (let i in A) {
    if (A[i] > -1 && A[i] == min) {
      min++;
    }
  }

  return min;
}

console.log(solution(numbers));
