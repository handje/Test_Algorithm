function solution(money) {
  const n = money.length;

  if (n === 1) return money[0]; // 집이 하나만 있으면 그 집의 돈이 최대 금액

  // 첫 번째 집을 포함하는 경우
  const dpIncludeFirst = Array(n).fill(0);
  dpIncludeFirst[0] = money[0];
  dpIncludeFirst[1] = Math.max(money[0], money[1]);
  for (let i = 2; i < n - 1; i++) {
    dpIncludeFirst[i] = Math.max(dpIncludeFirst[i - 1], dpIncludeFirst[i - 2] + money[i]);
  }

  // 첫 번째 집을 제외하는 경우
  const dpExcludeFirst = Array(n).fill(0);
  dpExcludeFirst[0] = 0;
  dpExcludeFirst[1] = money[1];
  for (let i = 2; i < n; i++) {
    dpExcludeFirst[i] = Math.max(dpExcludeFirst[i - 1], dpExcludeFirst[i - 2] + money[i]);
  }

  return Math.max(dpIncludeFirst[n - 2], dpExcludeFirst[n - 1]);
}
