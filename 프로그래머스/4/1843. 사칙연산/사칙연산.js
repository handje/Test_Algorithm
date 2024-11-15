function solution(arr) {
  const n = Math.floor(arr.length / 2) + 1;
  const maxDP = Array.from({ length: n }, () => Array(n).fill(-Infinity));
  const minDP = Array.from({ length: n }, () => Array(n).fill(Infinity));

  // 초기화: 숫자 부분만 초기화
  for (let i = 0; i < n; i++) {
    maxDP[i][i] = parseInt(arr[i * 2]);
    minDP[i][i] = parseInt(arr[i * 2]);
  }

  // DP 갱신
  for (let length = 1; length < n; length++) { // 구간 길이
    for (let i = 0; i < n - length; i++) { // 시작점
      const j = i + length; // 끝점
      for (let k = i; k < j; k++) { // 나누는 지점
        const op = arr[k * 2 + 1]; // 연산자 위치
        if (op === '+') {
          maxDP[i][j] = Math.max(maxDP[i][j], maxDP[i][k] + maxDP[k + 1][j]);
          minDP[i][j] = Math.min(minDP[i][j], minDP[i][k] + minDP[k + 1][j]);
        } else if (op === '-') {
          maxDP[i][j] = Math.max(maxDP[i][j], maxDP[i][k] - minDP[k + 1][j]);
          minDP[i][j] = Math.min(minDP[i][j], minDP[i][k] - maxDP[k + 1][j]);
        }
      }
    }
  }

  return maxDP[0][n - 1]; // 최댓값 반환
}
