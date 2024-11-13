function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);  // 비용을 기준으로 오름차순 정렬

  const parent = Array.from({ length: n }, (_, index) => index);

  // find 함수: 노드의 부모를 찾음 (경로 압축 포함)
  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  // union 함수: 두 집합을 합침
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      parent[rootY] = rootX;
    }
  }

  let totalCost = 0;
  for (const [u, v, cost] of costs) {
    if (find(u) !== find(v)) {
      union(u, v);        // 두 노드를 연결하고
      totalCost += cost;  // 비용을 추가
    }
  }

  return totalCost;
}
