function solution(n, times) {
  let low = 1; // 최소 시간
  let high = Math.max(...times) * n; // 최대 시간

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    // mid 시간 내에 처리 가능한 사람 수 계산
    const peopleProcessed = times.reduce((sum, time) => sum + Math.floor(mid / time), 0);

    if (peopleProcessed >= n) {
      high = mid; // 시간을 줄여 더 최적의 시간을 찾음
    } else {
      low = mid + 1; // 시간을 늘려야 함
    }
  }

  return low; // 최적의 최소 시간 반환
}
