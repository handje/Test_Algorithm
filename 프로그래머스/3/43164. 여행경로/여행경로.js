var solution = function (tickets) {
  const graph = new Map();

  // 그래프 생성
  for (const [src, dst] of tickets) {
    if (!graph.has(src)) graph.set(src, []);
    graph.get(src).push(dst);
  }
  console.log(graph);
  // 목적지 리스트 정렬
  for (const [key, value] of graph) {
    value.sort().reverse(); // 역순 정렬하여 pop() 사용 가능
  }
  console.log(graph);

  const itinerary = [];

  function dfs(airport) {
    while (graph.has(airport) && graph.get(airport).length > 0) {
      dfs(graph.get(airport).pop());
    }
    itinerary.push(airport);
  }

  dfs("ICN");

  return itinerary.reverse();
};