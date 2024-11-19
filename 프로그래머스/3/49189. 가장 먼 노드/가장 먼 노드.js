function solution(n, edge) {
  // 그래프 초기화
  const graph = Array.from({ length: n + 1 }, () => []);
  edge.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  // BFS 초기 설정
  const distance = Array(n + 1).fill(-1); // 거리 배열 초기화
  const queue = [1];
  distance[1] = 0; // 시작 노드의 거리는 0

  while (queue.length > 0) {
    const node = queue.shift();

    for (const neighbor of graph[node]) {
      if (distance[neighbor] === -1) { // 방문하지 않은 노드만 처리
        distance[neighbor] = distance[node] + 1;
        queue.push(neighbor);
      }
    }
  }

  // 최장 거리 및 해당 거리의 노드 개수 계산
  const maxDistance = Math.max(...distance);
  return distance.filter((d) => d === maxDistance).length;
}
