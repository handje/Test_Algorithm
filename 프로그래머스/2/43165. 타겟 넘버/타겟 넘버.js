function solution(numbers, target) {
  const end = numbers.length;
  let answer = 0;
  function dfs(i, res) {
    if (i === end) {
      if (res === target) answer++;
      return;
    }
    dfs(i + 1, res + numbers[i]);
    dfs(i + 1, res - numbers[i]);
  }
  dfs(0, 0);
  return answer;
}