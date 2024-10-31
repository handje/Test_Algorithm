function solution(n, computers) {
  const visited = new Set();
  let networkCount = 0;

  function bfs(start) {
    const queue = [start];
    visited.add(start);

    while (queue.length) {
      const i = queue.shift();
      for (let j = 0; j < n; j++) {
        if (computers[i][j] === 1 && !visited.has(j)) {
          visited.add(j);
          queue.push(j);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      bfs(i);
      networkCount++;
    }
  }

  return networkCount;
}
