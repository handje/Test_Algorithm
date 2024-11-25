function solution(triangle) {
  const results = [];
  const n = triangle.length;

  for (let i = 0; i < n; i++) {
    results.push([...triangle[i]]);
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let curr = results[i][j];
      results[i + 1][j] = Math.max(
        results[i + 1][j],
        triangle[i + 1][j] + curr
      );
      results[i + 1][j + 1] = Math.max(
        results[i + 1][j + 1],
        triangle[i + 1][j + 1] + curr
      );
    }
  }
  return Math.max(...results[n - 1]);
}