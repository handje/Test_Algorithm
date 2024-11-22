function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  const remains = Array(n + 1).fill(1);
  remains[0] = 0;

  for (let i of reserve) {
    remains[i]++;
  }
  for (let i of lost) {
    remains[i]--;
  }

  for (let i of lost) {
    if (remains[i] === 1) {
      continue;
    }

    if (i > 1 && remains[i - 1] === 2) {
      remains[i - 1] = 1;
      remains[i]++;
    } else if (i < n && remains[i + 1] === 2) {
      remains[i + 1] = 1;
      remains[i]++;
    }
  }

  return remains.filter((e) => e !== 0).length;
}