function solution(m, n, puddles) {
  const dp = Array(n)
    .fill()
    .map((e) => Array(m).fill(0));
  for (const [x, y] of puddles) {
    dp[y - 1][x - 1] = -1;
  }
  dp[0][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dp[i][j] === -1) {
        dp[i][j] = 0;
        continue;
      }
      if (i > 0) dp[i][j] += dp[i - 1][j];
      if (j > 0) dp[i][j] += dp[i][j - 1];
      dp[i][j] %= 1000000007;
    }
  }
  return dp[n - 1][m - 1];
}