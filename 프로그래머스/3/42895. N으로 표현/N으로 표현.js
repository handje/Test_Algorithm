function solution(N, number) {
  if (N === number) return 1; // N과 number가 같으면 바로 1 반환

  const dp = Array.from({ length: 9 }, () => new Set());
  
  for (let i = 1; i < 9; i++) {
    dp[i].add(Number(`${N}`.repeat(i))); // N을 i번 반복한 수 추가
    
    for (let j = 1; j < i; j++) {
      for (const x of dp[j]) {
        for (const y of dp[i - j]) {
          dp[i].add(x + y);   // 덧셈
          dp[i].add(x - y);   // 뺄셈
          dp[i].add(x * y);   // 곱셈
          if (y !== 0) dp[i].add(Math.floor(x / y)); // 나눗셈
        }
      }
    }

    // number가 현재 dp에 있는 경우 최소 횟수(i) 반환
    if (dp[i].has(number)) return i;
  }

  return -1; // 8번 내로 만들 수 없을 때
}
