function solution(maps) {
  const queue = [];

  const n = maps.length; //행(y)개수
  const m = maps[0].length; //열(x) 개수

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  queue.push([0, 0]);
  while (queue.length > 0) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue; //범위밖

      if (maps[ny][nx] !== 1) continue; //벽 or 이미 방문

      maps[ny][nx] += maps[y][x];
      queue.push([ny, nx]);
    }
  }
  if (maps[n - 1][m - 1] === 1) {
    return -1;
  }
  return maps[n - 1][m - 1];
}