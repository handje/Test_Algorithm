function solution(maps) {
  const xd = [-1, 0, 1, 0];
  const yd = [0, 1, 0, -1];
  const n = maps.length;
  const m = maps[0].length;
  const distance = Array(n)
    .fill()
    .map((e) => Array(m).fill(0));
    
    const queue = [[0, 0]];
    distance[0][0]=1;
    

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const currX = x + xd[i];
      const currY = y + yd[i];
      if (currX < 0 || currX >= n || currY < 0 || currY >= m) {
        continue;
      }

      if (distance[currX][currY] > 1 ) {
        continue;
      }
      if (maps[currX][currY] === 1) {
        distance[currX][currY] = distance[x][y] + 1;
        if (currX === n - 1 && currY === m - 1) {
          return distance[n - 1][m - 1];
        }
        queue.push([currX, currY]);
      }
    }
  }

  return -1;
}
