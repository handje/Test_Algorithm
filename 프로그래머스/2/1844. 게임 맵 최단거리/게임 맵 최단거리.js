function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const queue = [[0, 0]];

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    let acc = maps[x][y];

    for (let i = 0; i < 4; i++) {
      const cx = x + dx[i];
      const cy = y + dy[i];
      if (cx < 0 || cx >= n) {
        continue;
      }
      if (cy < 0 || cy >= m) {
        continue;
      }
      if (maps[cx][cy] === 0 || maps[cx][cy] > 1) {
        continue;
      }
      queue.push([cx, cy]);
      maps[cx][cy] = acc + 1;
    }
  }
  return maps[n - 1][m - 1] > 1 ? maps[n - 1][m - 1] : -1;
}