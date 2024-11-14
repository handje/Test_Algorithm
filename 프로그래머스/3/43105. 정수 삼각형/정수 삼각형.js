function solution(triangle) {
  const dp = [...triangle];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const curr = triangle[i][j];
      let maxNum;
      if (j - 1 < 0) {
        maxNum = dp[i - 1][j];
      } else if (j === i) {
        maxNum = dp[i - 1][j - 1];
      } else {
        if (dp[i - 1][j - 1] < dp[i - 1][j]) {
          maxNum = dp[i - 1][j];
        } else {
          maxNum = dp[i - 1][j - 1];
        }
      }

      if (dp[i][j] < curr + maxNum) {
        dp[i][j] = curr + maxNum;
      }
    }
  }
  console.log(dp);
  return Math.max(...triangle[triangle.length - 1]);
}