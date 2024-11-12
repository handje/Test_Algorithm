function solution(n, lost, reserve) {
  const clothes = Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    if (lost.findIndex((e) => e === i + 1) !== -1) {
      clothes[i]--;
    }
    if (reserve.findIndex((e) => e === i + 1) !== -1) {
      clothes[i]++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (clothes[i] === 0) {
      if (i - 1 >= 0 && clothes[i - 1] === 2) {
        clothes[i]++;
        clothes[i - 1]--;
      } else if (i + 1 < n && clothes[i + 1] === 2) {
        clothes[i]++;
        clothes[i + 1]--;
      }
    }
  }
  return clothes.filter((e) => e >= 1).length;
}