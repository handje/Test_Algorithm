function solution(n, wires) {
  let minDiff = wires.length;

  //1. 그래프 생성
  //인덱스 맞추기 위해 0은 빈배열로 두고 n+1배열 생성
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    graph[a].push(b);
    graph[b].push(a);
  }

  //2. 연결을 하나씩 지우면서 계산
  for (const [a, b] of wires) {
    //매 상황마다 visited초기화
    const visited = Array(n + 1).fill(false);

    //그래프에서 연결 제거
    graph[a] = graph[a].filter((node) => node !== b);
    graph[b] = graph[b].filter((node) => node !== a);

    //한쪽의 개수 구하기
    const countA = countNodes(graph, a, visited);
    const countB = n - countA;
    minDiff = Math.min(minDiff, Math.abs(countA - countB));

    function countNodes(graph, node, visited) {
      let count = 0;
      const stack = [node];
      visited[node] = true;

      while (stack.length) {
        const curr = stack.pop();
        count++;
        for (let next of graph[curr]) {
          if (!visited[next]) {
            visited[next] = true;
            stack.push(next);
          }
        }
      }
      return count;
    }

    //다시 연결
    graph[a].push(b);
    graph[b].push(a);
  }
  return minDiff;
}