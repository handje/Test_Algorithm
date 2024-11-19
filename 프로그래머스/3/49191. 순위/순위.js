function solution(n, results) {
  // 그래프 초기화 (플로이드-워셜용)
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

  // 결과 반영 (A → B: A가 B를 이김)
  for (const [a, b] of results) {
    graph[a][b] = true;
  }

  // 플로이드-워셜 알고리즘
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] && graph[k][j]) {
          graph[i][j] = true;
        }
      }
    }
  }

  // 정확한 순위를 알 수 있는 선수 찾기
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] || graph[j][i]) {
        count++;
      }
    }
    if (count === n - 1) {
      answer++;
    }
  }

  return answer;
}
