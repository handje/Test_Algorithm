function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b); // 징검다리 위치 정렬
  rocks.push(distance); // 마지막 종점 추가

  let low = 1; // 최소 거리
  let high = distance; // 최대 거리

  while (low <= high) {
    const mid = Math.floor((low + high) / 2); // 중간 거리
    let removed = 0; // 제거한 돌 개수
    let prev = 0; // 이전 돌의 위치

    // mid 거리 이상 유지하기 위해 제거할 돌 계산
    for (const rock of rocks) {
      if (rock - prev < mid) {
        removed++; // 돌 제거
      } else {
        prev = rock; // 제거하지 않고 현재 돌을 기준점으로 갱신
      }
    }

    if (removed > n) {
      high = mid - 1; // 제거한 돌이 많으면 거리 줄이기
    } else {
      low = mid + 1; // 조건을 만족하면 거리 늘리기
    }
  }

  return high; // 최적의 최소 거리 반환
}
