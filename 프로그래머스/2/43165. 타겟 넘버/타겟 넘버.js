function solution(numbers, target) {
  let count = 0;
  function dfs(acc, idx) {
    if (idx === numbers.length) {
      if (target === acc) {
        count += 1;
      }
      return acc;
    }
    dfs(acc - numbers[idx], idx + 1);
    dfs(acc + numbers[idx], idx + 1);
  }
  dfs(0, 0);

  return count;
}