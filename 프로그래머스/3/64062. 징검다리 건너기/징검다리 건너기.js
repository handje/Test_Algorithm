function solution(stones, k) {
  let left = 1;
  let right = 0;
  for (const v of stones) if (v > right) right = v;

  let answer = 0;

  const canCross = (mid) => {
    let skip = 0;
    for (const stone of stones) {
      if (stone < mid) {  // 여기서 < 로만 검사
        if (++skip >= k) return false;
      } else {
        skip = 0;
      }
    }
    return true;
  };

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canCross(mid)) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
