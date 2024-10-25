function solution(k, dungeons) {
  let maxCount = 0;
  const visited = Array(dungeons.length).fill(false);

  function dfs(k, cnt) {
    maxCount = Math.max(cnt, maxCount);

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= k) {
        visited[i] = true;
        dfs(k - dungeons[i][1], cnt + 1);
        visited[i] = false;
      }
    }
  }
  dfs(k, 0);
  return maxCount;
}