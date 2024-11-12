function solution(name) {
  let moves = 0;
  const n = name.length;

  // 상하 조작 계산-> 둘 중 최소 선택
  for (let char of name) {
    const upDown = Math.min(
      char.charCodeAt(0) - "A".charCodeAt(0),
      "Z".charCodeAt(0) - char.charCodeAt(0) + 1
    );
    moves += upDown;
  }

  // 좌우 조작 계산
  let minMove = n - 1; // 모든 문자를 순서대로 이동하는 경우
  for (let i = 0; i < n; i++) {
    let next = i + 1;

    //A는 이동이 필요없기때문에 A건너뛰기
    while (next < n && name[next] === "A") {
      next++; 
    }

    /*
    i=현재까지 오른쪽으로 이동한 위치
    n=문자열 길이
    next=A가 아닌 다음 문자

    1. 오른쪽으로 이동 n-1
    2. 중간에 왼쪽으로 이동 i+(n-next)
    3. 끝까지 오른쪽으로 갔다가 처음으로 돌아오기
    */
    minMove = Math.min(minMove, i + n - next + Math.min(i, n - next));
  }

  return moves + minMove;
}

console.log(solution("JEROEN"));
