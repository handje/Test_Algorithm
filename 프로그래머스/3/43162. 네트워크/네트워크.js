function solution(n, computers) {
  let net = 0;
  const map = new Map();

  for (let i = 0; i < computers.length; i++) {
    const temp = [];
    for (let j = 0; j < computers[i].length; j++) {
      if (computers[i][j] === 1 && i !== j) {
        temp.push(j);
      }
      map.set(i, temp);
    }
  }

  const bfs = (queue, visited) => {
    while (queue.length > 0) {
      const curr = queue.shift();
      if (visited.has(curr)) continue;
      visited.add(curr);

      for (let next of [...map.get(curr)]) {
        if (!visited.has(next)) queue.push(next);
      }
    }
  };

  const visited = new Set();

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      bfs([i], visited);
      net++;
    }
  }
  return net;
}
